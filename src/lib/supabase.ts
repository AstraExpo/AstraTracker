import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vozxevzuxmlajsajmkhj.supabase.co";
const supabasePublishableKey = "sb_publishable_nJ0mB524WDTG18UAknCLAQ_RD6SNIAv";

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
