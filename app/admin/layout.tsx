import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Dashboard - Autumn Behavioral Health Center",
  description: "Administrative dashboard for managing Autumn Behavioral Health Center website content",
  robots: "noindex, nofollow", // Admin pages should not be indexed
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
