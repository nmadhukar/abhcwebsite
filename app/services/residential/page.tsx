import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Clock, Heart, Shield, Users, Stethoscope } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Residential Treatment Programs - Autumn Behavioral Health Center",
  description:
    "24/7 residential addiction and mental health treatment in Ohio. Safe, supportive environment with medical supervision and comprehensive programming.",
  keywords: [
    "residential treatment Ohio",
    "inpatient addiction treatment",
    "residential mental health care",
    "24/7 treatment facility",
    "Ohio residential rehab",
    "inpatient recovery programs",
  ],
  openGraph: {
    title: "Residential Treatment Programs - Autumn Behavioral Health Center",
    description:
      "24/7 residential addiction and mental health treatment in Ohio. Safe, supportive environment with medical supervision.",
    url: "https://autumntreatment.com/services/residential",
  },
  alternates: {
    canonical: "https://autumntreatment.com/services/residential",
  },
}

export default function ResidentialPage() {
  const programs = [
    {
      icon: Home,
      title: "Short-Term Residential (30 days)",
      description:
        "Intensive 30-day program focusing on stabilization, detox support, and initial recovery skills development.",
      features: [
        "24/7 medical supervision",
        "Individual and group therapy",
        "Medication management",
        "Family involvement",
      ],
      duration: "30 days",
    },
    {
      icon: Clock,
      title: "Long-Term Residential (60-90 days)",
      description:
        "Extended residential care for individuals requiring longer-term support and comprehensive skill building.",
      features: [
        "Extended therapeutic community",
        "Life skills training",
        "Vocational counseling",
        "Aftercare planning",
      ],
      duration: "60-90 days",
    },
    {
      icon: Heart,
      title: "Dual Diagnosis Residential",
      description:
        "Specialized residential treatment for individuals with co-occurring mental health and substance use disorders.",
      features: [
        "Integrated treatment approach",
        "Psychiatric services",
        "Trauma-informed care",
        "Medication optimization",
      ],
      duration: "30-90 days",
    },
    {
      icon: Shield,
      title: "Women's Residential Program",
      description:
        "Gender-specific residential treatment addressing the unique needs and challenges faced by women in recovery.",
      features: ["Women-only environment", "Trauma-focused therapy", "Parenting support", "Gender-specific issues"],
      duration: "30-60 days",
    },
  ]

  const amenities = [
    "Private and semi-private rooms",
    "24/7 nursing care",
    "On-site medical services",
    "Nutritious meal planning",
    "Fitness and recreation facilities",
    "Quiet spaces for reflection",
    "Family visiting areas",
    "Educational resources",
    "Peer support activities",
    "Spiritual care services",
  ]

  const dailySchedule = [
    { time: "7:00 AM", activity: "Wake-up & Personal Care" },
    { time: "8:00 AM", activity: "Breakfast & Medication" },
    { time: "9:00 AM", activity: "Morning Group Therapy" },
    { time: "10:30 AM", activity: "Individual Counseling" },
    { time: "12:00 PM", activity: "Lunch & Rest Period" },
    { time: "1:30 PM", activity: "Educational Workshops" },
    { time: "3:00 PM", activity: "Recreational Therapy" },
    { time: "4:30 PM", activity: "Life Skills Training" },
    { time: "6:00 PM", activity: "Dinner & Community Time" },
    { time: "7:30 PM", activity: "Evening Support Groups" },
    { time: "9:00 PM", activity: "Personal Time & Reflection" },
    { time: "10:00 PM", activity: "Lights Out" },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Residential Treatment Programs</h1>
            <p className="text-xl leading-relaxed">
              24/7 comprehensive residential care in a safe, supportive environment designed to provide the intensive
              treatment and structure needed for lasting recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Residential Programs</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer various residential treatment options to meet different needs and provide the appropriate level
              of care for each individual's recovery journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="border-t-4 border-t-blue-600 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <program.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <div className="text-sm text-blue-600 font-medium">Duration: {program.duration}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">A Typical Day in Residential Treatment</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Our structured daily schedule provides stability and routine while incorporating various therapeutic
                activities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dailySchedule.map((item, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-20 text-blue-600 font-semibold text-sm">{item.time}</div>
                  <div className="flex-1 text-gray-700">{item.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities & Environment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comfortable & Healing Environment</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Our residential facilities are designed to provide a comfortable, home-like environment that supports
                healing and recovery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Facility Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=400&width=500&text=Residential+Facility"
                  alt="Residential treatment facility"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Care */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Medical Care</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Stethoscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">24/7 Medical Supervision</h3>
                  <p className="text-gray-600 text-sm">
                    Round-the-clock medical care with on-site nursing staff and physician oversight.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Medication Management</h3>
                  <p className="text-gray-600 text-sm">
                    Expert medication management and monitoring for both addiction and mental health conditions.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Multidisciplinary Team</h3>
                  <p className="text-gray-600 text-sm">
                    Coordinated care from doctors, nurses, therapists, and counselors working together.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Admission Process</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Initial Contact</h3>
                <p className="text-gray-600 text-sm">Call our admissions team for a confidential assessment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Medical Evaluation</h3>
                <p className="text-gray-600 text-sm">Comprehensive medical and psychological assessment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Insurance Verification</h3>
                <p className="text-gray-600 text-sm">We verify your insurance benefits and coverage</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Admission</h3>
                <p className="text-gray-600 text-sm">Same-day admission available when appropriate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Residential Treatment?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step toward comprehensive recovery in our safe, supportive residential environment. Our team
            is here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/admissions">Start Admission Process</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white/20 bg-transparent"
            >
              <a href="tel:(614) 219-9394">Call: (614) 219-9394</a>
            </Button>
          </div>
          <div className="mt-8 text-sm">
            <p className="text-blue-200">
              24/7 admissions support • Insurance accepted • Same-day admissions available
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
