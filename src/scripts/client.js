// client.js
import { createClient } from "@supabase/supabase-js"

// Your Supabase URL and API Key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY

// Create the client
const supabase = createClient(supabaseUrl, supabaseKey)

// Fetch all rows from "shows"
export async function getAllShows() {
  const { data, error } = await supabase
    .from('shows')
    .select('*')
    .order('date', { ascending: true, nullsLast: true });

  if (error) {
    console.error('Error fetching shows:', error)
    throw error
  }

  return data
}
