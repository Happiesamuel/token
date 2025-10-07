import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://akzhizixcvqprioekcsn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFremhpeml4Y3ZxcHJpb2VrY3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxNzIyMTksImV4cCI6MjA1NDc0ODIxOX0.fG6H6ydKB_xsEZfCHkjHK8iFMZ9ogSlCnfj9_h0ojew";
const supabase = createClient(supabaseUrl, supabaseKey);

async function insertEmail(email: string) {
  const { error } = await supabase.from("emails").insert([{ email }]);
  if (error) {
    throw new Error(error.message);
  }
}

async function getEmail(email: string): Promise<string> {
  const { data, error } = await supabase
    .from("emails")
    .select("*")
    .eq("email", email)
    .single();
  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export { insertEmail, getEmail };
