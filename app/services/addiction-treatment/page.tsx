import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Home, Users, Pill, Clock, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Addiction Treatment Services | Rehab for Alcohol & Drugs | Autumn Behavioral Health",
  description:
    "Find lasting recovery with our comprehensive addiction treatment programs, including residential, IOP, and MAT for various substance use disorders. Serving Ohio communities.",
  keywords: [
    "addiction treatment",
    "substance abuse",
    "drug rehab",
    "alcohol rehab",
    "IOP",
    "PHP",
    "MAT",
    "opioid treatment",
    "addiction treatment in ohio",
  ],
  openGraph: {
    title: "Addiction Treatment Services - Autumn Behavioral Health Center",
    description: "Reclaim your life from substance use with our evidence-based addiction treatment programs.",
    url: "https://autumntreatment.com/services/addiction-treatment",
  },
  alternates: {
    canonical: "https://autumntreatment.com/services/addiction-treatment",
  },
}

export default function AddictionTreatmentPage() {
  const programs = [
    {
      icon: Home,
      title: "Residential Treatment",
      description:
        "24/7 inpatient care in a safe, supportive environment with medical supervision and comprehensive programming.",
      features: [
        "24/7 medical supervision",
        "Individual and group therapy",
        "Life skills training",
        "Family programming",
      ],
      duration: "30-90 days",
    },
    {
      icon: Clock,
      title: "Intensive Outpatient Program (IOP)",
      description:
        "Structured treatment program that allows you to maintain work and family commitments while receiving intensive care.",
      features: [
        "9-12 hours per week",
        "Evening and weekend options",
        "Group and individual therapy",
        "Relapse prevention",
      ],
      duration: "8-12 weeks",
    },
    {
      icon: Users,
      title: "Partial Hospitalization Program (PHP)",
      description: "A step-down level of care from residential treatment, offering daily therapy and support.",
      features: [
        "Daily therapy sessions",
        "Partial hospitalization",
        "Individual and group counseling",
        "Medication management",
      ],
      duration: "8-12 weeks",
    },
    {
      icon: Users,
      title: "Outpatient Treatment",
      description:
        "Flexible treatment options for individuals who need ongoing support while maintaining their daily responsibilities.",
      features: ["Individual counseling", "Group therapy sessions", "Medication management", "Family support"],
      duration: "3-6 months",
    },
    {
      icon: Pill,
      title: "Medication-Assisted Treatment (MAT)",
      description:
        "Evidence-based treatment combining FDA-approved medications with counseling and behavioral therapies.",
      features: ["Methadone maintenance", "Suboxone treatment", "Vivitrol injections", "Medical monitoring"],
      duration: "Ongoing as needed",
    },
  ]

  const substances = [
    "Alcohol",
    "Opioids",
    "Cocaine",
    "Methamphetamine",
    "Marijuana",
    "Prescription Drugs",
    "Heroin",
    "Fentanyl",
    "Benzodiazepines",
    "Stimulants",
    "Synthetic Drugs",
    "Polysubstance Use",
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Addiction Treatment Services</h1>
            <p className="text-xl leading-relaxed">
              Comprehensive, evidence-based addiction treatment programs designed to help you achieve lasting recovery
              and reclaim your life from substance use disorders.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Treatment Programs</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer multiple levels of care to meet you wherever you are in your recovery journey, from intensive
              residential treatment to ongoing outpatient support.
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

      {/* Substances Treated */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Substances We Treat</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our addiction treatment programs address all types of substance use disorders with specialized care for
              each substance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {substances.map((substance, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <span className="text-gray-700 font-medium">{substance}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Treatment Process</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Assessment & Intake</h3>
                <p className="text-gray-600">
                  Comprehensive evaluation to determine the most appropriate level of care and create a personalized
                  treatment plan.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Active Treatment</h3>
                <p className="text-gray-600">
                  Evidence-based therapies, medical care, and support services tailored to your specific needs and
                  recovery goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Continuing Care</h3>
                <p className="text-gray-600">
                  Ongoing support, relapse prevention planning, and connection to community resources for long-term
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Specialized Services</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Dual Diagnosis Treatment</h3>
                <p className="text-gray-600 text-sm">
                  Integrated treatment for co-occurring mental health and substance use disorders.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Family Program</h3>
                <p className="text-gray-600 text-sm">
                  Education and support services for family members affected by addiction.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Trauma-Informed Care</h3>
                <p className="text-gray-600 text-sm">
                  Specialized treatment addressing trauma that may contribute to substance use.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Recovery Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Recovery is possible. Take the first step today and let our experienced team guide you toward a healthier,
            substance-free life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/admissions">Start Treatment Today</Link>
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
          <div className="mt-8 text-sm">
            <p className="text-blue-200">
              Free confidential assessment • Insurance accepted • Same-day admissions available
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
