import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabaseReady = Boolean(supabaseUrl && supabaseAnonKey);

function buildFallbackClient() {
  const error = new Error("Supabase environment variables are not set");
  const response = { data: null, error };
  const noop = async () => response;
  return {
    auth: {
      getSession: async () => ({ data: { session: null }, error }),
      onAuthStateChange: () => ({
        data: { subscription: { unsubscribe: () => {} } },
      }),
      signInWithPassword: noop,
      signUp: noop,
      signOut: noop,
    },
    from: () => ({ insert: noop, select: noop, update: noop }),
    functions: { invoke: noop },
  };
}

const supabase = supabaseReady
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : buildFallbackClient();

export default supabase;
