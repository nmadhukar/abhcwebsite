import type { MetadataRoute } from "next"
import { getAllSEOMetadata } from "@/lib/supabase/seo"

export default async function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://autumntreatment.com"

  try {
    const seoData = await getAllSEOMetadata()
    const seoMap = new Map(seoData.map((item) => [item.page_path, item]))

    const staticPages = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: (seoMap.get("/")?.change_frequency as any) || "daily",
        priority: seoMap.get("/")?.priority || 1,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        changeFrequency: (seoMap.get("/about")?.change_frequency as any) || "monthly",
        priority: seoMap.get("/about")?.priority || 0.8,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/insurance`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/admissions`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: (seoMap.get("/contact")?.change_frequency as any) || "monthly",
        priority: seoMap.get("/contact")?.priority || 0.7,
      },
      {
        url: `${baseUrl}/privacy`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.3,
      },
      {
        url: `${baseUrl}/terms`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.3,
      },
      {
        url: `${baseUrl}/hipaa`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.3,
      },
      {
        url: `${baseUrl}/accessibility`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.3,
      },
      {
        url: `${baseUrl}/site-index`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.3,
      },
      {
        url: `${baseUrl}/management-team`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      },
      {
        url: `${baseUrl}/housing`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
    ]

    const servicePages = [
      "/services",
      "/services/outpatient",
      "/services/residential",
      "/services/residential-detox",
      "/services/methadone-treatment",
      "/services/case-management",
      "/services/recovery-housing",
      "/services/mental-health",
      "/services/addiction-treatment",
      "/services/individual-counseling",
      "/services/group-counseling",
      "/services/family-counseling",
      "/services/trauma-counseling",
    ].map((url) => ({
      url: `${baseUrl}${url}`,
      lastModified: new Date(),
      changeFrequency: (seoMap.get(url)?.change_frequency as any) || "weekly",
      priority: seoMap.get(url)?.priority || 0.9,
    }))

    const locationPages = [
      "/locations",
      "/locations/cadiz",
      "/locations/circleville",
      "/locations/marion",
      "/locations/reynoldsburg",
      "/locations/st-clairsville",
      "/locations/washington-court-house",
      "/locations/wilmington",
      "/locations/toledo-east",
      "/locations/toledo-west",
      "/locations/toledo-west-healspace",
      "/locations/mansfield",
      "/locations/clyde",
      "/locations/toledo",
      "/locations/columbus",
      "/locations/cleveland",
      "/locations/cincinnati",
    ].map((url) => ({
      url: `${baseUrl}${url}`,
      lastModified: new Date(),
      changeFrequency: (seoMap.get(url)?.change_frequency as any) || "monthly",
      priority: seoMap.get(url)?.priority || 0.8,
    }))

    return [...staticPages, ...servicePages, ...locationPages]
  } catch (error) {
    console.error("Error generating sitemap:", error)

    const staticPages = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/management-team`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      },
    ]

    const servicePages = [
      "/services/mental-health",
      "/services/addiction-treatment",
      "/services/outpatient",
      "/services/residential",
    ].map((url) => ({
      url: `${baseUrl}${url}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    }))

    return [...staticPages, ...servicePages]
  }
}
