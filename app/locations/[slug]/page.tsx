import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getLocationBySlug, getLocations } from "@/lib/supabase/locations"
import PhotoUpload from "@/components/photo-upload"
import { generateSEOMetadata, StructuredData } from "@/components/seo-metadata"
import { getSEOMetadata } from "@/lib/supabase/seo"

interface LocationPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const locations = await getLocations()
  return locations.map((location) => ({
    slug: location.slug,
  }))
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = await getLocationBySlug(params.slug)

  if (!location) {
    return {
      title: "Location Not Found | Autumn Behavioral Health",
    }
  }

  return generateSEOMetadata({
    pagePath: `/locations/${params.slug}`,
    fallback: {
      title: location.seo_title || `${location.name} Location | Autumn Behavioral Health`,
      description:
        location.seo_description ||
        `Autumn Behavioral Health ${location.name} location providing comprehensive behavioral health and addiction treatment services.`,
      keywords: [
        `${location.name} mental health`,
        `${location.name} addiction treatment`,
        "Ohio behavioral health",
        "treatment center",
      ],
    },
  })
}

export default async function LocationPage({ params }: LocationPageProps) {
  const location = await getLocationBySlug(params.slug)

  if (!location) {
    notFound()
  }

  const seoData = await getSEOMetadata(`/locations/${params.slug}`)

  const hours = location.hours || {}
  const defaultHours = {
    monday: "8:00 AM - 5:00 PM",
    tuesday: "8:00 AM - 5:00 PM",
    wednesday: "8:00 AM - 5:00 PM",
    thursday: "8:00 AM - 5:00 PM",
    friday: "8:00 AM - 5:00 PM",
    saturday: "9:00 AM - 1:00 PM",
    sunday: "Closed",
  }

  const displayHours = Object.keys(hours).length > 0 ? hours : defaultHours

  const locationStructuredData = seoData?.structured_data || {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `Autumn Behavioral Health Center - ${location.name}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address?.split("\n")[0] || location.address,
      addressLocality: location.name,
      addressRegion: "OH",
      addressCountry: "US",
    },
    telephone: location.phone,
    email: location.email,
    url: `https://autumntreatment.com/locations/${params.slug}`,
    description: location.description || `Behavioral health and addiction treatment services in ${location.name}, Ohio`,
    medicalSpecialty: location.services || ["Mental Health", "Addiction Treatment"],
    openingHours: Object.entries(displayHours)
      .map(([day, time]) => (time !== "Closed" ? `${day.substring(0, 2).toUpperCase()} ${time}` : null))
      .filter(Boolean),
  }

  return (
    <>
      <StructuredData data={locationStructuredData} />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative h-96 bg-gray-900">
          <Image
            src={location.hero_image || "/placeholder.svg?height=400&width=800&query=healthcare facility"}
            alt={`Autumn Behavioral Health ${location.name} facility`}
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-brand-blue/60" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">Autumn Behavioral Health - {location.name}</h1>
              <p className="text-xl">
                {location.description || "Comprehensive behavioral health care in your community"}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-brand-blue mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-brand-accent-green mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600 whitespace-pre-line">{location.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-brand-accent-green mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href={`tel:${location.phone}`} className="text-brand-blue hover:underline">
                          {location.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-brand-accent-green mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href={`mailto:${location.email}`} className="text-brand-blue hover:underline">
                          {location.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-brand-accent-green mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Hours</p>
                        <div className="text-gray-600 text-sm space-y-1">
                          {Object.entries(displayHours).map(([day, time]) => (
                            <p key={day} className="flex justify-between">
                              <span className="capitalize">{day}:</span>
                              <span>{time}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <Button className="w-full bg-brand-blue hover:bg-brand-blue/90" asChild>
                      <Link href="/contact">Schedule Appointment</Link>
                    </Button>
                    {location.map_url && (
                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <a href={location.map_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Get Directions
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About This Location */}
              <section>
                <h2 className="text-3xl font-bold text-brand-blue mb-6">About Our {location.name} Location</h2>
                <p className="text-gray-600 leading-relaxed">
                  {location.description ||
                    `Our ${location.name} location serves the local community with comprehensive behavioral health and addiction treatment services. We provide a welcoming, professional environment where individuals and families can access the care they need.`}
                </p>
              </section>

              {/* Services */}
              {location.services.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold text-brand-blue mb-6">Services Available</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {location.services.map((service, index) => (
                      <Card key={index} className="border-l-4 border-brand-accent-green">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold text-brand-blue mb-2">{service}</h3>
                          <p className="text-gray-600">Professional care tailored to your individual needs.</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )}

              {/* Photo Upload Section */}
              <section>
                <PhotoUpload locationName={location.name} />
              </section>

              {/* Call to Action */}
              <section className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-brand-blue mb-4">Ready to Get Started?</h2>
                <p className="text-gray-600 mb-6">
                  Take the first step toward recovery. Contact our {location.name} location today to schedule a
                  confidential assessment or learn more about our treatment programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-brand-accent-orange hover:bg-brand-accent-orange/90" asChild>
                    <Link href="/contact">Contact Us Today</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href={`tel:${location.phone}`}>Call Now: {location.phone}</a>
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
