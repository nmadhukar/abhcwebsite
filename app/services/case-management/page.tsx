import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clipboard, Users, FileText, Target, Phone, Calendar } from "lucide-react"
import Link from "next/link"

export default function CaseManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-brand-green text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clipboard className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Management Services</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Comprehensive case management services to coordinate your care and support your recovery goals with
              personalized attention and professional guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Case Management Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our experienced case managers work closely with you to coordinate care, navigate resources, and ensure
                you receive the comprehensive support needed for successful recovery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Care Coordination",
                  description:
                    "Seamless coordination between all members of your treatment team and healthcare providers.",
                },
                {
                  icon: Target,
                  title: "Resource Navigation",
                  description:
                    "Help accessing community resources, benefits, housing, employment, and other essential services.",
                },
                {
                  icon: FileText,
                  title: "Treatment Planning",
                  description:
                    "Collaborative development of individualized treatment plans that address your unique needs and goals.",
                },
                {
                  icon: Calendar,
                  title: "Progress Monitoring",
                  description:
                    "Regular assessment of your progress and adjustment of services to ensure optimal outcomes.",
                },
              ].map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-brand-green" />
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
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Case Management Process</h2>
              <p className="text-lg text-gray-600">
                A structured approach to ensure you receive comprehensive, coordinated care throughout your recovery
                journey.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Initial Assessment",
                  description:
                    "Comprehensive evaluation of your needs, strengths, and goals to develop a personalized care plan.",
                },
                {
                  step: "2",
                  title: "Care Plan Development",
                  description:
                    "Collaborative creation of an individualized treatment plan with clear objectives and timelines.",
                },
                {
                  step: "3",
                  title: "Service Coordination",
                  description:
                    "Connection with appropriate services and providers, ensuring seamless communication between all parties.",
                },
                {
                  step: "4",
                  title: "Ongoing Support",
                  description:
                    "Regular check-ins, progress monitoring, and plan adjustments to ensure optimal outcomes.",
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits of Case Management</h2>
              <p className="text-lg text-gray-600">
                Professional case management provides numerous advantages for individuals in recovery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Improved coordination between healthcare providers",
                "Better access to community resources and services",
                "Reduced barriers to treatment and recovery",
                "Enhanced communication with treatment team",
                "Personalized support tailored to your needs",
                "Advocacy for your rights and preferences",
                "Assistance with insurance and benefits navigation",
                "Support for family members and caregivers",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-brand-green rounded-full mr-4 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl opacity-90 mb-8">
              Our experienced case managers are here to help coordinate your care and support your recovery journey.
              Contact us today to learn more about our case management services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-brand-green hover:bg-gray-100">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Today
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-green bg-transparent"
              >
                <Link href="/admissions">Learn About Admissions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
