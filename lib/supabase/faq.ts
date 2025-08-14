import { createClient } from "@/lib/supabase/server"

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  display_order: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export async function getFAQs(category?: string): Promise<FAQ[]> {
  try {
    const supabase = createClient()

    let query = supabase.from("faqs").select("*").eq("is_active", true).order("display_order", { ascending: true })

    if (category) {
      query = query.eq("category", category)
    }

    const { data, error } = await query

    if (error) {
      console.error("Error fetching FAQs:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error fetching FAQs:", error)
    return []
  }
}

export async function getFAQById(id: string): Promise<FAQ | null> {
  try {
    const supabase = createClient()

    const { data, error } = await supabase.from("faqs").select("*").eq("id", id).single()

    if (error) {
      console.error("Error fetching FAQ:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error fetching FAQ:", error)
    return null
  }
}

export async function createFAQ(faq: Omit<FAQ, "id" | "created_at" | "updated_at">): Promise<FAQ | null> {
  try {
    const supabase = createClient()

    const { data, error } = await supabase.from("faqs").insert([faq]).select().single()

    if (error) {
      console.error("Error creating FAQ:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error creating FAQ:", error)
    return null
  }
}

export async function updateFAQ(
  id: string,
  updates: Partial<Omit<FAQ, "id" | "created_at" | "updated_at">>,
): Promise<FAQ | null> {
  try {
    const supabase = createClient()

    const { data, error } = await supabase.from("faqs").update(updates).eq("id", id).select().single()

    if (error) {
      console.error("Error updating FAQ:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error updating FAQ:", error)
    return null
  }
}

export async function deleteFAQ(id: string): Promise<boolean> {
  try {
    const supabase = createClient()

    const { error } = await supabase.from("faqs").delete().eq("id", id)

    if (error) {
      console.error("Error deleting FAQ:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error deleting FAQ:", error)
    return false
  }
}

export async function getFAQCategories(): Promise<string[]> {
  try {
    const supabase = createClient()

    const { data, error } = await supabase.from("faqs").select("category").eq("is_active", true)

    if (error) {
      console.error("Error fetching FAQ categories:", error)
      return []
    }

    const categories = [...new Set(data?.map((item) => item.category) || [])]
    return categories.sort()
  } catch (error) {
    console.error("Error fetching FAQ categories:", error)
    return []
  }
}
