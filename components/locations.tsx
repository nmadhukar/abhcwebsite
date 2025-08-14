import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getLocations } from "@/lib/supabase/locations"

export default async function Locations() {
  const allLocations = await getLocations()
  const locations = allLocations.slice(0, 3)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-blue sm:text-4xl">Find Care Near You</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            With convenient locations across Ohio, quality behavioral healthcare is always within reach.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Card key={location.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={location.hero_image || "/placeholder.svg"}
                alt={`Autumn Behavioral Health ${location.name} location`}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-brand-blue mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-2">
                  {location.services.length > 0 ? location.services[0] : "Comprehensive Behavioral Health Services"}
                </p>
                <p className="text-sm text-gray-500">{location.address}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-brand-blue text-brand-blue hover:bg-brand-blue/5 bg-transparent"
          >
            <Link href="/locations">View All {allLocations.length} Locations</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
