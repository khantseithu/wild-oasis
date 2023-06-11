import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hihdhbabdkknsnwmhvmj.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpaGRoYmFiZGtrbnNud21odm1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY0NTA0NjMsImV4cCI6MjAwMjAyNjQ2M30.xN7uPSnnRoDPKVZWNsjeI-nEGzoXDBPgn53UYh52IKA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
