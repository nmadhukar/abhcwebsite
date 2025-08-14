import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, Shield, Heart, Phone, CheckCircle, Users, Activity, Pill, UserCheck } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Residential Detox Services - Autumn Behavioral Health Center",
  description:
    "Safe, medically supervised residential detoxification services. 24/7 medical monitoring, comfort medications, and compassionate care during withdrawal.",
  keywords: [
    "residential detox",
    "medical detox",
    "detoxification services",
    "withdrawal management",
    "supervised detox",
    "alcohol detox",
    "drug detox",
    "Autumn Behavioral Health Center",
  ],
}

const detoxServices = [
  {
    icon: Stethoscope,
    title: "Medical Supervision",
    description: "24/7 monitoring by licensed medical professionals throughout your detox process",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "FDA-approved medications to safely manage withdrawal symptoms and reduce discomfort",
  },
  {
    icon: Heart,
    title: "Comfort Care",
    description: "Comprehensive comfort measures including nutrition, hydration, and emotional support",
  },
  {
    icon: Activity,
    title: "Assessment & Planning",
    description: "Thorough evaluation and personalized treatment planning for continued care",
  },
]

const detoxProcess = [
  {
    step: "1",
    title: "Initial Assessment",
    description: "Comprehensive medical and psychological evaluation to determine the safest detox approach",
  },
  {
    step: "2",
    title: "Medical Stabilization",
    description: "24/7 monitoring and medication management to ensure safe withdrawal from substances",
  },
  {
    step: "3",
    title: "Comfort & Support",
    description: "Ongoing care to manage symptoms and provide emotional support throughout the process",
  },
  {
    step: "4",
    title: "Transition Planning",
    description: "Preparation and referral to appropriate continuing care and treatment programs",
  },
]

const substancesTreated = [
  "Alcohol",
  "Opioids (Heroin, Prescription Pain Medications)",
  "Benzodiazepines",
  "Cocaine",
  "Methamphetamine",
  "Prescription Stimulants",
  "Synthetic Drugs",
  "Multiple Substances",
]

const benefits = [
  "24/7 medical supervision and monitoring",
  "Safe, comfortable residential environment",
  "Medication-assisted withdrawal management",
  "Nutritional support and meal planning",
  "Individual and group counseling",
  "Family education and support",
  "Discharge planning and referrals",
  "Insurance verification assistance",
]

export default function ResidentialDetoxPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-4">Residential Detox Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Safe, Medically Supervised Detoxification</h1>
            <p className="text-xl mb-8 text-blue-100">
              Begin your recovery journey with compassionate, 24/7 medical care in a safe residential environment. Our
              experienced team provides comprehensive detox services to help you safely withdraw from substances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="tel:(614) 219-9394" className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call for Immediate Admission
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 bg-transparent">
                <Link href="/contact">Learn More About Our Program</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Detox Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our residential detox program provides the highest level of medical care and support during the critical
              first phase of recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detoxServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-brand-green" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detox Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Detox Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured, medically-supervised approach to ensure your safety and comfort throughout
              detoxification.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detoxProcess.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg text-gray-900">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Substances Treated & Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Substances Treated */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Shield className="h-6 w-6 text-brand-green mr-3" />
                  Substances We Treat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {substancesTreated.map((substance, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-brand-green mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{substance}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Program Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Heart className="h-6 w-6 text-brand-green mr-3" />
                  Program Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-brand-green mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expert Medical Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our detox program is staffed by experienced medical professionals who specialize in addiction medicine and
              withdrawal management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="h-8 w-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Addiction Medicine Physicians</h3>
                <p className="text-gray-600">
                  Board-certified doctors specializing in addiction treatment and withdrawal management
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Registered Nurses</h3>
                <p className="text-gray-600">
                  24/7 nursing care with specialized training in detox and withdrawal symptoms
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Staff</h3>
                <p className="text-gray-600">
                  Compassionate support team providing emotional care and assistance throughout your stay
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Recovery Journey?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Don't wait another day. Our residential detox program provides the safe, supportive environment you need to
            start your path to recovery. Call now for immediate admission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="tel:(614) 219-9394" className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: (614) 219-9394
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 bg-transparent">
              <Link href="/admissions">Start Admissions Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
