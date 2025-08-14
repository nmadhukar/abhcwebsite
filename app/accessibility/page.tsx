import { Eye, Ear, Hand, Monitor, Phone, Mail, CheckCircle, Users } from "lucide-react"

export default function AccessibilityStatement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Eye className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessibility Statement</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Our commitment to making healthcare accessible to everyone
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Our Commitment */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Accessibility</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Autumn Behavioral Health Center is committed to ensuring that our website and services are accessible to
              people with disabilities. We strive to provide equal access to information and functionality for all
              users, regardless of their abilities or disabilities.
            </p>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <p className="text-indigo-800 font-medium">
                We believe that everyone deserves access to quality healthcare information and services, and we are
                continuously working to improve the accessibility of our digital platforms.
              </p>
            </div>
          </div>

          {/* Accessibility Features */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Accessibility Features</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                    <Eye className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Visual Accessibility</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• High contrast color schemes</li>
                      <li>• Scalable text and images</li>
                      <li>• Alternative text for images</li>
                      <li>• Clear visual hierarchy</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                    <Ear className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Audio Accessibility</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Screen reader compatibility</li>
                      <li>• Audio descriptions when available</li>
                      <li>• Captions for video content</li>
                      <li>• Text alternatives for audio</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4 mt-1">
                    <Hand className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Motor Accessibility</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Keyboard navigation support</li>
                      <li>• Large clickable areas</li>
                      <li>• No time-sensitive actions</li>
                      <li>• Voice control compatibility</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-lg mr-4 mt-1">
                    <Monitor className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Cognitive Accessibility</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Clear and simple language</li>
                      <li>• Consistent navigation</li>
                      <li>• Error prevention and correction</li>
                      <li>• Logical content structure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Standards Compliance */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Standards and Guidelines</h2>
            <p className="text-gray-600 mb-6">
              Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. We
              also follow best practices from:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">WCAG 2.1</h3>
                <p className="text-gray-600 text-sm">Level AA compliance for web accessibility</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Section 508</h3>
                <p className="text-gray-600 text-sm">Federal accessibility requirements</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">ADA</h3>
                <p className="text-gray-600 text-sm">Americans with Disabilities Act compliance</p>
              </div>
            </div>
          </div>

          {/* Ongoing Efforts */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ongoing Accessibility Efforts</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Regular Audits</h3>
                  <p className="text-gray-600 text-sm">
                    We conduct regular accessibility audits and testing with assistive technologies to identify and
                    address potential barriers.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Staff Training</h3>
                  <p className="text-gray-600 text-sm">
                    Our team receives ongoing training on accessibility best practices and inclusive design principles.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">User Feedback</h3>
                  <p className="text-gray-600 text-sm">
                    We actively seek feedback from users with disabilities to improve our services and address
                    accessibility concerns.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Technology Updates</h3>
                  <p className="text-gray-600 text-sm">
                    We continuously update our technology and platforms to incorporate the latest accessibility features
                    and improvements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Assistance and Feedback */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Assistance or Have Feedback?</h2>
            <p className="text-gray-600 mb-6">
              If you encounter any accessibility barriers on our website or need assistance accessing our services,
              please don't hesitate to contact us. We are committed to providing alternative methods of access and will
              work with you to ensure you can access the information and services you need.
            </p>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-3">Alternative Access Methods</h3>
              <ul className="text-indigo-700 space-y-2 text-sm">
                <li>• Phone consultations and information</li>
                <li>• In-person assistance at our facilities</li>
                <li>• Alternative document formats</li>
                <li>• Interpreter services when needed</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Our Accessibility Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-indigo-100 mb-2">Speak with our accessibility coordinator</p>
                <p className="text-xl font-bold">1-844-581-LIFE</p>
              </div>

              <div className="text-center">
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-indigo-100 mb-2">Send us your accessibility feedback</p>
                <p className="text-xl font-bold">accessibility@autumnbehavioral.com</p>
              </div>
            </div>

            <div className="text-center mt-8 pt-8 border-t border-white/20">
              <p className="text-indigo-100 text-sm">
                This accessibility statement was last updated on January 1, 2024. We review and update this statement
                regularly to reflect our ongoing accessibility improvements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
