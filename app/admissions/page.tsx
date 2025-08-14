import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, ShieldCheck, FileText, UserCheck, MessageSquare } from "lucide-react"
import { getFAQs } from "@/lib/supabase/faq"

const steps = [
  {
    icon: <Phone className="h-8 w-8 text-brand-accent-orange" />,
    title: "Step 1: Initial Contact",
    description:
      "Reach out to our friendly admissions team by phone or by filling out our confidential online form. We're here to listen and answer your initial questions.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-brand-accent-orange" />,
    title: "Step 2: Insurance Verification",
    description:
      "We'll work with you to verify your insurance benefits. Our team is experienced in navigating coverage to maximize your benefits and minimize out-of-pocket costs.",
  },
  {
    icon: <FileText className="h-8 w-8 text-brand-accent-orange" />,
    title: "Step 3: Clinical Assessment",
    description:
      "You'll speak with one of our clinical professionals for a free, confidential assessment. This helps us understand your unique situation and recommend the best level of care.",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-brand-accent-orange" />,
    title: "Step 4: Admission & Treatment Plan",
    description:
      "Once the appropriate level of care is determined, we'll schedule your admission and begin developing your personalized treatment plan to start you on the path to recovery.",
  },
]

export default async function AdmissionsPage() {
  const faqs = await getFAQs("admissions")

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Start Your Journey Today</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Taking the first step is the most important one. Our admissions process is simple, confidential, and
            designed to get you the help you need as quickly as possible.
          </p>
        </div>
      </div>

      {/* Admissions Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-blue sm:text-4xl">Our Simple 4-Step Admissions Process</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We've streamlined our process to be as stress-free as possible.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div
                key={step.title}
                className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-brand-blue/10 p-4 rounded-full">{step.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-brand-blue mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.length > 0 ? (
              faqs.map((faq) => (
                <div key={faq.id}>
                  <h3 className="font-semibold text-lg text-gray-800">{faq.question}</h3>
                  <p className="text-gray-600 mt-1">{faq.answer}</p>
                </div>
              ))
            ) : (
              // Fallback content when no FAQs are available
              <>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">What should I bring with me?</h3>
                  <p className="text-gray-600 mt-1">
                    We recommend bringing comfortable clothing, personal toiletries, a list of any current medications,
                    and your ID and insurance card. A detailed list will be provided by your admissions coordinator.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Is the admissions process confidential?</h3>
                  <p className="text-gray-600 mt-1">
                    Absolutely. All communication with our admissions team is 100% confidential and compliant with HIPAA
                    regulations. Your privacy is our top priority.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">How long does the assessment take?</h3>
                  <p className="text-gray-600 mt-1">
                    The initial clinical assessment typically takes between 45 to 60 minutes. This allows us to gather
                    the necessary information to create an effective treatment plan for you.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-brand-blue text-white p-10 md:p-16 rounded-lg text-center">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 text-brand-accent-orange" />
            <h2 className="text-3xl font-bold mb-4">We're Here to Help</h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
              Don't wait another day to start your journey toward healing. Our compassionate admissions team is
              available to answer your questions and guide you through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-accent-orange hover:bg-brand-accent-orange/90 text-white">
                <Link href="/contact">
                  <ShieldCheck className="mr-2 h-5 w-5" />
                  Contact Us Securely
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-blue bg-transparent"
              >
                <a href="tel:614-219-9394">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (614) 219-9394
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
