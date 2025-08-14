import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Mail, Users, Heart, Shield, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cincinnati Location | Autumn Behavioral Health",
  description:
    "Find support at our Cincinnati, Ohio center. We provide mental health services, addiction recovery, and family counseling.",
}

export default function CincinnatiLocationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-800 text-white">
        <Image
          src="/locations/cincinnati-exterior.png"
          alt="Autumn BHC Cincinnati Facility"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        <div className="relative h-full flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold">Autumn Behavioral Health - Cincinnati Riverfront</h1>
          <p className="mt-4 text-xl max-w-3xl">Compassionate care for individuals and families in Southwest Ohio.</p>
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
                      789 Serenity Rd
                      <br />
                      Cincinnati, OH 45202
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
                      <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                      <p>Evening appointments available.</p>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <a
                      href="https://maps.google.com/?q=789+Serenity+Rd+Cincinnati+OH+45202"
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
              <h2 className="text-3xl font-bold text-brand-blue mb-4">Services in Cincinnati</h2>
              <p className="text-gray-600 mb-8">
                Our Cincinnati Riverfront office is a place of peace and healing. We focus on creating a warm, inviting
                atmosphere where clients can feel safe and supported. Our team is committed to helping you navigate
                life's challenges and build a foundation for lasting wellness.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Heart className="h-8 w-8 text-brand-accent-green mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Family & Couples Counseling</h3>
                  <p className="text-sm text-gray-600">
                    Strengthen relationships and improve communication with our expert therapists.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Shield className="h-8 w-8 text-brand-accent-green mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Trauma-Informed Care</h3>
                  <p className="text-sm text-gray-600">
                    Specialized approaches like EMDR to help you heal from past traumatic experiences.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Users className="h-8 w-8 text-brand-accent-green mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Support Groups</h3>
                  <p className="text-sm text-gray-600">
                    Join a community of peers for shared support in areas like grief, anxiety, and recovery.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Users className="h-8 w-8 text-brand-accent-green mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Mental Health First Aid</h3>
                  <p className="text-sm text-gray-600">
                    Community workshops and training to help identify and respond to mental health crises.
                  </p>
                </div>
              </div>
              <div className="mt-12 text-center">
                <p className="text-lg text-gray-700 mb-4">Find your path to wellness with us.</p>
                <Button asChild size="lg">
                  <Link href="/contact">Schedule an Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
