import supabase, { supabaseReady } from "./supabaseClient";

export async function createCheckoutSession(cartItems, customer) {
  if (!supabaseReady) {
    return { data: null, error: new Error("Supabase env vars are not set") };
  }

  const { data, error } = await supabase.functions.invoke(
    "create-checkout-session",
    {
      body: {
        cart: cartItems,
        customer,
      },
    }
  );

  return { data, error };
}

export async function saveMessage(form) {
  if (!supabaseReady) {
    return { data: null, error: new Error("Supabase env vars are not set") };
  }

  const payload = { ...form, status: "open", is_read: false };
  const { data, error } = await supabase.from("messages").insert([payload]);
  return { data, error };
}

export async function saveApplication(form) {
  if (!supabaseReady) {
    return { data: null, error: new Error("Supabase env vars are not set") };
  }

  const payload = { ...form, status: "new" };
  const { data, error } = await supabase.from("applications").insert([payload]);
  return { data, error };
}

export async function subscribeNewsletter(email) {
  if (!supabaseReady) {
    return { data: null, error: new Error("Supabase env vars are not set") };
  }

  const { data, error } = await supabase
    .from("newsletter_subscribers")
    .insert([{ email }]);
  return { data, error };
}
