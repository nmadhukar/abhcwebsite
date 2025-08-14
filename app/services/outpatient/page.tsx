import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Home, Calendar, Shield } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Outpatient Treatment Programs - Autumn Behavioral Health Center",
  description:
    "Flexible outpatient addiction and mental health treatment in Ohio. Individual therapy, group sessions, and support while maintaining daily responsibilities.",
  keywords: [
    "outpatient treatment Ohio",
    "outpatient therapy",
    "flexible addiction treatment",
    "outpatient mental health",
    "Ohio outpatient programs",
    "part-time treatment",
  ],
  openGraph: {
    title: "Outpatient Treatment Programs - Autumn Behavioral Health Center",
    description:
      "Flexible outpatient addiction and mental health treatment in Ohio. Maintain daily responsibilities while receiving quality care.",
    url: "https://autumntreatment.com/services/outpatient",
  },
  alternates: {
    canonical: "https://autumntreatment.com/services/outpatient",
  },
}

export default function OutpatientPage() {
  const programs = [
    {
      icon: Clock,
      title: "Standard Outpatient Program",
      description: "Flexible therapy sessions that work around your schedule, typically 1-3 sessions per week.",
      features: [
        "Individual counseling sessions",
        "Weekly group therapy",
        "Medication management",
        "Family therapy sessions",
      ],
      commitment: "1-3 hours per week",
      duration: "3-6 months",
    },
    {
      icon: Users,
      title: "Intensive Outpatient Program (IOP)",
      description:
        "More intensive treatment while still allowing you to live at home and maintain work or school commitments.",
      features: [
        "9-12 hours per week",
        "Group and individual therapy",
        "Relapse prevention training",
        "Life skills development",
      ],
      commitment: "9-12 hours per week",
      duration: "8-12 weeks",
    },
    {
      icon: Home,
      title: "Partial Hospitalization Program (PHP)",
      description: "Day treatment program providing intensive care while allowing you to return home each evening.",
      features: ["6-8 hours per day", "Comprehensive therapy", "Medical monitoring", "Structured programming"],
      commitment: "6-8 hours per day",
      duration: "2-8 weeks",
    },
    {
      icon: Shield,
      title: "Continuing Care Program",
      description: "Long-term support and maintenance program for individuals who have completed intensive treatment.",
      features: ["Monthly check-ins", "Support group meetings", "Relapse prevention", "Ongoing medication management"],
      commitment: "2-4 hours per month",
      duration: "Ongoing",
    },
  ]

  const benefits = [
    {
      title: "Maintain Daily Life",
      description: "Continue working, attending school, and caring for family while receiving treatment.",
      icon: Home,
    },
    {
      title: "Flexible Scheduling",
      description: "Evening and weekend appointments available to accommodate your schedule.",
      icon: Calendar,
    },
    {
      title: "Cost-Effective",
      description: "More affordable than residential treatment while still providing quality care.",
      icon: Shield,
    },
    {
      title: "Community Support",
      description: "Build connections with peers in recovery while staying in your community.",
      icon: Users,
    },
  ]

  const scheduleOptions = [
    {
      time: "Morning Sessions",
      hours: "8:00 AM - 12:00 PM",
      description: "Perfect for those with afternoon work or school commitments",
    },
    {
      time: "Afternoon Sessions",
      hours: "1:00 PM - 5:00 PM",
      description: "Ideal for morning workers or those with evening responsibilities",
    },
    {
      time: "Evening Sessions",
      hours: "6:00 PM - 9:00 PM",
      description: "Designed for full-time workers and students",
    },
    {
      time: "Weekend Programs",
      hours: "Saturday 9:00 AM - 3:00 PM",
      description: "Comprehensive weekend sessions for busy weekday schedules",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Outpatient Treatment Programs</h1>
            <p className="text-xl leading-relaxed">
              Flexible, high-quality addiction and mental health treatment that fits your life. Receive the care you
              need while maintaining your daily responsibilities and staying connected to your community.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Outpatient Programs</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer various levels of outpatient care to meet your specific needs and schedule requirements.
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
                  <div className="text-sm text-blue-600 font-medium">
                    {program.commitment} • {program.duration}
                  </div>
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

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Outpatient Treatment</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Outpatient treatment offers unique advantages that make recovery accessible and sustainable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Flexible Scheduling Options</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                We offer multiple scheduling options to ensure treatment fits into your busy life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scheduleOptions.map((option, index) => (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Clock className="h-5 w-5 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold">{option.time}</h3>
                    </div>
                    <p className="text-blue-600 font-medium mb-2">{option.hours}</p>
                    <p className="text-gray-600 text-sm">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Treatment Approach</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Evidence-Based Outpatient Care</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our outpatient programs use proven therapeutic approaches including Cognitive Behavioral Therapy
                  (CBT), Dialectical Behavior Therapy (DBT), and Motivational Interviewing. We tailor treatment plans to
                  your specific needs and goals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Individual and group therapy sessions</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Medication management and monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <Home className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Family involvement and support</span>
                  </li>
                  <li className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Flexible scheduling and program options</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=400&width=500&text=Outpatient+Therapy"
                  alt="Outpatient therapy session"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Getting Started with Outpatient Treatment</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Initial Assessment</h3>
                <p className="text-gray-600">
                  Complete a comprehensive assessment to determine the best outpatient program for your needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Schedule Planning</h3>
                <p className="text-gray-600">
                  Work with our team to create a treatment schedule that fits your work, school, and family commitments.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Begin Treatment</h3>
                <p className="text-gray-600">
                  Start your personalized outpatient treatment program with ongoing support and flexibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Outpatient Treatment?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step toward recovery while maintaining your daily life. Our flexible outpatient programs are
            designed to work with your schedule.
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
              <a href="tel:(614) 219-9394">Call: (614) 219-9394</a>
            </Button>
          </div>
          <div className="mt-8 text-sm">
            <p className="text-blue-200">
              Flexible scheduling • Insurance accepted • Evening and weekend appointments available
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
