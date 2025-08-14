import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Users, Shield, Heart, CheckCircle, Clock, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function RecoveryHousingPage() {
  const housingTypes = [
    {
      icon: Home,
      title: "Transitional Housing",
      description: "Short-term housing that bridges the gap between treatment and independent living.",
      features: ["6-12 month programs", "Case management support", "Life skills training", "Job placement assistance"],
    },
    {
      icon: Users,
      title: "Sober Living Homes",
      description: "Peer-supported living environments that promote accountability and community.",
      features: ["Peer support groups", "House meetings", "Accountability partners", "Flexible length of stay"],
    },
    {
      icon: Shield,
      title: "Specialized Housing",
      description: "Housing programs designed for specific populations with unique needs.",
      features: [
        "Gender-specific options",
        "Family housing available",
        "LGBTQ+ affirming spaces",
        "Trauma-informed care",
      ],
    },
  ]

  const benefits = [
    "Safe, drug-free living environment",
    "24/7 peer support and accountability",
    "Structured daily routines and expectations",
    "Access to ongoing treatment services",
    "Life skills development and training",
    "Employment and education support",
    "Community integration assistance",
    "Relapse prevention resources",
  ]

  const requirements = [
    "Commitment to maintaining sobriety",
    "Completion of initial treatment program",
    "Willingness to participate in house activities",
    "Compliance with house rules and curfews",
    "Regular drug and alcohol testing",
    "Contribution to household responsibilities",
    "Participation in recovery meetings",
    "Respect for other residents and staff",
  ]

  const supportServices = [
    {
      icon: Users,
      title: "Case Management",
      description: "Dedicated case managers help coordinate care and connect residents with community resources.",
    },
    {
      icon: Heart,
      title: "Peer Support",
      description: "24/7 peer support from other residents who understand the recovery journey.",
    },
    {
      icon: CheckCircle,
      title: "Life Skills Training",
      description: "Programs focused on developing practical skills for independent living and employment.",
    },
    {
      icon: Shield,
      title: "Relapse Prevention",
      description: "Ongoing education and support to help residents maintain their sobriety long-term.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Recovery Housing Services</h1>
              <p className="text-xl mb-8 opacity-90">
                Safe, supportive housing environments that promote long-term recovery and independent living
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <a href="tel:(614) 219-9394">
                    <Phone className="h-5 w-5 mr-2" />
                    Call (614) 219-9394
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <Link href="#housing-application">Apply for Housing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Housing Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Recovery Housing</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer various housing options to meet different needs and stages of recovery
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {housingTypes.map((type, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <type.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
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

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Recovery Housing</h2>
                <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Recovery housing provides essential support during the critical transition from treatment to
                  independent living
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Housing Requirements</h2>
                <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600">
                  To ensure a safe and supportive environment for all residents, we have established clear expectations
                </p>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Support Services</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive support services help residents build the skills and connections needed for long-term
                success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportServices.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Begin Housing Application */}
        <section id="housing-application" className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Begin Your Housing Application</h2>
              <p className="text-xl mb-8 opacity-90">
                Ready to take the next step in your recovery journey? Our housing specialists are here to help you find
                the right supportive living environment.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Call Today</h3>
                  <p className="opacity-90">Speak with a housing specialist</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quick Process</h3>
                  <p className="opacity-90">Fast application and approval</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Multiple Locations</h3>
                  <p className="opacity-90">Housing options throughout Ohio</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <a href="tel:(614) 219-9394">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now: (614) 219-9394
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <Link href="/admissions">Start Housing Application</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
