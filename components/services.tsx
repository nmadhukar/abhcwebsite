import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Heart, Pill } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Heart,
    title: "Addiction & Suboxone Treatment",
    description: "Medication-assisted treatment for opioid use disorder in a supportive, clinical setting.",
    link: "/services/addiction-treatment",
  },
  {
    icon: Pill,
    title: "Psychiatry & Medication",
    description: "Expert psychiatric evaluations and ongoing medication management to support your treatment plan.",
    link: "/services/psychiatry",
  },
  {
    title: "Individual & Group Therapy",
    description: "Evidence-based counseling to address a wide range of mental health concerns.",
    link: "/services/therapy",
  },
  {
    title: "Adolescent & Teen Counseling",
    description: "Specialized support for young people navigating the challenges of growing up.",
    link: "/services/adolescent-counseling",
  },
  {
    title: "Family & Couples Therapy",
    description: "Strengthening relationships and improving communication within families and partnerships.",
    link: "/services/family-therapy",
  },
  {
    title: "Case Management",
    description: "Connecting you with community resources to support your overall well-being.",
    link: "/services/case-management",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-blue sm:text-4xl">Comprehensive Care for All Ages</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            From children and adolescents to adults and families, we provide a full spectrum of behavioral health
            services tailored to your unique needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="flex flex-col group hover:border-brand-accent-orange transition-colors"
            >
              <CardHeader>
                <CardTitle className="text-brand-blue group-hover:text-brand-accent-orange transition-colors flex items-center gap-3">
                  {service.icon && <service.icon className="h-6 w-6 text-brand-accent-lightblue" />}
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Link
                  href={service.link}
                  className="font-semibold text-brand-accent-orange hover:text-brand-accent-orange/80 flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
