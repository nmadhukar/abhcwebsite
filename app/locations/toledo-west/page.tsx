import Header from "@/components/header"
import Footer from "@/components/footer"
import ImageCarousel from "@/components/image-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, ExternalLink, Users, Heart, Shield, Award } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Toledo West Location - Autumn Behavioral Health Center",
  description:
    "Mental health services, addiction treatment, case management, and recovery housing at our Toledo West location. Comprehensive behavioral health care.",
  keywords: ["Toledo West", "mental health", "addiction treatment", "case management", "recovery housing"],
}

const carouselImages = [
  {
    src: "/toledo-west-exterior.png",
    alt: "Toledo West facility exterior",
    caption: "Modern Toledo West Facility - Main Entrance",
  },
  {
    src: "/toledo-west-lobby.png",
    alt: "Toledo West lobby and reception area",
    caption: "Comfortable Lobby and Waiting Area",
  },
  {
    src: "/toledo-west-therapy-room.png",
    alt: "Toledo West private therapy room",
    caption: "Private Therapy Rooms for Individual Sessions",
  },
  {
    src: "/toledo-west-group-room.png",
    alt: "Toledo West group therapy space",
    caption: "Spacious Group Therapy Areas",
  },
  {
    src: "/toledo-west-parking.png",
    alt: "Toledo West parking area",
    caption: "Convenient Parking for All Clients",
  },
]

export default function ToledoWestPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Autumn Behavioral Health - Toledo West</h1>
            <p className="text-xl mb-8 text-blue-100">
              Comprehensive mental health services, addiction treatment, and recovery support in West Toledo
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
                  href="https://maps.google.com/?q=3100+West+Central+Avenue+Toledo+OH+43606"
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
                    <p className="text-gray-600">3100 West Central Avenue</p>
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
                      <p>
                        <span className="font-medium">Hours:</span> Monday - Friday: 8:30 AM - 4:30 PM
                      </p>
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
                    <h3 className="font-semibold text-gray-900 mb-2">Mental Health Services</h3>
                    <p className="text-gray-600">
                      Comprehensive mental health treatment including individual therapy, group sessions, and
                      psychiatric services.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-brand-green">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Addiction Treatment</h3>
                    <p className="text-gray-600">
                      Evidence-based addiction treatment programs tailored to individual needs and recovery goals.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-brand-green">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Case Management</h3>
                    <p className="text-gray-600">
                      Comprehensive case management services to help coordinate care and connect you with community
                      resources.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-brand-green">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Recovery Housing</h3>
                    <p className="text-gray-600">
                      Support and coordination for recovery housing options to provide stable living environments during
                      treatment.
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Toledo West?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-brand-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Experienced Team</h3>
              <p className="text-gray-600">
                Dedicated professionals specializing in mental health and addiction treatment services.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Holistic Approach</h3>
              <p className="text-gray-600">
                Comprehensive care addressing mental health, addiction, and social support needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Supportive Environment</h3>
              <p className="text-gray-600">
                Welcoming facility designed to promote healing and recovery in a comfortable setting.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Care</h3>
              <p className="text-gray-600">
                CARF accredited services ensuring the highest standards of treatment and patient care.
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
            Take the first step toward healing and recovery. Our Toledo West team is here to support you every step of
            the way.
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

      <Footer />
    </main>
  )
}
