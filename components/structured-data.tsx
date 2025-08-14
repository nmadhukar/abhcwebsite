import { getSEOMetadata } from "@/lib/supabase/seo"

interface StructuredDataProps {
  pagePath: string
  fallbackData?: any
}

export async function StructuredDataProvider({ pagePath, fallbackData }: StructuredDataProps) {
  try {
    const seoData = await getSEOMetadata(pagePath)
    const structuredData = seoData?.structured_data || fallbackData

    if (!structuredData) return null

    const enhancedData = {
      ...structuredData,
      "@context": "https://schema.org",
      publisher: {
        "@type": "Organization",
        name: "Autumn Behavioral Health Center",
        url: "https://autumntreatment.com",
        logo: {
          "@type": "ImageObject",
          url: "https://autumntreatment.com/autumn-behavioral-logo.png",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-614-219-9394",
          contactType: "customer service",
          availableLanguage: "English",
        },
        address: {
          "@type": "PostalAddress",
          addressRegion: "OH",
          addressCountry: "US",
        },
      },
    }

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedData) }} />
  } catch (error) {
    console.error("Error loading structured data:", error)

    if (fallbackData) {
      return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fallbackData) }} />
    }

    return null
  }
}

export function OrganizationStructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Autumn Behavioral Health Center",
    url: "https://autumntreatment.com",
    logo: "https://autumntreatment.com/autumn-behavioral-logo.png",
    description: "Comprehensive mental health and addiction treatment services across Ohio",
    telephone: "+1-614-219-9394",
    email: "clinic@autumntreatment.com",
    address: {
      "@type": "PostalAddress",
      addressRegion: "OH",
      addressCountry: "US",
    },
    serviceArea: {
      "@type": "State",
      name: "Ohio",
    },
    medicalSpecialty: ["Mental Health", "Addiction Treatment", "Behavioral Health", "Substance Abuse Treatment"],
    paymentAccepted: ["Insurance", "Medicaid", "Medicare", "Private Pay"],
    priceRange: "$$",
    openingHours: "Mo-Fr 08:00-17:00",
    sameAs: [
      "https://www.facebook.com/autumnbehavioralhealth",
      "https://www.linkedin.com/company/autumn-behavioral-health",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
}
