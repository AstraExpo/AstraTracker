import { open } from "@tauri-apps/plugin-shell";
import { supabase } from "./supabase";

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "astratracker://auth-callback",
      skipBrowserRedirect: true,
    },
  });

  if (error) throw error;
  if (data.url) {
    await open(data.url); // opens in system browser
  }
}
