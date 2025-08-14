/**
 * @file This file defines the Server Actions used by the admin panel.
 * Server Actions are secure functions that run on the server and can be called
 * directly from client-side components, simplifying data mutations.
 */

"use server"

import {
  getTeamMembers,
  updateTeamMembers,
  getPageContent,
  updatePageContent,
  getChatbotSettings,
  updateChatbotSettings,
} from "@/lib/data"
import type { TeamMember } from "@/lib/team-data"
import type { ChatbotSettings } from "@/lib/data"
import { revalidatePath } from "next/cache"

/**
 * Fetches all necessary data for the admin panel in a single call.
 * @returns An object containing team members, page content, and chatbot settings.
 */
export async function getAdminData() {
  const [team, pages, chatbotSettings] = await Promise.all([getTeamMembers(), getPageContent(), getChatbotSettings()])
  return { team, pages, chatbotSettings }
}

/**
 * Saves the entire list of team members.
 * @param members The array of team members to save.
 */
export async function saveTeamMembers(members: TeamMember[]) {
  await updateTeamMembers(members)
  // Invalidate the cache for the management team page and the admin panel
  // to ensure the changes are reflected immediately.
  revalidatePath("/management-team")
  revalidatePath("/admin")
}

/**
 * Saves the entire page content object.
 * @param content The page content object to save.
 */
export async function savePageContent(content: Record<string, any>) {
  await updatePageContent(content)
  // Revalidate all pages that might be affected by the content change.
  Object.keys(content).forEach((path) => {
    // Converts the content key (e.g., 'services-addiction-treatment') to a URL path.
    revalidatePath(`/${path.replace(/-/g, "/")}`)
  })
  revalidatePath("/admin")
}

/**
 * Saves the chatbot settings.
 * @param settings The chatbot settings object to save.
 */
export async function saveChatbotSettings(settings: ChatbotSettings) {
  await updateChatbotSettings(settings)
  // Revalidate the root layout to ensure the chatbot component gets the new settings.
  revalidatePath("/", "layout")
  revalidatePath("/")
  revalidatePath("/admin")
}
