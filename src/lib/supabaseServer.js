import { createClient } from '@supabase/supabase-js';

import {
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
} from 'astro:env/server';

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('Missing server Supabase env vars (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY).');
}

export const supabaseServer = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

