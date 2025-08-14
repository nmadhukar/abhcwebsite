import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Users, Target, Award, Shield, Stethoscope, Phone, Mail, MapPin } from "lucide-react"
import { getManagementTeam } from "@/lib/supabase/management-team"
import { generateSEOMetadata, StructuredData } from "@/components/seo-metadata"
import { getSEOMetadata } from "@/lib/supabase/seo"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    pagePath: "/about",
    fallback: {
      title: "About Us - Autumn Behavioral Health Center",
      description:
        "Learn about our mission, values, and commitment to providing exceptional mental health and addiction treatment services across Ohio with compassionate, evidence-based care.",
      keywords: [
        "about Autumn Behavioral Health",
        "mental health mission",
        "addiction treatment philosophy",
        "Ohio healthcare provider",
      ],
    },
  })
}

const accreditations = [
  {
    name: "CARF Accredited",
    description: "Commission on Accreditation of Rehabilitation Facilities - Aspire to Excellence",
    icon: Award,
    logo: "/carf-logo.png",
  },
  {
    name: "OHMAS Certified",
    description: "Ohio Department of Mental Health and Addiction Services",
    icon: Shield,
    logo: "/ohmas-logo.png",
  },
  {
    name: "Evidence-Based Care",
    description: "Clinically proven treatment methodologies and best practices",
    icon: Stethoscope,
  },
]

const stats = [
  { number: "15+", label: "Years of Excellence" },
  { number: "7", label: "Ohio Locations" },
  { number: "1000+", label: "Lives Transformed" },
  { number: "24/7", label: "Crisis Support" },
]

const coreValues = [
  {
    title: "Compassionate Care",
    description:
      "We treat every individual with empathy, understanding, and respect, recognizing the courage it takes to seek help.",
    icon: Heart,
  },
  {
    title: "Clinical Excellence",
    description:
      "Our evidence-based treatment approaches are delivered by highly qualified professionals committed to the highest standards.",
    icon: Award,
  },
  {
    title: "Collaborative Approach",
    description:
      "We work closely with families, healthcare providers, and community partners to ensure comprehensive support.",
    icon: Users,
  },
  {
    title: "Innovative Solutions",
    description: "We continuously evolve our programs to incorporate the latest research and therapeutic innovations.",
    icon: Target,
  },
]

export default async function AboutPage() {
  const managementTeam = await getManagementTeam()
  const seoData = await getSEOMetadata("/about")

  return (
    <>
      {seoData?.structured_data && <StructuredData data={seoData.structured_data} />}
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-brand-blue to-brand-blue/90 text-white py-24 sm:py-32">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                About Autumn Behavioral Health Center
              </h1>
              <p className="text-xl leading-8 text-blue-100 mb-8">
                Ohio's premier provider of comprehensive behavioral health and addiction treatment services, dedicated
                to transforming lives through evidence-based care and compassionate support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-accent-orange hover:bg-brand-accent-orange/90" asChild>
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Get Help Now
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-brand-blue bg-transparent"
                  asChild
                >
                  <Link href="/locations">
                    <MapPin className="mr-2 h-5 w-5" />
                    Find a Location
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-brand-blue mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl mb-4">Our Foundation</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Built on decades of clinical expertise, evidence-based practices, and an unwavering commitment to
                excellence in behavioral healthcare
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 mb-20">
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-accent-orange text-white mb-6 mx-auto">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide comprehensive, evidence-based behavioral health and addiction treatment services that
                  promote recovery, resilience, and long-term wellness for individuals, families, and communities
                  throughout Ohio.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-accent-orange text-white mb-6 mx-auto">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be Ohio's premier behavioral health organization, recognized for clinical excellence, innovative
                  treatment approaches, and our commitment to removing barriers to care while fostering hope and
                  healing.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-accent-orange text-white mb-6 mx-auto">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Compassion, Integrity, Excellence, Respect, and Innovation guide every aspect of our care delivery. We
                  believe in treating each person with dignity while maintaining the highest professional standards.
                </p>
              </div>
            </div>

            {/* Core Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-blue text-white mb-4 mx-auto">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-brand-blue mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditations Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">Accreditations & Certifications</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our commitment to excellence is validated by leading healthcare accreditation organizations
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {accreditations.map((accred, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  {accred.logo ? (
                    <div className="flex items-center justify-center h-16 mb-6 mx-auto">
                      <Image
                        src={accred.logo || "/placeholder.svg"}
                        alt={accred.name}
                        width={80}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-blue text-white mb-4 mx-auto">
                      <accred.icon className="h-6 w-6" />
                    </div>
                  )}
                  <h3 className="font-bold text-brand-blue mb-2">{accred.name}</h3>
                  <p className="text-sm text-gray-600">{accred.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl mb-4">Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our experienced leadership team combines clinical expertise with operational excellence to ensure the
                highest quality of care and service delivery across all our locations.
              </p>
            </div>

            {managementTeam.length > 0 ? (
              <div className="max-w-5xl mx-auto space-y-8">
                {managementTeam.map((person) => (
                  <div
                    key={person.id}
                    className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative h-48 w-48 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                      <Image
                        className="rounded-xl object-cover shadow-md"
                        src={person.image_url || "/placeholder.svg?height=192&width=192&query=professional headshot"}
                        alt={`Portrait of ${person.name}`}
                        fill
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-brand-blue mb-2">{person.name}</h3>
                      <p className="text-brand-accent-orange font-semibold text-lg mb-3">{person.title}</p>
                      {person.credentials && (
                        <p className="text-sm text-gray-500 font-medium mb-4 tracking-wide">{person.credentials}</p>
                      )}
                      {person.bio && <p className="text-gray-600 leading-relaxed mb-6 text-base">{person.bio}</p>}
                      {person.specialties && person.specialties.length > 0 && (
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          {person.specialties.map((specialty, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-brand-blue/10 text-brand-blue text-sm font-medium rounded-full border border-brand-blue/20"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">Leadership Team Coming Soon</h3>
                <p className="text-gray-500">Our leadership profiles are being updated. Please check back soon.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="bg-gradient-to-r from-brand-blue to-brand-blue/90 py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Begin Your Journey to Recovery</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Take the first step toward a healthier future. Our admissions specialists are available 24/7 to provide
              confidential assessments and help you find the right treatment program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-brand-accent-orange hover:bg-brand-accent-orange/90" asChild>
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Start Your Assessment
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-blue bg-transparent"
                asChild
              >
                <Link href="/locations">
                  <MapPin className="mr-2 h-5 w-5" />
                  Find a Location
                </Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span className="font-medium">(614) 219-9394</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span className="font-medium">clinic@autumntreatment.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
