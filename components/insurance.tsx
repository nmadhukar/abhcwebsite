import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const medicaidPlans = [
  { name: "Ohio Medicaid", logo: "/ins-ohiomedicaid.png" },
  { name: "CareSource", logo: "/ins-caresource.png" },
  { name: "Buckeye Health Plan", logo: "/ins-buckeye.png" },
  { name: "Molina Healthcare", logo: "/ins-molina.jpeg" },
  { name: "UnitedHealthcare Community Plan", logo: "/ins-uhc.png" },
  { name: "AmeriHealth Caritas", logo: "/ins-caritas.png" },
]

const privatePlans = [
  { name: "Anthem Blue Cross and Blue Shield", logo: "/ins-anthem-ppo.png" },
  { name: "UnitedHealthcare PPO", logo: "/ins-united-ppo.png" },
  { name: "Aetna PPO", logo: "/ins-aetna-ppo.png" },
  { name: "Medical Mutual PPO", logo: "/ins-medmutual-ppo.png" },
  { name: "Humana", logo: "/ins-humana.png" },
  { name: "Medicare", logo: "/ins-medicare.png" },
]

export default function Insurance() {
  return (
    <section className="py-20 bg-gray-50" id="insurance">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-blue sm:text-4xl">Insurance Accepted</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Your path to wellness should be accessible. We accept a wide variety of insurance plans to ensure you get
            the care you need.
          </p>
        </div>

        <div className="mb-16 bg-white p-8 rounded-lg shadow-md border-l-4 border-brand-accent-orange">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-brand-blue sm:text-3xl">
              We Proudly Accept All Ohio Medicaid Plans
            </h3>
            <p className="mt-3 text-gray-600 text-lg">
              We are a dedicated partner in community health, accepting all managed care plans under Ohio Medicaid.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {medicaidPlans.map((provider) => (
              <Card
                key={provider.name}
                className="flex items-center justify-center p-6 h-28 hover:shadow-lg transition-shadow"
              >
                <img
                  src={provider.logo || "/placeholder.svg"}
                  alt={`${provider.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-brand-blue">PPO & Private Insurance Plans</h3>
            <p className="mt-2 text-gray-600">
              We also partner with many major commercial and private insurance providers.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {privatePlans.map((provider) => (
              <Card
                key={provider.name}
                className="flex items-center justify-center p-6 h-28 hover:shadow-lg transition-shadow"
              >
                <img
                  src={provider.logo || "/placeholder.svg"}
                  alt={`${provider.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center bg-white border border-gray-200 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-brand-blue">Questions About Your Coverage?</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our admissions team is here to help you navigate your benefits. Don't hesitate to reach out.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-accent-orange hover:bg-brand-accent-orange/90">
              <Link href="/contact">Verify Your Insurance Online</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue/5 bg-transparent"
            >
              <a href="tel:1-800-555-AUTUMN">Call (800) 555-AUTUMN</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
