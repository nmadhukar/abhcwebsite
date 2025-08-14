import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Shield, Users, FileText, BarChart3, Calendar, Phone, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Probation Portal - Professional Access for Probation Officers - Autumn Behavioral Health",
  description:
    "Secure portal access for probation officers to monitor client progress, view treatment compliance, and access reports.",
  keywords: [
    "probation portal Ohio",
    "probation officer access",
    "client monitoring",
    "treatment compliance",
    "probation reports",
    "secure professional portal",
  ],
  openGraph: {
    title: "Probation Portal - Professional Access for Probation Officers",
    description: "Secure portal for probation officers to monitor client progress and treatment compliance.",
    url: "https://autumntreatment.com/probation-portal",
  },
  alternates: {
    canonical: "https://autumntreatment.com/probation-portal",
  },
}

export default function ProbationPortalPage() {
  const portalFeatures = [
    {
      icon: Users,
      title: "Client Monitoring",
      description: "Track client attendance, progress, and treatment compliance in real-time.",
    },
    {
      icon: BarChart3,
      title: "Progress Reports",
      description: "Access detailed reports on client treatment progress and outcomes.",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "View treatment plans, assessments, and compliance documentation.",
    },
    {
      icon: Calendar,
      title: "Appointment Tracking",
      description: "Monitor client appointment attendance and scheduling.",
    },
    {
      icon: Shield,
      title: "Secure Access",
      description: "HIPAA-compliant portal with role-based access controls.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Probation Portal</h1>
            <p className="text-xl leading-relaxed mb-8">
              Secure professional portal for probation officers to monitor client treatment progress, compliance, and
              outcomes through our integrated system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-green hover:bg-green-600 text-white">
                <a href="https://talbotprobation.atcemr.com/login" target="_blank" rel="noopener noreferrer">
                  <Shield className="h-5 w-5 mr-2" />
                  Access Probation Portal
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 bg-transparent">
                <Phone className="h-5 w-5 mr-2" />
                Support: 1-833-762-1013
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Professional Portal Features</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Comprehensive tools for monitoring client progress and ensuring treatment compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {portalFeatures.map((feature, index) => (
                <Card key={index} className="text-center h-full">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a href="https://talbotprobation.atcemr.com/login" target="_blank" rel="noopener noreferrer">
                  <Shield className="h-5 w-5 mr-2" />
                  Login to Probation Portal
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Access Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Portal Access Information</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 mr-2 text-blue-600" />
                    For Probation Officers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Account Setup</h4>
                      <p className="text-gray-600 text-sm">
                        New probation officers need to contact our administrative team to set up portal access. We'll
                        provide login credentials and training on system features.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Client Assignment</h4>
                      <p className="text-gray-600 text-sm">
                        Once your account is active, you'll be able to view assigned clients and their treatment
                        progress through the secure portal interface.
                      </p>
                    </div>
                    <Button asChild className="w-full">
                      <a href="mailto:clinic@autumntreatment.com">
                        <Mail className="h-4 w-4 mr-2" />
                        Request Portal Access
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 mr-2 text-blue-600" />
                    Security & Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">HIPAA Compliance</h4>
                      <p className="text-gray-600 text-sm">
                        Our portal meets all HIPAA requirements for protected health information. All access is logged
                        and monitored for security compliance.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Role-Based Access</h4>
                      <p className="text-gray-600 text-sm">
                        Probation officers only have access to information for their assigned clients, ensuring privacy
                        and appropriate information sharing.
                      </p>
                    </div>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a href="tel:1-833-762-1013">
                        <Phone className="h-4 w-4 mr-2" />
                        Technical Support
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Reporting</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Access detailed reports and real-time updates on client treatment progress and compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
                  <p className="text-gray-600 text-sm">
                    Monitor client attendance, participation, and treatment milestones in real-time.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Compliance Reports</h3>
                  <p className="text-gray-600 text-sm">
                    Generate detailed compliance reports for court proceedings and case management.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Appointment History</h3>
                  <p className="text-gray-600 text-sm">
                    View complete appointment history, attendance records, and scheduling information.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Professional Support</h2>
            <p className="text-lg mb-8">
              Our team provides dedicated support for probation officers using our portal system. We're here to help
              with technical issues, training, and system navigation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="h-12 w-12 mb-4 text-blue-200" />
                <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
                <p className="text-blue-200">1-833-762-1013</p>
                <p className="text-sm text-blue-200">Monday - Friday, 8 AM - 5 PM</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-12 w-12 mb-4 text-blue-200" />
                <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                <p className="text-blue-200">clinic@autumntreatment.com</p>
                <p className="text-sm text-blue-200">Response within 24 hours</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-12 w-12 mb-4 text-blue-200" />
                <h3 className="text-lg font-semibold mb-2">Training</h3>
                <p className="text-blue-200">Portal training available</p>
                <p className="text-sm text-blue-200">Contact us to schedule</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Partnership Commitment</h3>
              <p className="text-blue-200">
                We're committed to supporting probation officers in their important work. Our portal is designed to
                streamline communication and provide the information you need to effectively monitor client progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
