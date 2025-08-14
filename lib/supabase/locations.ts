import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

export interface Location {
  id: number
  name: string
  slug: string
  address: string
  phone: string
  email: string
  hours: Record<string, string> | null
  services: string[]
  images: string[]
  hero_image: string | null
  description: string | null
  map_url: string | null
  seo_title: string | null
  seo_description: string | null
  is_active: boolean
  display_order: number
  created_at: string
  updated_at: string
}

const fallbackLocations = [
  {
    id: 1,
    name: "Cadiz",
    slug: "cadiz",
    address: "239 E Warren St, Cadiz, OH 43907",
    phone: "740-942-2891",
    email: "clinic@autumntreatment.com",
    hours: {
      monday: "8:00 AM - 5:00 PM",
      tuesday: "8:00 AM - 5:00 PM",
      wednesday: "8:00 AM - 5:00 PM",
      thursday: "8:00 AM - 5:00 PM",
      friday: "8:00 AM - 5:00 PM",
      saturday: "9:00 AM - 1:00 PM",
      sunday: "Closed",
    },
    services: ["Outpatient Treatment", "Medication Management", "Counseling Services", "Family Support"],
    images: ["/locations/cadiz-exterior.png"],
    hero_image: "/locations/cadiz-exterior.png",
    description:
      "Our Cadiz location serves Harrison County and surrounding communities with comprehensive behavioral health and addiction treatment services.",
    map_url: "https://maps.google.com/?q=239+E+Warren+St+Cadiz+OH+43907",
    seo_title: "Cadiz Location | Autumn Behavioral Health",
    seo_description:
      "Autumn Behavioral Health Cadiz location providing comprehensive behavioral health and addiction treatment services.",
    is_active: true,
    display_order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Circleville",
    slug: "circleville",
    address: "1015 S Court St, Circleville, OH 43113",
    phone: "740-300-0393",
    email: "clinic@autumntreatment.com",
    hours: {
      monday: "8:00 AM - 5:00 PM",
      tuesday: "8:00 AM - 5:00 PM",
      wednesday: "8:00 AM - 5:00 PM",
      thursday: "8:00 AM - 5:00 PM",
      friday: "8:00 AM - 5:00 PM",
      saturday: "Closed",
      sunday: "Closed",
    },
    services: ["Mental Health Services", "Addiction Treatment", "Individual Counseling", "Group Therapy"],
    images: ["/locations/circleville-exterior.png"],
    hero_image: "/locations/circleville-exterior.png",
    description:
      "Our Circleville location provides comprehensive behavioral health and addiction treatment services to Pickaway County and surrounding areas.",
    map_url: "https://maps.google.com/?q=1015+S+Court+St+Circleville+OH+43113",
    seo_title: "Circleville Location | Autumn Behavioral Health",
    seo_description:
      "Autumn Behavioral Health Circleville location providing comprehensive behavioral health and addiction treatment services.",
    is_active: true,
    display_order: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Marion",
    slug: "marion",
    address: "165 W. Center St. Suite 304 Marion, OH 43302",
    phone: "937-910-0329",
    email: "clinic@autumntreatment.com",
    hours: {
      monday: "8:00 AM - 5:00 PM",
      tuesday: "8:00 AM - 5:00 PM",
      wednesday: "8:00 AM - 5:00 PM",
      thursday: "8:00 AM - 5:00 PM",
      friday: "8:00 AM - 5:00 PM",
      saturday: "Closed",
      sunday: "Closed",
    },
    services: ["Adult Services", "Adolescent Services", "Mental Health Treatment", "Addiction Recovery"],
    images: ["/locations/marion-exterior.png"],
    hero_image: "/locations/marion-exterior.png",
    description:
      "Our Marion location serves Marion County with specialized behavioral health services for adults and adolescents.",
    map_url: "https://maps.google.com/?q=165+W+Center+St+Suite+304+Marion+OH+43302",
    seo_title: "Marion Location | Autumn Behavioral Health",
    seo_description:
      "Autumn Behavioral Health Marion location providing comprehensive behavioral health and addiction treatment services.",
    is_active: true,
    display_order: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

export async function getLocations(): Promise<Location[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.log("Supabase not configured, using fallback data")
      return fallbackLocations
    }

    const { data, error } = await supabase
      .from("locations")
      .select("*")
      .eq("is_active", true)
      .order("display_order", { ascending: true })

    if (error) {
      if (error.message?.includes("table") && error.message?.includes("not found")) {
        console.log("Locations table not found, using fallback data")
        return fallbackLocations
      }
      console.error("Error fetching locations:", error)
      return fallbackLocations
    }

    return data || fallbackLocations
  } catch (error) {
    console.log("Database error, using fallback locations:", error)
    return fallbackLocations
  }
}

export async function getLocationBySlug(slug: string): Promise<Location | null> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.log("Supabase not configured, using fallback data")
      return fallbackLocations.find((loc) => loc.slug === slug) || null
    }

    const { data, error } = await supabase.from("locations").select("*").eq("slug", slug).eq("is_active", true).single()

    if (error) {
      if (error.message?.includes("table") && error.message?.includes("not found")) {
        console.log("Locations table not found, using fallback data")
        return fallbackLocations.find((loc) => loc.slug === slug) || null
      }
      console.error("Error fetching location:", error)
      return fallbackLocations.find((loc) => loc.slug === slug) || null
    }

    return data
  } catch (error) {
    console.log("Database error, using fallback location:", error)
    return fallbackLocations.find((loc) => loc.slug === slug) || null
  }
}

export async function createLocation(
  location: Omit<Location, "id" | "created_at" | "updated_at">,
): Promise<Location | null> {
  try {
    const { data, error } = await supabase.from("locations").insert([location]).select().single()

    if (error) {
      console.error("Error creating location:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error creating location:", error)
    return null
  }
}

export async function updateLocation(id: number, updates: Partial<Location>): Promise<Location | null> {
  try {
    const { data, error } = await supabase.from("locations").update(updates).eq("id", id).select().single()

    if (error) {
      console.error("Error updating location:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error updating location:", error)
    return null
  }
}

export async function deleteLocation(id: number): Promise<boolean> {
  try {
    const { error } = await supabase.from("locations").update({ is_active: false }).eq("id", id)

    if (error) {
      console.error("Error deleting location:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error deleting location:", error)
    return false
  }
}

export async function getAllLocationsForAdmin(): Promise<Location[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.log("Supabase not configured, returning empty array for admin")
      return []
    }

    const { data, error } = await supabase.from("locations").select("*").order("display_order", { ascending: true })

    if (error) {
      if (error.message?.includes("table") && error.message?.includes("not found")) {
        console.log("Locations table not found, returning empty array for admin")
        return []
      }
      console.error("Error fetching admin locations:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.log("Database error in admin locations:", error)
    return []
  }
}
