import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getLocations } from "@/lib/supabase/locations"

export const metadata: Metadata = {
  title: "Our Locations | Autumn Behavioral Health",
  description:
    "Find an Autumn Behavioral Health location near you. We have convenient centers across Ohio to serve our communities.",
}

export default async function LocationsPage() {
  const locations = await getLocations()

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-brand-blue sm:text-5xl">Our Ohio Locations</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Autumn Behavioral Health provides accessible, comprehensive behavioral health and addiction treatment
            services across multiple convenient locations throughout Ohio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Card
              key={location.id}
              className="flex flex-col border-t-4 border-brand-accent-green overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={
                    location.hero_image || "/placeholder.svg?height=224&width=400&query=healthcare facility exterior"
                  }
                  alt={`Exterior of Autumn Behavioral Health ${location.name} location`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-brand-blue">Autumn Behavioral Health - {location.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-brand-accent-green mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-brand-accent-green mr-3 flex-shrink-0" />
                    <a href={`tel:${location.phone}`} className="text-gray-600 hover:text-brand-blue">
                      {location.phone}
                    </a>
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  <Button asChild className="flex-1 bg-brand-blue hover:bg-brand-blue/90">
                    <Link href={`/locations/${location.slug}`}>View Location</Link>
                  </Button>
                  {location.map_url && (
                    <Button asChild variant="outline" size="icon">
                      <a
                        href={location.map_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Get directions to Autumn Behavioral Health ${location.name}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {locations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No locations available at this time.</p>
          </div>
        )}
      </div>
    </div>
  )
}
