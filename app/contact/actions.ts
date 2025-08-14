"use server"

import { redirect } from "next/navigation"

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!firstName || !lastName || !email || !message) {
    throw new Error("Please fill in all required fields")
  }

  // Here you would typically:
  // 1. Save to database
  // 2. Send email notification
  // 3. Integrate with CRM system

  console.log("Contact form submission:", {
    firstName,
    lastName,
    email,
    phone,
    message,
    timestamp: new Date().toISOString(),
  })

  // For now, redirect to a thank you page or back with success message
  redirect("/contact?success=true")
}
