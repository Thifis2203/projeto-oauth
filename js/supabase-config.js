import { createClient } from
  "https://esm.sh/@supabase/supabase-js@2";

// Substitua pelos dados do seu projeto
const supabaseUrl = "https://lavkqnrfifwiiunwsovo.supabase.co";
const supabaseKey = "sb_publishable_RS-TqcatpQaTOdSlhLFi-g_QgLxNhfu-";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
