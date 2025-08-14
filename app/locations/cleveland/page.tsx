import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Mail, Users, Heart, Shield, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cleveland Location | Autumn Behavioral Health",
  description:
    "Mental health and addiction treatment services at our Cleveland, Ohio location. We offer specialized programs for all ages.",
}

export default function ClevelandLocationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-800 text-white">
        <Image
          src="/locations/cleveland-exterior.png"
          alt="Autumn Behavioral Health Cleveland Facility"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        <div className="relative h-full flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold">Autumn Behavioral Health - Cleveland Heights</h1>
          <p className="mt-4 text-xl max-w-3xl">Providing hope and expert care to the Greater Cleveland community.</p>
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
                      456 Hope St
                      <br />
                      Cleveland, OH 44115
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
                      <p>Mon - Thu: 8:30 AM - 7:00 PM</p>
                      <p>Fri: 8:30 AM - 5:00 PM</p>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <a
                      href="https://maps.google.com/?q=456+Hope+St+Cleveland+OH+44115"
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
              <h2 className="text-3xl font-bold text-brand-blue mb-4">Services in Cleveland</h2>
              <p className="text-gray-600 mb-8">
                Our Cleveland Heights location offers a comprehensive suite of behavioral health services. We specialize
                in dual diagnosis treatment, recognizing the interconnectedness of mental health and substance use
                disorders, and provide integrated care to address both.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Heart className="h-8 w-8 text-brand-accent-green mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Dual Diagnosis Programs</h3>
                  <p className="text-sm text-gray-600">
                    Integrated treatment for co-occurring mental health and substance use disorders.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Shield className="h-8 w-8 text-brand-accent-green mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Intensive Outpatient (IOP)</h3>
                  <p className="text-sm text-gray-600">
                    Structured programs that offer a higher level of care than traditional outpatient therapy.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Users className="h-8 w-8 text-brand-accent-green mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Adolescent Services</h3>
                  <p className="text-sm text-gray-600">
                    Specialized counseling and support for teens facing mental health challenges.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Users className="h-8 w-8 text-brand-accent-green mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Peer Support</h3>
                  <p className="text-sm text-gray-600">
                    Connect with certified peer supporters who have lived experience with recovery.
                  </p>
                </div>
              </div>
              <div className="mt-12 text-center">
                <p className="text-lg text-gray-700 mb-4">We are here to help.</p>
                <Button asChild size="lg">
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
