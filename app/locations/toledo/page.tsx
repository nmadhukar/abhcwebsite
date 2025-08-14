import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Mail, Car, Bus, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Toledo Location | Autumn Behavioral Health Center",
  description:
    "Autumn Behavioral Health Center offers comprehensive behavioral health and addiction treatment in Toledo, Ohio. Our programs include counseling, therapy, and recovery services.",
  keywords: [
    "behavioral health Toledo",
    "Toledo mental health treatment",
    "addiction treatment Toledo",
    "counseling services Toledo",
    "substance abuse Toledo",
    "recovery programs Toledo",
  ],
  openGraph: {
    title: "Toledo Treatment Center | Autumn Behavioral Health Center",
    description: "Comprehensive behavioral health and addiction treatment programs in Toledo, OH.",
    url: "https://autumntreatment.com/locations/toledo",
  },
  alternates: {
    canonical: "https://autumntreatment.com/locations/toledo",
  },
}

export default function ToledoLocationPage() {
  const services = [
    "Behavioral Health Treatment",
    "Mental Health Services",
    "Addiction Treatment",
    "Individual Therapy",
    "Group Therapy",
    "Counseling Services",
    "Case Management",
    "Family Counseling",
    "Outpatient Programs",
    "Relapse Prevention",
    "Aftercare Planning",
  ]

  const staff = [
    {
      name: "Dr. Sarah Mitchell, MD",
      title: "Site Medical Director",
      image: "/female-doctor-portrait.png",
    },
    {
      name: "Michael Johnson, LCSW",
      title: "Clinical Supervisor",
      image: "/male-therapist-portrait.png",
    },
    {
      name: "Lisa Rodriguez, LCDC",
      title: "Addiction Counselor",
      image: "/female-counselor-portrait.png",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Autumn Behavioral Health - Toledo</h1>
            <p className="text-xl leading-relaxed">
              Comprehensive behavioral health and addiction treatment services in Toledo, providing compassionate care
              and evidence-based treatment for the northwest Ohio community.
            </p>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <Card className="mb-8">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">
                        3456 Monroe Street
                        <br />
                        Toledo, OH 43604
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
                        <p className="text-gray-600 text-sm">Free parking available on-site</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Bus className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <p className="font-semibold">Public Transit</p>
                        <p className="text-gray-600 text-sm">TARTA Bus Routes 4, 8, and 12 stop nearby</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <a
                        href="https://maps.google.com/?q=3456+Monroe+Street+Toledo+OH+43604"
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

            {/* Facility Images and Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Facility Overview</h2>
              <div className="space-y-6">
                <img
                  src="/toledo-facility-exterior.png"
                  alt="Autumn Behavioral Health Toledo facility exterior"
                  className="rounded-lg shadow-lg w-full"
                />
                <img
                  src="/toledo-treatment-room.png"
                  alt="Toledo treatment room"
                  className="rounded-lg shadow-lg w-full"
                />
                <img
                  src="/toledo-group-area.png"
                  alt="Toledo group meeting area"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Services Available at This Location</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our Toledo location provides comprehensive behavioral health and addiction treatment services, offering
              evidence-based care for mental health and substance use disorders.
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

      {/* Key Staff */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Staff at Toledo</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm">{member.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Behavioral Health Treatment</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Expert Care in Toledo</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our Toledo location provides comprehensive behavioral health services designed to address mental
                  health conditions and substance use disorders. We offer personalized treatment plans that combine
                  therapy, counseling, and support services for lasting recovery and wellness.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Mental health counseling and therapy</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Addiction treatment and recovery support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Individual and group therapy sessions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Family counseling and support services</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/autumn-behavioral-therapy.png"
                  alt="Autumn Behavioral Health Toledo treatment"
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
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey in Toledo?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact our Toledo location today to learn more about our behavioral health and addiction treatment services
            or to schedule a confidential assessment.
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
