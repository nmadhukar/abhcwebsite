import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, ShieldCheck } from "lucide-react"

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

export default function InsurancePage() {
  return (
    <div className="bg-white">
      <main>
        <div className="bg-brand-blue text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Navigating Your Insurance</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
              We work with a wide range of insurance providers to make our services accessible.
            </p>
          </div>
        </div>

        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-20 bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg border-l-8 border-brand-accent-orange">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-brand-blue sm:text-4xl">
                  We Proudly Accept All Ohio Medicaid Plans
                </h2>
                <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto">
                  As a committed partner in Ohio's community health, we welcome all managed care plans under the Ohio
                  Medicaid program.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {medicaidPlans.map((provider) => (
                  <Card
                    key={provider.name}
                    className="flex items-center justify-center p-6 h-32 bg-white hover:shadow-xl transition-shadow duration-300"
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

            <div className="mb-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold text-brand-blue">PPO & Private Insurance Plans</h2>
                <p className="mt-3 text-lg text-gray-600">
                  We also partner with many major commercial and private insurance providers.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                {privatePlans.map((provider) => (
                  <Card
                    key={provider.name}
                    className="flex items-center justify-center p-6 h-32 bg-white border hover:shadow-lg transition-shadow"
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

            <div className="bg-brand-blue text-white p-10 md:p-16 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Questions About Your Coverage?</h2>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
                Our dedicated admissions team is here to help you understand your benefits and verify your coverage
                quickly and confidentially.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-brand-accent-orange hover:bg-brand-accent-orange/90 text-white">
                  <Link href="/contact">
                    <ShieldCheck className="mr-2 h-5 w-5" />
                    Verify Your Insurance Online
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-brand-blue bg-transparent"
                >
                  <a href="tel:1-800-555-AUTUMN">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Our Admissions Team
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
