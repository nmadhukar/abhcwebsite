import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Users, Shield, Heart, CheckCircle, Clock, Phone, MapPin, Award } from "lucide-react"
import Link from "next/link"

export default function HousingPage() {
  const housingOptions = [
    {
      icon: Home,
      title: "Transitional Housing",
      description: "Structured, short-term housing that bridges treatment and independent living.",
      duration: "6-12 months",
      features: ["24/7 support staff", "Case management", "Life skills training", "Job placement assistance"],
      image: "/housing-transitional.png",
    },
    {
      icon: Users,
      title: "Sober Living Homes",
      description: "Peer-supported community living with accountability and mutual support.",
      duration: "Flexible stay",
      features: ["Peer support groups", "House meetings", "Accountability partners", "Community activities"],
      image: "/housing-sober-living.png",
    },
    {
      icon: Shield,
      title: "Specialized Housing",
      description: "Tailored housing programs for specific populations and unique needs.",
      duration: "Varies by program",
      features: ["Gender-specific options", "Family housing", "LGBTQ+ affirming", "Trauma-informed care"],
      image: "/housing-specialized.png",
    },
  ]

  const benefits = [
    { icon: Shield, title: "Safe Environment", description: "Drug-free, secure living spaces with 24/7 support" },
    { icon: Users, title: "Peer Community", description: "Connect with others on similar recovery journeys" },
    {
      icon: CheckCircle,
      title: "Structured Living",
      description: "Daily routines and expectations that promote stability",
    },
    { icon: Heart, title: "Ongoing Support", description: "Access to counseling, case management, and resources" },
  ]

  const locations = [
    { city: "Cadiz", address: "123 Recovery Way", phone: "(614) 219-9394", beds: "12 beds available" },
    { city: "Circleville", address: "456 Hope Street", phone: "(614) 219-9394", beds: "8 beds available" },
    { city: "Marion", address: "789 Healing Lane", phone: "(614) 219-9394", beds: "16 beds available" },
    { city: "Reynoldsburg", address: "321 Serenity Drive", phone: "(614) 219-9394", beds: "10 beds available" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Home className="h-12 w-12 mr-4" />
              <span className="text-lg font-medium bg-white/20 px-4 py-2 rounded-full">Recovery Housing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Safe Housing for <span className="text-blue-200">Recovery</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Supportive living environments that provide stability, community, and the foundation for lasting recovery
              across Ohio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
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

      {/* Housing Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Housing Options</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from various housing programs designed to meet you where you are in your recovery journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {housingOptions.map((option, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-t-lg flex items-center justify-center">
                  <option.icon className="h-16 w-16 text-blue-600" />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {option.title}
                  </CardTitle>
                  <div className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full w-fit">
                    {option.duration}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                  <ul className="space-y-3">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Housing</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our housing programs provide more than just a place to stay—they offer a foundation for lasting recovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <benefit.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Housing Locations</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Convenient housing locations throughout Ohio, close to treatment centers and community resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    {location.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600 text-sm">{location.address}</p>
                  <p className="text-blue-600 font-medium text-sm">{location.beds}</p>
                  <Button asChild size="sm" className="w-full">
                    <a href={`tel:${location.phone}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      {location.phone}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section id="housing-application" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Apply for Housing?</h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Take the next step in your recovery journey. Our housing specialists are ready to help you find the
              perfect supportive living environment.
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
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Care</h3>
                <p className="opacity-90">CARF accredited programs</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
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
                <Link href="/admissions">Start Application</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
