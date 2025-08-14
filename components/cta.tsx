import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Cta() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="relative isolate overflow-hidden bg-brand-blue px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Take the First Step?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Your journey to a healthier, happier life begins with a simple conversation. Our caring admissions team is
            here to guide you.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="bg-brand-accent-orange hover:bg-brand-accent-orange/90 text-white">
              <Link href="/contact">Request an Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="link" className="text-white">
              <Link href="#insurance">
                Learn About Insurance <span aria-hidden="true">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
