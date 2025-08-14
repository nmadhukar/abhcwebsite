import Hero from "@/components/hero"
import Services from "@/components/services"
import Insurance from "@/components/insurance"
import Stats from "@/components/stats"
import Locations from "@/components/locations"
import Testimonials from "@/components/testimonials"
import Cta from "@/components/cta"
import { generateSEOMetadata, StructuredData } from "@/components/seo-metadata"
import { getSEOMetadata } from "@/lib/supabase/seo"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    pagePath: "/",
    fallback: {
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
    },
  })
}

export default async function HomePage() {
  const seoData = await getSEOMetadata("/")

  return (
    <>
      {seoData?.structured_data && <StructuredData data={seoData.structured_data} />}
      <main>
        <Hero />
        <Services />
        <Stats />
        <Insurance />
        <Locations />
        <Testimonials />
        <Cta />
      </main>
    </>
  )
}
