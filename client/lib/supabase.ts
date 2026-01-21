import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wtdnydosiyixrryufobp.supabase.co';
const supabaseAnonKey = 'sb_publishable_-DDsk3y31KxOO47M6LSGyA__jueLrVL';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);