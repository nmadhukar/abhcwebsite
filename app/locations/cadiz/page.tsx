import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import PhotoUpload from "@/components/photo-upload"

export const metadata: Metadata = {
  title: "Cadiz Location | Autumn Behavioral Health",
  description:
    "Autumn Behavioral Health Cadiz location providing comprehensive behavioral health and addiction treatment services.",
}

const services = [
  {
    title: "Outpatient Treatment",
    description: "Individual and group therapy sessions tailored to your recovery needs",
    icon: "🏥",
  },
  {
    title: "Medication Management",
    description: "Professional psychiatric medication evaluation and monitoring",
    icon: "💊",
  },
  {
    title: "Counseling Services",
    description: "Licensed counselors providing evidence-based therapeutic interventions",
    icon: "🗣️",
  },
  {
    title: "Family Support",
    description: "Family therapy and education programs to support your recovery journey",
    icon: "👨‍👩‍👧‍👦",
  },
]

export default function CadizLocationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <Image
          src="/locations/cadiz-hero.png"
          alt="Autumn Behavioral Health Cadiz facility"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-brand-blue/60" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Autumn Behavioral Health - Cadiz</h1>
            <p className="text-xl">Comprehensive behavioral health care in Harrison County</p>
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
                      <p className="text-gray-600">
                        239 E Warren St
                        <br />
                        Cadiz, OH 43907
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-brand-accent-green mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:740-942-2891" className="text-brand-blue hover:underline">
                        740-942-2891
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-brand-accent-green mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:clinic@autumntreatment.com" className="text-brand-blue hover:underline">
                        clinic@autumntreatment.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-brand-accent-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <div className="text-gray-600 text-sm">
                        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p>Saturday: 9:00 AM - 1:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <Button className="w-full bg-brand-blue hover:bg-brand-blue/90" asChild>
                    <Link href="/contact">Schedule Appointment</Link>
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a
                      href="https://maps.google.com/?q=239+E+Warren+St+Cadiz+OH+43907"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About This Location */}
            <section>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">About Our Cadiz Location</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our Cadiz location serves Harrison County and surrounding communities with comprehensive behavioral
                health and addiction treatment services. Located in the heart of downtown Cadiz, our facility provides a
                welcoming, professional environment where individuals and families can access the care they need.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We understand the unique needs of rural communities and are committed to providing accessible,
                high-quality care close to home. Our team of licensed professionals is dedicated to supporting your
                journey to recovery and improved mental wellness.
              </p>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Services Available</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <Card key={service.title} className="border-l-4 border-brand-accent-green">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <span className="text-2xl mr-4">{service.icon}</span>
                        <div>
                          <h3 className="text-lg font-semibold text-brand-blue mb-2">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Photo Upload Section */}
            <section>
              <PhotoUpload locationName="Cadiz" />
            </section>

            {/* Call to Action */}
            <section className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">Ready to Get Started?</h2>
              <p className="text-gray-600 mb-6">
                Take the first step toward recovery. Contact our Cadiz location today to schedule a confidential
                assessment or learn more about our treatment programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-accent-orange hover:bg-brand-accent-orange/90" asChild>
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:740-942-2891">Call Now: 740-942-2891</a>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
