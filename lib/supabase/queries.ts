import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function getFeaturedProjects() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("is_featured", true)
    .order("sort_order", { ascending: true });

  if (error) {
    return [];
  }
  return data ?? [];
}

