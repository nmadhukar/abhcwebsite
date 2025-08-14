import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Mail, Car, Bus, ExternalLink, Pill, Shield, Users } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import ImageCarousel from "@/components/image-carousel"

export const metadata: Metadata = {
  title: "Toledo East Location | Autumn Behavioral Health",
  description:
    "Specialized addiction treatment in Toledo, OH. Our East Toledo center offers comprehensive behavioral health services. Start your recovery journey today.",
  keywords: [
    "addiction treatment in toledo",
    "behavioral health toledo",
    "mental health treatment center in toledo",
    "drug rehab toledo",
    "autumn behavioral health toledo east",
    "substance abuse treatment ohio",
  ],
  openGraph: {
    title: "East Toledo Treatment Center | Autumn Behavioral Health",
    description: "Comprehensive addiction and mental health treatment services at our East Toledo location.",
    url: "https://autumntreatment.com/locations/toledo-east",
  },
  alternates: {
    canonical: "https://autumntreatment.com/locations/toledo-east",
  },
}

export default function ToledoEastLocationPage() {
  const images = [
    { src: "/toledo-east-exterior.png", alt: "Exterior of Autumn Behavioral Health's East Toledo facility" },
    { src: "/toledo-east-lobby.png", alt: "Lobby and reception area at East Toledo" },
    { src: "/toledo-east-therapy-room.png", alt: "Private therapy room at East Toledo" },
    { src: "/toledo-east-group-room.png", alt: "Spacious group therapy room at East Toledo" },
    { src: "/toledo-east-medical.png", alt: "Medical examination room at East Toledo" },
  ]

  const services = [
    "Addiction Treatment",
    "Mental Health Services",
    "Individual Therapy",
    "Group Therapy",
    "MAT Programs",
    "Case Management",
    "Intensive Outpatient (IOP)",
    "Relapse Prevention",
    "Aftercare Planning",
    "Family Counseling",
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Autumn Behavioral Health - Toledo East</h1>
            <p className="text-xl leading-relaxed">
              Your path to recovery starts here. Our East Toledo center provides expert behavioral health and addiction
              treatment in a supportive environment.
            </p>
          </div>
        </div>
      </section>

      {/* Location Details & Images */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information Column */}
            <div>
              <h2 className="text-3xl font-bold mb-6">East Toledo Facility</h2>
              <Card className="mb-8">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">
                        732 Main St
                        <br />
                        Toledo, OH 43605
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:614-219-9394" className="text-blue-600 hover:underline">
                        (614) 219-9394
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:clinic@autumntreatment.com" className="text-blue-600 hover:underline">
                        clinic@autumntreatment.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    Hours of Operation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                    <div className="mt-4 p-3 bg-red-50 rounded-lg">
                      <p className="text-red-800 text-sm font-medium">24/7 Crisis Support Available</p>
                      <p className="text-red-700 text-xs">Call our main number for emergency assistance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Transportation */}
              <Card>
                <CardHeader>
                  <CardTitle>Getting Here</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Car className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <p className="font-semibold">Parking</p>
                        <p className="text-gray-600 text-sm">Free, private parking lot available on-site.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Bus className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <p className="font-semibold">Public Transit</p>
                        <p className="text-gray-600 text-sm">Accessible via TARTA bus routes.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <a
                        href="https://maps.google.com/?q=732+Main+St+Toledo+OH+43605"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on Google Maps
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Facility Images */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Facility Overview</h2>
              <ImageCarousel images={images} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Services at our East Toledo Location</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a full spectrum of behavioral health and addiction treatment services in Toledo, from therapy
              to comprehensive support programs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <span className="text-gray-700 font-medium text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Behavioral Health Treatment</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Evidence-Based Treatment in Toledo</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our East Toledo location provides comprehensive behavioral health services combining therapy,
                  counseling, and support programs. We offer personalized treatment plans designed to address your
                  unique needs and help you achieve lasting recovery and wellness.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Pill className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Personalized treatment plans</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Safe, supportive environment</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Individual and group therapy</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/autumn-behavioral-therapy.png"
                  alt="Behavioral Health Treatment at Autumn Behavioral Health"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Recovery Journey in Toledo Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact our East Toledo team to learn more about our behavioral health programs or to schedule a
            confidential assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/contact">Schedule Assessment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white/20 bg-transparent"
            >
              <a href="tel:614-219-9394">Call: (614) 219-9394</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
