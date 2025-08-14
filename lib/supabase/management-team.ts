import { createClient } from "./server"

export interface ManagementTeamMember {
  id: string
  name: string
  title: string
  bio?: string
  image_url?: string
  credentials?: string
  specialties?: string[]
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export async function getManagementTeam(): Promise<ManagementTeamMember[]> {
  const supabase = createClient()

  try {
    const { data, error } = await supabase
      .from("management_team")
      .select("*")
      .eq("is_active", true)
      .order("order_index", { ascending: true })

    if (error) {
      if (error.message.includes("does not exist") || error.message.includes("schema cache")) {
        console.log("Management team table not found - returning empty array")
        return []
      }
      console.error("Error fetching management team:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error fetching management team:", error)
    return []
  }
}

export async function createManagementTeamMember(
  member: Omit<ManagementTeamMember, "id" | "created_at" | "updated_at">,
): Promise<ManagementTeamMember | null> {
  const supabase = createClient()

  try {
    const { data, error } = await supabase.from("management_team").insert([member]).select().single()

    if (error) {
      console.error("Error creating management team member:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error creating management team member:", error)
    return null
  }
}

export async function updateManagementTeamMember(
  id: string,
  updates: Partial<ManagementTeamMember>,
): Promise<ManagementTeamMember | null> {
  const supabase = createClient()

  try {
    const { data, error } = await supabase.from("management_team").update(updates).eq("id", id).select().single()

    if (error) {
      console.error("Error updating management team member:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error updating management team member:", error)
    return null
  }
}

export async function deleteManagementTeamMember(id: string): Promise<boolean> {
  const supabase = createClient()

  try {
    const { error } = await supabase.from("management_team").update({ is_active: false }).eq("id", id)

    if (error) {
      console.error("Error deleting management team member:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error deleting management team member:", error)
    return false
  }
}
