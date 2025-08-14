import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Mail, Users, Heart, Shield, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Columbus Location | Autumn Behavioral Health",
  description:
    "Comprehensive mental health and addiction services at our Columbus, Ohio center. We offer counseling, therapy, and outpatient programs.",
}

export default function ColumbusLocationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-800 text-white">
        <Image
          src="/locations/columbus-exterior.png"
          alt="Autumn Behavioral Health Columbus Facility"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        <div className="relative h-full flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold">Autumn Behavioral Health - Columbus Central</h1>
          <p className="mt-4 text-xl max-w-3xl">Your partner in healing and recovery in the heart of Ohio.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Location Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-brand-accent-orange mr-3 mt-1" />
                    <p>
                      123 Wellness Ave
                      <br />
                      Columbus, OH 43215
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-brand-accent-orange mr-3" />
                    <a href="tel:614-219-9394" className="hover:underline">
                      (614) 219-9394
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-brand-accent-orange mr-3" />
                    <a href="mailto:clinic@autumntreatment.com" className="hover:underline">
                      clinic@autumntreatment.com
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-brand-accent-orange mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Hours:</p>
                      <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                      <p>Sat: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <a
                      href="https://maps.google.com/?q=123+Wellness+Ave+Columbus+OH+43215"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Services & About */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">Services in Columbus</h2>
              <p className="text-gray-600 mb-8">
                Our Columbus center provides a wide range of services for adults, adolescents, and families. We are
                dedicated to creating personalized treatment plans that address the unique needs of each individual in a
                supportive and confidential setting.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Heart className="h-8 w-8 text-brand-accent-green mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Mental Health Counseling</h3>
                  <p className="text-sm text-gray-600">
                    Individual, group, and family therapy for anxiety, depression, trauma, and more.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Shield className="h-8 w-8 text-brand-accent-green mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Addiction & Recovery</h3>
                  <p className="text-sm text-gray-600">
                    Evidence-based treatment for substance use disorders, including outpatient programs and Suboxone
                    services.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Users className="h-8 w-8 text-brand-accent-green mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Psychiatry Services</h3>
                  <p className="text-sm text-gray-600">
                    Medication management and psychiatric evaluations by our expert medical team.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Users className="h-8 w-8 text-brand-accent-green mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Case Management</h3>
                  <p className="text-sm text-gray-600">
                    Coordination of care and connection to community resources to support your journey.
                  </p>
                </div>
              </div>
              <div className="mt-12 text-center">
                <p className="text-lg text-gray-700 mb-4">Ready to take the first step?</p>
                <Button asChild size="lg">
                  <Link href="/admissions">Begin Your Journey</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
