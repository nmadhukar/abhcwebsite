import { getSEOMetadata } from "@/lib/supabase/seo"
import type { Metadata } from "next"

interface SEOProps {
  pagePath: string
  fallback?: {
    title: string
    description: string
    keywords?: string[]
  }
}

export async function generateSEOMetadata({ pagePath, fallback }: SEOProps): Promise<Metadata> {
  try {
    const seoData = await getSEOMetadata(pagePath)

    if (!seoData && !fallback) {
      return {
        title: "Autumn Behavioral Health Center",
        description: "Comprehensive mental health and addiction treatment services in Ohio.",
      }
    }

    const data = seoData || {
      title: fallback!.title,
      description: fallback!.description,
      keywords: fallback?.keywords || [],
      canonical_url: `https://autumntreatment.com${pagePath}`,
      og_title: fallback!.title,
      og_description: fallback!.description,
      og_type: "website",
      twitter_card: "summary_large_image",
      twitter_title: fallback!.title,
      twitter_description: fallback!.description,
    }

    return {
      title: data.title,
      description: data.description,
      keywords: data.keywords?.join(", "),
      robots: data.meta_robots || "index,follow",
      openGraph: {
        title: data.og_title || data.title,
        description: data.og_description || data.description,
        url: data.canonical_url,
        type: (data.og_type as any) || "website",
        images: data.og_image_url
          ? [
              {
                url: data.og_image_url,
                width: 1200,
                height: 630,
                alt: data.title,
              },
            ]
          : [
              {
                url: "https://autumntreatment.com/autumn-behavioral-logo.png",
                width: 1200,
                height: 630,
                alt: "Autumn Behavioral Health Center",
              },
            ],
        siteName: "Autumn Behavioral Health Center",
        locale: "en_US",
      },
      twitter: {
        card: (data.twitter_card as any) || "summary_large_image",
        title: data.twitter_title || data.title,
        description: data.twitter_description || data.description,
        images: data.twitter_image_url ? [data.twitter_image_url] : ["/autumn-behavioral-logo.png"],
        site: "@autumnbehavioral",
        creator: "@autumnbehavioral",
      },
      alternates: {
        canonical: data.canonical_url,
      },
      authors: [{ name: "Autumn Behavioral Health Center" }],
      creator: "Autumn Behavioral Health Center",
      publisher: "Autumn Behavioral Health Center",
    }
  } catch (error) {
    console.error("Error generating SEO metadata:", error)

    // Return fallback metadata
    return {
      title: fallback?.title || "Autumn Behavioral Health Center",
      description: fallback?.description || "Comprehensive mental health and addiction treatment services in Ohio.",
      keywords: fallback?.keywords?.join(", "),
      alternates: {
        canonical: `https://autumntreatment.com${pagePath}`,
      },
    }
  }
}

export function StructuredData({ data }: { data: any }) {
  if (!data) return null

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
