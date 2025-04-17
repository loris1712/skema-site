import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://szgobhwrjtoutbezmxki.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6Z29iaHdyanRvdXRiZXpteGtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MTMyNTgsImV4cCI6MjA1NzI4OTI1OH0.0ZgcvDY-13NAnx02cDmBn8rAfvCKBKoVVOAHD9zOoBc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
