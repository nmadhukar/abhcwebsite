import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"
import { OrganizationStructuredData } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Autumn Behavioral Health Center",
  description: "Comprehensive mental health and addiction treatment services in Ohio.",
  keywords: "mental health, addiction treatment, behavioral health, Ohio, therapy, counseling",
  authors: [{ name: "Autumn Behavioral Health Center" }],
  creator: "Autumn Behavioral Health Center",
  publisher: "Autumn Behavioral Health Center",
  robots: "index,follow",
  metadataBase: new URL("https://autumntreatment.com"),
  alternates: {
    canonical: "https://autumntreatment.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://autumntreatment.com",
    siteName: "Autumn Behavioral Health Center",
    title: "Autumn Behavioral Health Center",
    description: "Comprehensive mental health and addiction treatment services in Ohio.",
    images: [
      {
        url: "/autumn-behavioral-logo.png",
        width: 1200,
        height: 630,
        alt: "Autumn Behavioral Health Center Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autumn Behavioral Health Center",
    description: "Comprehensive mental health and addiction treatment services in Ohio.",
    images: ["/autumn-behavioral-logo.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationStructuredData />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <Header />
        <Breadcrumb />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
