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

export async function listDogProfiles(filters = {}) {
  if (!supabaseReady) {
    return { data: null, error: new Error("Supabase env vars are not set") };
  }

  let query = supabase.from("dog_profiles").select("*").order("sort_order");

  if (filters.profileType) {
    query = query.eq("profile_type", filters.profileType);
  }

  if (filters.status) {
    query = query.eq("status", filters.status);
  }

  if (filters.isFeatured !== undefined) {
    query = query.eq("is_featured", filters.isFeatured);
  }

  const { data, error } = await query;
  return { data, error };
}

export async function getDogProfileBySlug(slug) {
  if (!supabaseReady) {
    return { data: null, error: new Error("Supabase env vars are not set") };
  }

  const { data, error } = await supabase
    .from("dog_profiles")
    .select("*")
    .eq("slug", slug)
    .single();

  return { data, error };
}

export async function listLitters() {
  if (!supabaseReady) {
    return { data: null, error: new Error("Supabase env vars are not set") };
  }

  const { data, error } = await supabase
    .from("litters")
    .select("*")
    .order("birth_date", { ascending: false });

  return { data, error };
}

export async function listDocumentAssets(filters = {}) {
  if (!supabaseReady) {
    return { data: null, error: new Error("Supabase env vars are not set") };
  }

  let query = supabase
    .from("document_assets")
    .select("*")
    .order("uploaded_at", { ascending: false });

  if (filters.visibility) {
    query = query.eq("visibility", filters.visibility);
  }

  if (filters.documentType) {
    query = query.eq("document_type", filters.documentType);
  }

  const { data, error } = await query;
  return { data, error };
}

export async function submitInquiry(form) {
  if (!supabaseReady) {
    return { data: null, error: new Error("Supabase env vars are not set") };
  }

  const payload = { ...form, status: "new" };
  const { data, error } = await supabase
    .from("inquiry_submissions")
    .insert([payload]);

  return { data, error };
}
