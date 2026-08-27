import { createClient } from '@supabase/supabase-js';
import { c as SUPABASE_URL, S as SUPABASE_SERVICE_ROLE_KEY } from './server_DVPk31C2.mjs';

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('Missing server Supabase env vars (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY).');
}

const supabaseServer = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

export { supabaseServer as s };
