import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Users, Pill, Heart, Clock, Shield, Phone } from "lucide-react"
import Link from "next/link"
import { generateSEOMetadata, StructuredData } from "@/components/seo-metadata"
import { getSEOMetadata } from "@/lib/supabase/seo"

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    pagePath: "/services/mental-health",
    fallback: {
      title: "Mental Health Services - Autumn Behavioral Health Center",
      description:
        "Comprehensive mental health care including psychiatric evaluations, therapy, and crisis intervention. We treat depression, anxiety, PTSD, and more.",
      keywords: [
        "mental health services",
        "psychiatric evaluation",
        "therapy",
        "counseling",
        "crisis intervention",
        "depression treatment",
        "anxiety treatment",
      ],
    },
  })
}

export default async function MentalHealthServicesPage() {
  const seoData = await getSEOMetadata("/services/mental-health")

  const services = [
    {
      icon: Brain,
      title: "Psychiatric Evaluation & Treatment",
      description:
        "Comprehensive psychiatric assessments and ongoing medication management by board-certified psychiatrists.",
      features: [
        "Initial psychiatric evaluation",
        "Medication management",
        "Treatment planning",
        "Progress monitoring",
      ],
    },
    {
      icon: Users,
      title: "Individual & Group Therapy",
      description:
        "Evidence-based therapy approaches including CBT, DBT, and trauma-informed care in individual and group settings.",
      features: [
        "Cognitive Behavioral Therapy",
        "Dialectical Behavior Therapy",
        "Trauma-focused therapy",
        "Support groups",
      ],
    },
    {
      icon: Heart,
      title: "Crisis Intervention",
      description:
        "24/7 crisis support and intervention services for individuals experiencing mental health emergencies.",
      features: ["24/7 crisis hotline", "Emergency assessments", "Safety planning", "Crisis stabilization"],
    },
    {
      icon: Shield,
      title: "Specialized Programs",
      description: "Targeted treatment programs for specific mental health conditions and populations.",
      features: ["PTSD treatment", "Anxiety disorders", "Depression treatment", "Bipolar disorder care"],
    },
  ]

  const conditions = [
    "Depression",
    "Anxiety Disorders",
    "Bipolar Disorder",
    "PTSD",
    "Schizophrenia",
    "Obsessive-Compulsive Disorder",
    "Panic Disorder",
    "Social Anxiety",
    "ADHD",
    "Eating Disorders",
    "Personality Disorders",
    "Grief and Loss",
  ]

  return (
    <>
      {seoData?.structured_data && <StructuredData data={seoData.structured_data} />}
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Brain className="h-16 w-16 mx-auto mb-6 text-blue-200" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Mental Health Services</h1>
              <p className="text-xl leading-relaxed">
                Comprehensive mental health care designed to help you achieve emotional wellness and improve your
                quality of life through evidence-based treatments and compassionate support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (614) 219-9394
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 bg-transparent"
                >
                  <Link href="/admissions">Schedule Assessment</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mental Health Services</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer a full range of mental health services delivered by licensed professionals using the latest
                evidence-based treatment approaches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-t-4 border-t-blue-600 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
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

        {/* Conditions Treated */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Conditions We Treat</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our experienced team provides specialized treatment for a wide range of mental health conditions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <span className="text-gray-700 font-medium">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Approach */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Treatment Approach</h2>
                <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Evidence-Based Care</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our mental health services are grounded in the latest research and proven treatment methodologies.
                    We use evidence-based approaches such as Cognitive Behavioral Therapy (CBT), Dialectical Behavior
                    Therapy (DBT), and trauma-informed care to ensure the most effective treatment outcomes.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Clock className="h-5 w-5 text-blue-600 mr-3" />
                      <span>Flexible scheduling including evenings and weekends</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-blue-600 mr-3" />
                      <span>Individual, group, and family therapy options</span>
                    </li>
                    <li className="flex items-center">
                      <Pill className="h-5 w-5 text-blue-600 mr-3" />
                      <span>Integrated medication management when needed</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Mental health therapy session"
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
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Mental Health Journey?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Take the first step toward better mental health. Our compassionate team is here to support you every step
              of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/admissions">Schedule Assessment</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white/20 bg-transparent"
              >
                <a href="tel:6142199394">Call: (614) 219-9394</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
