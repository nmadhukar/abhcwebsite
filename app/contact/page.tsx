import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react"
import { submitContactForm } from "./actions"

export const metadata: Metadata = {
  title: "Contact Us | Autumn Behavioral Health Center",
  description:
    "Get in touch with Autumn Behavioral Health Center. Find our locations, contact information, and a secure contact form to start your journey to recovery.",
}

export default function ContactPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-brand-blue to-brand-blue/80">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Contact Us</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            We're here to help. Reach out to us for admissions, questions, or support. Your path to healing starts with
            a simple conversation.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Send Us a Secure Message</h2>
              <p className="text-gray-600 mb-8">
                Use the form below to send us a confidential message. Our admissions team will respond promptly. Please
                do not include sensitive health information in this form.
              </p>
              <form action={submitContactForm} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input name="firstName" placeholder="First Name" required />
                  <Input name="lastName" placeholder="Last Name" required />
                </div>
                <Input name="email" type="email" placeholder="Email Address" required />
                <Input name="phone" type="tel" placeholder="Phone Number" />
                <Textarea name="message" placeholder="Your message..." rows={5} required />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-brand-accent-orange hover:bg-brand-accent-orange/90"
                >
                  Submit Securely
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Phone className="h-6 w-6 text-brand-green" />
                      <span>Admissions & Support</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-gray-800">(614) 219-9394</p>
                    <p className="text-gray-600">Available 24/7. Your call is confidential.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Mail className="h-6 w-6 text-brand-green" />
                      <span>Email Us</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:clinic@autumntreatment.com" className="text-lg text-brand-blue hover:underline">
                      clinic@autumntreatment.com
                    </a>
                    <p className="text-gray-600">For general inquiries and admissions.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-brand-green" />
                      <span>Primary Locations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-800">Cadiz Office</p>
                      <p className="text-gray-600">239 E Warren St, Cadiz, OH 43907</p>
                      <p className="text-sm text-gray-500">(740) 942-2891</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Reynoldsburg Office</p>
                      <p className="text-gray-600">1612 Lancaster Ave, Reynoldsburg, OH 43068</p>
                      <p className="text-sm text-gray-500">(740) 300-1380</p>
                    </div>
                    <p className="text-sm text-brand-blue">
                      <a href="/locations" className="hover:underline">
                        View all 7 Ohio locations →
                      </a>
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-brand-green" />
                      <span>Hours & Emergency</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-800 font-semibold">Admissions: 24/7</p>
                    <p className="text-gray-600">Office Hours: Monday - Friday, 8:00 AM - 5:00 PM</p>
                    <p className="text-red-600 font-semibold mt-2">Emergency: Call 911</p>
                    <p className="text-gray-600 text-sm">Crisis Line: 988 (Suicide & Crisis Lifeline)</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Shield className="h-6 w-6 text-brand-green" />
                      <span>Insurance & Verification</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We accept most major insurance plans including Medicaid and Medicare.
                    </p>
                    <p className="text-sm text-brand-blue mt-2">
                      Call (614) 219-9394 for insurance verification and benefits check.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
