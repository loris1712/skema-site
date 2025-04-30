import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zhmugdrlkllmwttsqgai.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpobXVnZHJsa2xsbXd0dHNxZ2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NTI1MDksImV4cCI6MjA1MzAyODUwOX0.M7OxQvTHERIMayqJmVjh4A-47IA9QFOOiUrNOiX8-JM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

