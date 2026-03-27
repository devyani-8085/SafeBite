import { createClient } from '@supabase/supabase-js'

// These will be populated once the Supabase project is created via the MCP server
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xyz.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'dummy_anon_key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
