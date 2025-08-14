import type { Metadata } from "next"
import { Shield, Lock, Eye, FileText, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Autumn Behavioral Health Center",
  description: "Learn how Autumn Behavioral Health Center protects your personal information and privacy rights.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="mx-auto h-16 w-16 mb-6" />
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100">Your privacy and confidentiality are fundamental to our care</p>
            <p className="text-sm text-blue-200 mt-4">Last updated: January 13, 2025</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-start space-x-4">
              <FileText className="h-8 w-8 text-brand-blue mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Your Privacy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Autumn Behavioral Health Center ("ABHC," "we," "us," or "our") is committed to protecting your privacy
                  and maintaining the confidentiality of your personal and health information. This Privacy Policy
                  explains how we collect, use, protect, and disclose information when you visit our website at
                  autumntreatment.com or use our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As a healthcare provider, we are bound by federal and state privacy laws, including HIPAA (Health
                  Insurance Portability and Accountability Act), which governs how we handle your protected health
                  information.
                </p>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-start space-x-4">
              <Eye className="h-8 w-8 text-brand-blue mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Contact information (name, address, phone number, email)
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Insurance information and payment details
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Emergency contact information
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Demographic information (age, gender, etc.)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Health Information</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Medical history and current health conditions
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Treatment records and progress notes
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Medication information and prescriptions
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Assessment and evaluation results
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Website Usage Information</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        IP address and browser information
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Pages visited and time spent on our website
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Cookies and similar tracking technologies
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Treatment & Care</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Provide behavioral health services</li>
                  <li>• Coordinate care with other providers</li>
                  <li>• Monitor treatment progress</li>
                  <li>• Ensure continuity of care</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Administrative</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Process insurance claims</li>
                  <li>• Schedule appointments</li>
                  <li>• Maintain medical records</li>
                  <li>• Quality improvement activities</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Communication</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Appointment reminders</li>
                  <li>• Treatment updates</li>
                  <li>• Important health information</li>
                  <li>• Service announcements</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Legal & Safety</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Comply with legal requirements</li>
                  <li>• Protect patient safety</li>
                  <li>• Prevent fraud and abuse</li>
                  <li>• Public health reporting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">When We Share Information</h2>
            <div className="bg-blue-50 border-l-4 border-brand-blue p-4 mb-6">
              <p className="text-gray-800 font-medium">
                We do not sell, rent, or trade your personal information. We only share information as permitted by law
                and as necessary for your care.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">With Your Consent</h4>
                  <p className="text-gray-700 text-sm">When you provide written authorization</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">For Treatment</h4>
                  <p className="text-gray-700 text-sm">With other healthcare providers involved in your care</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">For Payment</h4>
                  <p className="text-gray-700 text-sm">With insurance companies for claims processing</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">Legal Requirements</h4>
                  <p className="text-gray-700 text-sm">
                    When required by law, court order, or public health authorities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-start space-x-4">
              <Lock className="h-8 w-8 text-brand-blue mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security & Protection</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We implement comprehensive security measures to protect your information from unauthorized access,
                  use, or disclosure. Our security practices include:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technical Safeguards</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Encrypted data transmission</li>
                      <li>• Secure servers and databases</li>
                      <li>• Access controls and authentication</li>
                      <li>• Regular security updates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Administrative Safeguards</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Staff training on privacy policies</li>
                      <li>• Background checks for employees</li>
                      <li>• Regular security assessments</li>
                      <li>• Incident response procedures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-brand-blue pl-4">
                <h4 className="font-semibold text-gray-900">Access Your Records</h4>
                <p className="text-gray-700 text-sm">
                  Request copies of your medical records and treatment information
                </p>
              </div>
              <div className="border-l-4 border-brand-blue pl-4">
                <h4 className="font-semibold text-gray-900">Request Amendments</h4>
                <p className="text-gray-700 text-sm">Ask us to correct information you believe is inaccurate</p>
              </div>
              <div className="border-l-4 border-brand-blue pl-4">
                <h4 className="font-semibold text-gray-900">Restrict Communications</h4>
                <p className="text-gray-700 text-sm">Request limits on how we use or share your information</p>
              </div>
              <div className="border-l-4 border-brand-blue pl-4">
                <h4 className="font-semibold text-gray-900">Confidential Communications</h4>
                <p className="text-gray-700 text-sm">Request that we contact you in a specific way or location</p>
              </div>
              <div className="border-l-4 border-brand-blue pl-4">
                <h4 className="font-semibold text-gray-900">File Complaints</h4>
                <p className="text-gray-700 text-sm">Report concerns about our privacy practices without retaliation</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-brand-blue text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Questions About Your Privacy?</h2>
            <p className="text-blue-100 mb-6">
              If you have questions about this Privacy Policy or want to exercise your privacy rights, please contact
              our Privacy Officer:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-200" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:614-219-9394" className="text-blue-200 hover:text-white">
                    (614) 219-9394
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-200" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:clinic@autumntreatment.com" className="text-blue-200 hover:text-white">
                    clinic@autumntreatment.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-blue-400">
              <p className="text-sm text-blue-200">
                You may also file a complaint with the U.S. Department of Health and Human Services Office for Civil
                Rights if you believe your privacy rights have been violated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
