import { Button } from "@/components/ui/button"
import { CheckCircle, Phone } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="py-24 sm:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-brand-blue sm:text-6xl">
              Hope, Healing, and Health for All Ages
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Autumn Behavioral Health Center offers compassionate, expert mental health and addiction services across
              Ohio. Your journey to a brighter tomorrow starts here.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-brand-accent-orange hover:bg-brand-accent-orange/90">
                <Link href="/contact">Request an Appointment</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-brand-blue text-brand-blue hover:bg-brand-blue/5 bg-transparent"
              >
                <a href="tel:1-800-555-AUTUMN">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us 24/7
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-16 flow-root">
            <div className="max-w-4xl mx-auto">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-6 text-center sm:grid-cols-3">
                <div className="flex flex-col items-center gap-y-2">
                  <dt className="text-gray-600 flex items-center gap-x-2">
                    <CheckCircle className="h-5 w-5 text-brand-green" />
                    All Ohio Medicaid Accepted
                  </dt>
                </div>
                <div className="flex flex-col items-center gap-y-2">
                  <dt className="text-gray-600 flex items-center gap-x-2">
                    <CheckCircle className="h-5 w-5 text-brand-green" />
                    Care for All Ages
                  </dt>
                </div>
                <div className="flex flex-col items-center gap-y-2">
                  <dt className="text-gray-600 flex items-center gap-x-2">
                    <CheckCircle className="h-5 w-5 text-brand-green" />
                    Same-Day Appointments
                  </dt>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
