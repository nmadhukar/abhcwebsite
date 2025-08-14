import { createClient } from "./server"

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  featured_image_url?: string
  author_name: string
  author_title?: string
  category?: string
  tags?: string[]
  is_published: boolean
  is_featured: boolean
  published_at?: string
  created_at: string
  updated_at: string
}

export async function getBlogPosts(published_only = false): Promise<BlogPost[]> {
  const supabase = createClient()

  try {
    let query = supabase.from("blog_posts").select("*").order("created_at", { ascending: false })

    if (published_only) {
      query = query.eq("is_published", true)
    }

    const { data, error } = await query

    if (error) {
      if (error.message.includes("does not exist") || error.message.includes("schema cache")) {
        console.log("Blog posts table not found - returning empty array")
        return []
      }
      console.error("Error fetching blog posts:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = createClient()

  try {
    const { data, error } = await supabase.from("blog_posts").select("*").eq("slug", slug).single()

    if (error) {
      if (error.message.includes("does not exist") || error.message.includes("schema cache")) {
        console.log("Blog posts table not found - returning null")
        return null
      }
      console.error("Error fetching blog post:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return null
  }
}

export async function createBlogPost(
  post: Omit<BlogPost, "id" | "created_at" | "updated_at">,
): Promise<BlogPost | null> {
  const supabase = createClient()

  try {
    const { data, error } = await supabase.from("blog_posts").insert([post]).select().single()

    if (error) {
      console.error("Error creating blog post:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error creating blog post:", error)
    return null
  }
}

export async function updateBlogPost(id: string, updates: Partial<BlogPost>): Promise<BlogPost | null> {
  const supabase = createClient()

  try {
    const { data, error } = await supabase.from("blog_posts").update(updates).eq("id", id).select().single()

    if (error) {
      console.error("Error updating blog post:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error updating blog post:", error)
    return null
  }
}

export async function deleteBlogPost(id: string): Promise<boolean> {
  const supabase = createClient()

  try {
    const { error } = await supabase.from("blog_posts").delete().eq("id", id)

    if (error) {
      console.error("Error deleting blog post:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error deleting blog post:", error)
    return false
  }
}

export async function generateSlug(title: string): Promise<string> {
  const baseSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()

  const supabase = createClient()
  let slug = baseSlug
  let counter = 1

  try {
    while (true) {
      const { data, error } = await supabase.from("blog_posts").select("id").eq("slug", slug).single()

      if (error && (error.message.includes("does not exist") || error.message.includes("schema cache"))) {
        console.log("Blog posts table not found - returning base slug")
        return baseSlug
      }

      if (!data) {
        break
      }

      slug = `${baseSlug}-${counter}`
      counter++
    }
  } catch (error) {
    console.error("Error checking slug uniqueness:", error)
    // If table doesn't exist, just return the base slug
    return baseSlug
  }

  return slug
}
