/**
 * @file This file serves as the data access layer for the application.
 * It abstracts the logic for fetching and updating data from the persistent
 * data store (Vercel KV) or an in-memory cache for local/preview environments.
 */

import { kv } from "@vercel/kv"
import { teamMembers as initialTeamMembers } from "@/lib/team-data"
import { pageData as initialPageData } from "@/lib/page-data"
import type { TeamMember } from "@/lib/team-data"

// Define constants for the keys used in the KV store to prevent typos.
const TEAM_KEY = "team_members"
const PAGES_KEY = "page_content"
const CHATBOT_SETTINGS_KEY = "chatbot_settings"

// Defines the shape of the chatbot configuration object.
export interface ChatbotSettings {
  isEnabled: boolean
  apiUrl: string
  botName: string
  theme: "blue" | "green" | "red" | "gray"
  position: "bottom-right" | "bottom-left"
  welcomeMessage: string
  placeholder: string
  primaryColor: string
  autoOpen: boolean
  showBranding: boolean
  width: string
  height: string
}

// An in-memory cache to be used as a fallback when Vercel KV is not available.
// This is useful for local development or preview deployments without KV credentials.
const memoryCache: {
  [TEAM_KEY]: TeamMember[] | null
  [PAGES_KEY]: Record<string, any> | null
  [CHATBOT_SETTINGS_KEY]: ChatbotSettings | null
} = {
  [TEAM_KEY]: null,
  [PAGES_KEY]: null,
  [CHATBOT_SETTINGS_KEY]: null,
}

// Check if Vercel KV environment variables are configured.
const useKV = !!process.env.KV_REST_API_URL && !!process.env.KV_REST_API_TOKEN

/**
 * Fetches the list of team members.
 * If KV is available, it reads from there. If no data is in KV, it seeds it with initial data.
 * If KV is not available, it uses the in-memory cache.
 * @returns {Promise<TeamMember[]>} A promise that resolves to an array of team members.
 */
export async function getTeamMembers(): Promise<TeamMember[]> {
  if (useKV) {
    try {
      let members = await kv.get<TeamMember[]>(TEAM_KEY)
      // If KV is empty, initialize it with the default data from team-data.ts
      if (!members || members.length === 0) {
        members = initialTeamMembers
        await kv.set(TEAM_KEY, members)
      }
      return members
    } catch (error) {
      console.error("KV getTeamMembers error:", error)
      return initialTeamMembers // Fallback to initial data on error
    }
  } else {
    // Use in-memory cache if KV is not configured
    if (!memoryCache[TEAM_KEY]) {
      memoryCache[TEAM_KEY] = JSON.parse(JSON.stringify(initialTeamMembers))
    }
    return JSON.parse(JSON.stringify(memoryCache[TEAM_KEY]))
  }
}

/**
 * Updates the list of team members in the data store.
 * @param {TeamMember[]} members The new array of team members to save.
 */
export async function updateTeamMembers(members: TeamMember[]) {
  if (useKV) {
    try {
      await kv.set(TEAM_KEY, members)
    } catch (error) {
      console.error("KV updateTeamMembers error:", error)
    }
  } else {
    memoryCache[TEAM_KEY] = JSON.parse(JSON.stringify(members))
  }
}

/**
 * Fetches the content for all dynamic pages.
 * @returns {Promise<Record<string, any>>} A promise that resolves to an object containing page content.
 */
export async function getPageContent(): Promise<Record<string, any>> {
  if (useKV) {
    try {
      let content = await kv.get<Record<string, any>>(PAGES_KEY)
      if (!content) {
        content = initialPageData
        await kv.set(PAGES_KEY, content)
      }
      return content
    } catch (error) {
      console.error("KV getPageContent error:", error)
      return initialPageData
    }
  } else {
    if (!memoryCache[PAGES_KEY]) {
      memoryCache[PAGES_KEY] = JSON.parse(JSON.stringify(initialPageData))
    }
    return JSON.parse(JSON.stringify(memoryCache[PAGES_KEY]))
  }
}

/**
 * Updates the page content object in the data store.
 * @param {Record<string, any>} content The new page content object to save.
 */
export async function updatePageContent(content: Record<string, any>) {
  if (useKV) {
    try {
      await kv.set(PAGES_KEY, content)
    } catch (error) {
      console.error("KV updatePageContent error:", error)
    }
  } else {
    memoryCache[PAGES_KEY] = JSON.parse(JSON.stringify(content))
  }
}

/**
 * Fetches the chatbot settings.
 * Merges stored settings with defaults to ensure all properties are present.
 * @returns {Promise<ChatbotSettings>} A promise that resolves to the chatbot settings object.
 */
export async function getChatbotSettings(): Promise<ChatbotSettings> {
  const initialSettings: ChatbotSettings = {
    isEnabled: true,
    apiUrl: process.env.NEXT_PUBLIC_CHATBOT_API_URL || "",
    botName: process.env.NEXT_PUBLIC_CHATBOT_BOT_NAME || "Chat Assistant",
    theme: (process.env.NEXT_PUBLIC_CHATBOT_THEME as any) || "blue",
    position: "bottom-right",
    welcomeMessage:
      "Welcome to Autumn Behavioral Health Center! I'm here to help answer questions about our services, appointments, and general health information. For medical emergencies, please call 911. How can I assist you today?",
    placeholder: "Ask about services, appointments, insurance...",
    primaryColor: process.env.NEXT_PUBLIC_CHATBOT_PRIMARY_COLOR || "#2c5aa0",
    autoOpen: true,
    showBranding: true,
    width: "320px",
    height: "450px",
  }

  if (useKV) {
    try {
      let settings = await kv.get<ChatbotSettings>(CHATBOT_SETTINGS_KEY)
      if (!settings) {
        settings = initialSettings
        await kv.set(CHATBOT_SETTINGS_KEY, settings)
      }
      // Ensure all fields are present by merging stored settings over defaults.
      return { ...initialSettings, ...settings }
    } catch (error) {
      console.error("KV getChatbotSettings error:", error)
      return initialSettings
    }
  } else {
    if (!memoryCache[CHATBOT_SETTINGS_KEY]) {
      memoryCache[CHATBOT_SETTINGS_KEY] = initialSettings
    }
    return JSON.parse(JSON.stringify({ ...initialSettings, ...memoryCache[CHATBOT_SETTINGS_KEY] }))
  }
}

/**
 * Updates the chatbot settings in the data store.
 * @param {ChatbotSettings} settings The new chatbot settings object to save.
 */
export async function updateChatbotSettings(settings: ChatbotSettings) {
  if (useKV) {
    try {
      await kv.set(CHATBOT_SETTINGS_KEY, settings)
    } catch (error) {
      console.error("KV updateChatbotSettings error:", error)
    }
  } else {
    memoryCache[CHATBOT_SETTINGS_KEY] = JSON.parse(JSON.stringify(settings))
  }
}
