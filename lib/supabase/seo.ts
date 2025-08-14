import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

export interface SEOMetadata {
  id: string
  page_path: string
  page_type: string
  title: string
  description: string
  keywords: string[]
  canonical_url?: string
  og_title?: string
  og_description?: string
  og_image_url?: string
  og_type?: string
  twitter_card?: string
  twitter_title?: string
  twitter_description?: string
  twitter_image_url?: string
  structured_data?: any
  meta_robots?: string
  priority?: number
  change_frequency?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

const fallbackSEOData: Record<string, Partial<SEOMetadata>> = {
  "/": {
    title: "Autumn Behavioral Health Center - Mental Health & Addiction Treatment in Ohio",
    description:
      "Leading provider of mental health and addiction treatment services across Ohio. Comprehensive care, experienced professionals, and personalized treatment plans for lasting recovery.",
    keywords: [
      "mental health treatment Ohio",
      "addiction treatment Ohio",
      "behavioral health services",
      "substance abuse treatment",
      "therapy services Ohio",
    ],
    canonical_url: "https://autumntreatment.com",
    priority: 1.0,
    change_frequency: "daily",
  },
  "/services/mental-health": {
    title: "Mental Health Services - Autumn Behavioral Health Center",
    description:
      "Comprehensive mental health care including psychiatric evaluations, therapy, and crisis intervention. We treat depression, anxiety, PTSD, and more.",
    keywords: [
      "mental health services",
      "psychiatric evaluation",
      "therapy",
      "counseling",
      "crisis intervention",
      "depression treatment",
      "anxiety treatment",
    ],
    canonical_url: "https://autumntreatment.com/services/mental-health",
    priority: 0.9,
    change_frequency: "weekly",
  },
  "/services/addiction-treatment": {
    title: "Addiction Treatment Services - Autumn Behavioral Health Center",
    description:
      "Evidence-based addiction treatment including detox, residential care, outpatient programs, and medication-assisted treatment for lasting recovery.",
    keywords: [
      "addiction treatment",
      "substance abuse treatment",
      "drug rehab",
      "alcohol treatment",
      "detox services",
      "recovery programs",
    ],
    canonical_url: "https://autumntreatment.com/services/addiction-treatment",
    priority: 0.9,
    change_frequency: "weekly",
  },
  "/about": {
    title: "About Us - Autumn Behavioral Health Center",
    description:
      "Learn about our mission, values, and commitment to providing exceptional mental health and addiction treatment services across Ohio with compassionate, evidence-based care.",
    keywords: [
      "about Autumn Behavioral Health",
      "mental health mission",
      "addiction treatment philosophy",
      "Ohio healthcare provider",
    ],
    canonical_url: "https://autumntreatment.com/about",
    priority: 0.8,
    change_frequency: "monthly",
  },
  "/contact": {
    title: "Contact Us - Autumn Behavioral Health Center",
    description:
      "Contact Autumn Behavioral Health Center for mental health and addiction treatment services. Multiple locations across Ohio. Call (614) 219-9394 for immediate assistance.",
    keywords: [
      "contact Autumn Behavioral Health",
      "mental health contact",
      "addiction treatment contact",
      "Ohio behavioral health phone",
    ],
    canonical_url: "https://autumntreatment.com/contact",
    priority: 0.7,
    change_frequency: "monthly",
  },
}

export async function getSEOMetadata(pagePath: string): Promise<SEOMetadata | null> {
  try {
    // Check if Supabase is properly configured
    if (!supabaseUrl || !supabaseKey) {
      console.warn("Supabase not configured, using fallback SEO data")
      const fallback = fallbackSEOData[pagePath]
      if (fallback) {
        return {
          id: "fallback",
          page_path: pagePath,
          page_type: "static",
          is_active: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          ...fallback,
        } as SEOMetadata
      }
      return null
    }

    const { data, error } = await supabase
      .from("seo_metadata")
      .select("*")
      .eq("page_path", pagePath)
      .eq("is_active", true)
      .single()

    if (error) {
      // If table doesn't exist or other database error, use fallback
      console.warn("Database error, using fallback SEO data:", error.message)
      const fallback = fallbackSEOData[pagePath]
      if (fallback) {
        return {
          id: "fallback",
          page_path: pagePath,
          page_type: "static",
          is_active: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          ...fallback,
        } as SEOMetadata
      }
      return null
    }

    return data
  } catch (error) {
    console.warn("Error in getSEOMetadata, using fallback:", error)
    const fallback = fallbackSEOData[pagePath]
    if (fallback) {
      return {
        id: "fallback",
        page_path: pagePath,
        page_type: "static",
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        ...fallback,
      } as SEOMetadata
    }
    return null
  }
}

export async function getAllSEOMetadata(): Promise<SEOMetadata[]> {
  try {
    if (!supabaseUrl || !supabaseKey) {
      console.warn("Supabase not configured, using fallback SEO data")
      return Object.entries(fallbackSEOData).map(([path, data]) => ({
        id: `fallback-${path}`,
        page_path: path,
        page_type: "static",
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        ...data,
      })) as SEOMetadata[]
    }

    const { data, error } = await supabase.from("seo_metadata").select("*").eq("is_active", true).order("page_path")

    if (error) {
      console.warn("Database error, using fallback SEO data:", error.message)
      return Object.entries(fallbackSEOData).map(([path, data]) => ({
        id: `fallback-${path}`,
        page_path: path,
        page_type: "static",
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        ...data,
      })) as SEOMetadata[]
    }

    return data || []
  } catch (error) {
    console.warn("Error in getAllSEOMetadata, using fallback:", error)
    return Object.entries(fallbackSEOData).map(([path, data]) => ({
      id: `fallback-${path}`,
      page_path: path,
      page_type: "static",
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      ...data,
    })) as SEOMetadata[]
  }
}

export async function createSEOMetadata(
  seoData: Omit<SEOMetadata, "id" | "created_at" | "updated_at">,
): Promise<SEOMetadata | null> {
  try {
    if (!supabaseUrl || !supabaseKey) {
      console.warn("Supabase not configured, cannot create SEO metadata")
      return null
    }

    const { data, error } = await supabase.from("seo_metadata").insert([seoData]).select().single()

    if (error) {
      console.error("Error creating SEO metadata:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error in createSEOMetadata:", error)
    return null
  }
}

export async function updateSEOMetadata(id: string, seoData: Partial<SEOMetadata>): Promise<SEOMetadata | null> {
  try {
    if (!supabaseUrl || !supabaseKey) {
      console.warn("Supabase not configured, cannot update SEO metadata")
      return null
    }

    const { data, error } = await supabase.from("seo_metadata").update(seoData).eq("id", id).select().single()

    if (error) {
      console.error("Error updating SEO metadata:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error in updateSEOMetadata:", error)
    return null
  }
}

export async function deleteSEOMetadata(id: string): Promise<boolean> {
  try {
    if (!supabaseUrl || !supabaseKey) {
      console.warn("Supabase not configured, cannot delete SEO metadata")
      return false
    }

    const { error } = await supabase.from("seo_metadata").delete().eq("id", id)

    if (error) {
      console.error("Error deleting SEO metadata:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error in deleteSEOMetadata:", error)
    return false
  }
}

export async function getSEOMetadataByType(pageType: string): Promise<SEOMetadata[]> {
  try {
    if (!supabaseUrl || !supabaseKey) {
      console.warn("Supabase not configured, using fallback SEO data")
      return Object.entries(fallbackSEOData)
        .filter(([_, data]) => data.page_type === pageType || pageType === "static")
        .map(([path, data]) => ({
          id: `fallback-${path}`,
          page_path: path,
          page_type: "static",
          is_active: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          ...data,
        })) as SEOMetadata[]
    }

    const { data, error } = await supabase
      .from("seo_metadata")
      .select("*")
      .eq("page_type", pageType)
      .eq("is_active", true)
      .order("page_path")

    if (error) {
      console.warn("Database error, using fallback SEO data:", error.message)
      return Object.entries(fallbackSEOData)
        .filter(([_, data]) => data.page_type === pageType || pageType === "static")
        .map(([path, data]) => ({
          id: `fallback-${path}`,
          page_path: path,
          page_type: "static",
          is_active: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          ...data,
        })) as SEOMetadata[]
    }

    return data || []
  } catch (error) {
    console.warn("Error in getSEOMetadataByType, using fallback:", error)
    return []
  }
}
