// Simple admin-only command endpoint.
// Protect with SUPABASE_SERVICE_ROLE_KEY + admin claim in JWT.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  { auth: { autoRefreshToken: false, persistSession: false } }
);

type Command =
  | { type: "update_puppy_status"; id: string; status: string }
  | { type: "toggle_product"; id: string; is_active: boolean };

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });
  const claims = req.headers.get("x-admin-secret");
  if (!claims || claims !== Deno.env.get("ADMIN_SHARED_SECRET")) {
    return new Response("Unauthorized", { status: 401 });
  }

  const payload = (await req.json()) as Command;
  switch (payload.type) {
    case "update_puppy_status":
      await supabase
        .from("puppies")
        .update({ status: payload.status })
        .eq("id", payload.id);
      break;
    case "toggle_product":
      await supabase
        .from("products")
        .update({ is_active: payload.is_active })
        .eq("id", payload.id);
      break;
    default:
      return new Response("Unknown command", { status: 400 });
  }

  return Response.json({ ok: true });
});
