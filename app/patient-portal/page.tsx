import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Shield, Clock, FileText, MessageCircle, Calendar, Phone, Mail } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Patient Portal | Autumn Behavioral Health Center",
  description: "Securely access your health records, manage appointments, and communicate with your care team.",
  keywords: [
    "patient portal Ohio",
    "health records access",
    "secure patient login",
    "medical records online",
    "appointment scheduling",
    "patient communication",
  ],
  openGraph: {
    title: "Patient Portal - Secure Access to Your Health Information",
    description: "Access your health records and communicate with your care team through our secure patient portal.",
    url: "https://autumnbehavioralhealthcenter.com/patient-portal",
  },
  alternates: {
    canonical: "https://autumnbehavioralhealthcenter.com/patient-portal",
  },
}

export default function PatientPortalPage() {
  const portalFeatures = [
    {
      icon: FileText,
      title: "Medical Records",
      description: "View your treatment history, lab results, and medical documents securely online.",
    },
    {
      icon: Calendar,
      title: "Appointment Management",
      description: "Schedule, reschedule, or cancel appointments with your healthcare providers.",
    },
    {
      icon: MessageCircle,
      title: "Secure Messaging",
      description: "Communicate directly with your care team through encrypted messaging.",
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Your health information is protected with the highest security standards.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Patient Portal</h1>
            <p className="text-xl leading-relaxed mb-8">
              Access your health information, communicate with your care team, and manage your appointments through our
              secure patient portal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-green hover:bg-green-600 text-white">
                <a href="https://autumnclients.atcemr.com/login" target="_blank" rel="noopener noreferrer">
                  <Shield className="h-5 w-5 mr-2" />
                  Access Patient Portal
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 bg-transparent">
                <Phone className="h-5 w-5 mr-2" />
                Need Help? Call: 1-800-555-AUTUMN
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Secure Patient Portal Access</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Our patient portal provides 24/7 access to your health information in a secure, HIPAA-compliant
                environment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Card className="shadow-lg">
                  <CardContent className="p-0">
                    <Image
                      src="https://sjc.microlink.io/3VEt9fxpflN4JTkEYcStq_MQtAGxg6fmxx3m_ycAPl6ZVEapYCmD3czFh1x3YlQUvh7HTwiNssF_aZdpMdIOkA.jpeg"
                      alt="Autumn Behavioral Health Center Patient Portal Login"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Easy Access to Your Care</h3>
                  <p className="text-gray-600 mb-6">
                    Log in to your secure patient portal to access your health records, communicate with your care team,
                    and manage your treatment journey.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Secure Login</h4>
                      <p className="text-sm text-gray-600">Protected by advanced encryption and security measures</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">24/7 Access</h4>
                      <p className="text-sm text-gray-600">Available anytime, anywhere from any device</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Complete Records</h4>
                      <p className="text-sm text-gray-600">Access your full treatment history and documents</p>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full">
                  <a href="https://autumnclients.atcemr.com/login" target="_blank" rel="noopener noreferrer">
                    <Shield className="h-5 w-5 mr-2" />
                    Login to Patient Portal
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Portal Features</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Everything you need to manage your healthcare in one secure location.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>New Patients</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    If you're a new patient, you'll receive your portal login credentials after your first appointment.
                    Our staff will help you set up your account and show you how to use the portal features.
                  </p>
                  <Button asChild className="w-full">
                    <a href="https://autumnintake.atcemr.com/" target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4 mr-2" />
                      Complete New Patient Intake
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Existing Patients</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    If you're an existing patient and need help accessing your portal account, please contact our
                    support team. We can help reset your password or provide technical assistance.
                  </p>
                  <div className="space-y-2">
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a href="tel:1-800-555-AUTUMN">
                        <Phone className="h-4 w-4 mr-2" />
                        Call: 1-800-555-AUTUMN
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a href="mailto:clinic@autumnbehavioralhealthcenter.com">
                        <Mail className="h-4 w-4 mr-2" />
                        Email Support
                      </a>
                    </Button>
                  </div>
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
            <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
            <p className="text-lg mb-8">
              Our support team is here to help you access and use your patient portal. Contact us if you have any
              questions or technical issues.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="h-12 w-12 mb-4 text-blue-200" />
                <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
                <p className="text-blue-200">1-800-555-AUTUMN</p>
                <p className="text-sm text-blue-200">Monday - Friday, 8 AM - 5 PM</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-12 w-12 mb-4 text-blue-200" />
                <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                <p className="text-blue-200">clinic@autumnbehavioralhealthcenter.com</p>
                <p className="text-sm text-blue-200">Response within 24 hours</p>
              </div>
              <div className="flex flex-col items-center">
                <MessageCircle className="h-12 w-12 mb-4 text-blue-200" />
                <h3 className="text-lg font-semibold mb-2">In-Person Help</h3>
                <p className="text-blue-200">Visit any location</p>
                <p className="text-sm text-blue-200">Staff available to assist</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Privacy & Security</h3>
              <p className="text-blue-200">
                Your patient portal is HIPAA compliant and uses advanced encryption to protect your health information.
                Never share your login credentials with others.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
