import { FileText, Scale, Shield, AlertTriangle, Phone, Mail } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Scale className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Terms and conditions for using Autumn Behavioral Health Center
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Agreement to Terms</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              By accessing and using the services provided by Autumn Behavioral Health Center, you agree to be bound by
              these Terms of Service. Please read these terms carefully before using our services.
            </p>
          </div>

          {/* Services */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Autumn Behavioral Health Center provides comprehensive behavioral health and addiction treatment
                services, including:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Detoxification services
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Residential treatment programs
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Outpatient programs
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Mental health services
                  </li>
                </ul>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Methadone treatment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Recovery housing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Case management
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Support services
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Patient Responsibilities */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Responsibilities</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Treatment Compliance</h3>
                <p className="text-gray-600 text-sm">
                  Patients are expected to actively participate in their treatment plan and follow medical advice and
                  recommendations provided by healthcare professionals.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Accurate Information</h3>
                <p className="text-gray-600 text-sm">
                  Provide complete and accurate information about your medical history, current medications, and any
                  changes in your condition.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Respectful Behavior</h3>
                <p className="text-gray-600 text-sm">
                  Treat staff, other patients, and visitors with respect and courtesy. Disruptive or threatening
                  behavior may result in termination of services.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment Obligations</h3>
                <p className="text-gray-600 text-sm">
                  Patients are responsible for payment of services according to their insurance coverage and any
                  applicable co-payments or deductibles.
                </p>
              </div>
            </div>
          </div>

          {/* Limitations */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Limitations and Disclaimers</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Treatment Outcomes</h3>
                <p className="text-yellow-700 text-sm">
                  While we strive to provide the highest quality care, we cannot guarantee specific treatment outcomes.
                  Individual results may vary based on various factors including patient compliance, severity of
                  condition, and individual response to treatment.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Emergency Situations</h3>
                <p className="text-red-700 text-sm">
                  In case of a medical emergency, call 911 immediately. Our services are not intended to replace
                  emergency medical care or crisis intervention services.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Website and Technology</h3>
                <p className="text-blue-700 text-sm">
                  Our website and patient portals are provided "as is" without warranties. We are not responsible for
                  technical issues that may affect access to online services.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy and Confidentiality */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Privacy and Confidentiality</h2>
            </div>
            <p className="text-gray-600 mb-4">
              We are committed to protecting your privacy and maintaining the confidentiality of your health information
              in accordance with HIPAA and other applicable laws. Please refer to our Privacy Policy and HIPAA Notice
              for detailed information about how we handle your personal and health information.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                Privacy Policy →
              </a>
              <a href="/hipaa" className="text-blue-600 hover:text-blue-700 font-medium">
                HIPAA Notice →
              </a>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
              upon posting on our website. Your continued use of our services after any changes constitutes acceptance
              of the new terms.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> January 1, 2024
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Questions About These Terms?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-purple-100 mb-2">Speak with our team</p>
                <p className="text-xl font-bold">1-844-581-LIFE</p>
              </div>

              <div className="text-center">
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-purple-100 mb-2">Send us your questions</p>
                <p className="text-xl font-bold">info@autumnbehavioral.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
