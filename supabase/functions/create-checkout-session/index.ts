// Supabase Edge Function: create-checkout-session
// Environment: STRIPE_SECRET_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, FRONTEND_URL (optional)
import Stripe from "https://esm.sh/stripe@12.0.0?target=deno";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const stripeSecret = Deno.env.get("STRIPE_SECRET_KEY") ?? "";
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseServiceRole = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const siteUrl = Deno.env.get("FRONTEND_URL") ?? "http://localhost:5173";

const stripe = new Stripe(stripeSecret, {
  apiVersion: "2024-11-20",
});

const supabase = createClient(supabaseUrl, supabaseServiceRole, {
  auth: { autoRefreshToken: false, persistSession: false },
});

type CartItem = { id: string; name: string; price: number; quantity: number };

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const { cart, customer } = await req.json();
    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return Response.json({ error: "Cart is empty" }, { status: 400 });
    }

    const lineItems = (cart as CartItem[]).map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${siteUrl}/checkout/success`,
      cancel_url: `${siteUrl}/checkout/cancel`,
      customer_email: customer?.email,
      metadata: {
        user_id: customer?.user_id ?? "",
      },
    });

    // Seed orders table for traceability
    await supabase.from("orders").insert({
      user_id: customer?.user_id ?? null,
      stripe_session_id: session.id,
      status: "pending",
      total_amount: lineItems.reduce(
        (acc, item) => acc + item.price_data.unit_amount * (item.quantity ?? 1),
        0
      ) / 100,
      currency: "usd",
    });

    return Response.json({ url: session.url, id: session.id });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error?.message ?? "Unknown error" }, { status: 500 });
  }
});
