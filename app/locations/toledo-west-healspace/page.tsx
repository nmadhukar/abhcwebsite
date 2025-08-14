import ImageCarousel from "@/components/image-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, ExternalLink, Users, Heart, Shield, Award } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Toledo West - Healspace Recovery Location - Autumn Behavioral Health Center",
  description:
    "Recovery housing, sober living, transitional housing, and support services at our Healspace Recovery location in Toledo West.",
  keywords: ["Healspace Recovery", "recovery housing", "sober living", "transitional housing", "Toledo West"],
}

const carouselImages = [
  {
    src: "/healspace-recovery-exterior.png",
    alt: "Healspace Recovery facility exterior",
    caption: "Healspace Recovery - Supportive Housing Facility",
  },
  {
    src: "/healspace-recovery-lobby.png",
    alt: "Healspace Recovery lobby and reception area",
    caption: "Welcoming Lobby and Reception Area",
  },
  {
    src: "/healspace-recovery-therapy-room.png",
    alt: "Healspace Recovery private therapy room",
    caption: "Private Therapy Rooms for Individual Sessions",
  },
  {
    src: "/healspace-recovery-group-room.png",
    alt: "Healspace Recovery group therapy space",
    caption: "Group Therapy and Support Meeting Spaces",
  },
  {
    src: "/healspace-recovery-housing.png",
    alt: "Healspace Recovery housing support area",
    caption: "Recovery Housing Support and Coordination Area",
  },
]

export default function ToledoWestHealspacePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Autumn Behavioral Health - Healspace Recovery</h1>
            <p className="text-xl mb-8 text-blue-100">
              Specialized recovery housing and transitional support services for sustainable recovery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-green hover:bg-green-600">
                <a href="tel:614-219-9394" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: (614) 219-9394
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                <a
                  href="https://maps.google.com/?q=5085+Monroe+St+Toledo+OH+43606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Location Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-brand-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">5085 Monroe St</p>
                    <p className="text-gray-600">Toledo, OH 43606</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-brand-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:614-219-9394" className="text-brand-green hover:underline">
                      (614) 219-9394
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-brand-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: By appointment</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 mr-4">
                  <a href="tel:614-219-9394">Call This Location</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
                >
                  <Link href="/contact">Schedule Appointment</Link>
                </Button>
              </div>
            </div>

            {/* Services Overview */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Services Available</h2>

              <div className="grid gap-4">
                <Card className="border-l-4 border-l-brand-green">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Recovery Housing</h3>
                    <p className="text-gray-600">
                      Safe, supportive housing environments designed to promote long-term recovery and stability.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-brand-green">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Sober Living</h3>
                    <p className="text-gray-600">
                      Structured sober living programs with peer support and accountability measures.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-brand-green">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Transitional Housing</h3>
                    <p className="text-gray-600">
                      Bridge housing services to help individuals transition from treatment to independent living.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-brand-green">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Support Services</h3>
                    <p className="text-gray-600">
                      Comprehensive support services including life skills training, job placement assistance, and
                      ongoing counseling.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Healspace Recovery?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-brand-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Peer Support</h3>
              <p className="text-gray-600">
                Strong peer support network with individuals who understand the recovery journey.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Structured Environment</h3>
              <p className="text-gray-600">
                Structured living environment that promotes accountability and personal growth.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe Housing</h3>
              <p className="text-gray-600">Safe, drug-free living environments with 24/7 support and supervision.</p>
            </div>

            <div className="text-center">
              <div className="bg-brand-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Life Skills Training</h3>
              <p className="text-gray-600">
                Comprehensive life skills training to prepare for independent, successful living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <ImageCarousel images={carouselImages} />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Recovery Journey?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Take the first step toward stable, long-term recovery. Our Healspace Recovery team is here to support you
            every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-green hover:bg-green-600">
              <a href="tel:614-219-9394" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (614) 219-9394
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              <Link href="/contact" className="flex items-center">
                Get More Information
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
