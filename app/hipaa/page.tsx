import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HIPAA Notice of Privacy Practices | Autumn Behavioral Health Center",
  description: "Review our commitment to protecting your health information under HIPAA regulations.",
}

export default function HipaaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-teal text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">HIPAA Notice of Privacy Practices</h1>
            <p className="text-xl text-blue-100">Your privacy and confidentiality are our highest priorities</p>
            <p className="text-sm text-blue-200 mt-4">Effective Date: January 1, 2025</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Important Notice */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-amber-800 font-semibold">
                  IMPORTANT NOTICE: This notice describes how medical information about you may be used and disclosed
                  and how you can get access to this information. Please review it carefully.
                </p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose lg:prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Autumn Behavioral Health Center is committed to protecting your health information. We are required by
              federal and state law to maintain the privacy and security of your protected health information (PHI) and
              to provide you with this notice of our legal duties and privacy practices.
            </p>

            {/* Our Commitment */}
            <div className="bg-blue-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">Our Commitment to You</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">We Will:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Maintain the privacy of your health information</li>
                    <li>• Provide you with notice of our privacy practices</li>
                    <li>• Follow the terms of this notice</li>
                    <li>• Notify you of any breaches of your information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">We Will Not:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Use or share your information without your permission</li>
                    <li>• Sell your health information</li>
                    <li>• Use your information for marketing purposes</li>
                    <li>• Share information with unauthorized parties</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">How We Use and Share Your Health Information</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-brand-blue mb-3">Treatment</h3>
                <p className="text-gray-700 text-sm">
                  We use your health information to provide, coordinate, or manage your healthcare and related services.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-brand-blue mb-3">Payment</h3>
                <p className="text-gray-700 text-sm">
                  We use your information to obtain payment for healthcare services provided to you.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-brand-blue mb-3">Operations</h3>
                <p className="text-gray-700 text-sm">
                  We use your information to support our business activities and improve quality of care.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Rights Regarding Your Health Information</h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Right to Access</h3>
                  <p className="text-gray-700">You can request to see or get copies of your health information.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Right to Amend</h3>
                  <p className="text-gray-700">You can request corrections to your health information.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Right to Restrict</h3>
                  <p className="text-gray-700">You can request limits on how we use or share your information.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Right to Confidential Communications</h3>
                  <p className="text-gray-700">
                    You can request to receive communications in a specific way or location.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions or Concerns?</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this notice or need to exercise your rights, please contact our Privacy
                Officer:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Privacy Officer</h3>
                  <p className="text-gray-700">
                    Autumn Behavioral Health Center
                    <br />
                    123 Wellness Way
                    <br />
                    Columbus, OH 43215
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Contact Information</h3>
                  <p className="text-gray-700">
                    Phone:{" "}
                    <a href="tel:614-219-9394" className="text-brand-blue hover:underline">
                      (614) 219-9394
                    </a>
                    <br />
                    Email:{" "}
                    <a href="mailto:privacy@autumntreatment.com" className="text-brand-blue hover:underline">
                      privacy@autumntreatment.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Complaints */}
            <div className="mt-8 p-6 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">File a Complaint</h3>
              <p className="text-gray-700 text-sm">
                You may file a complaint with us or with the U.S. Department of Health and Human Services if you believe
                your privacy rights have been violated. We will not retaliate against you for filing a complaint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
