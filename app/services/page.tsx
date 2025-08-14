import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Stethoscope, Users, Syringe, Briefcase, Home, MessageCircle, Heart, Brain } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: <Stethoscope className="h-8 w-8 text-white" />,
    title: "Mental Health Services",
    description:
      "Comprehensive counseling for individuals, couples, and families dealing with anxiety, depression, trauma, and more.",
    features: ["Individual Therapy", "Cognitive Behavioral Therapy (CBT)", "Family Counseling"],
    link: "/services/mental-health",
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Addiction Treatment",
    description:
      "Evidence-based programs to help individuals overcome substance use disorders and build a foundation for lasting recovery.",
    features: ["Outpatient Programs", "Group Therapy", "Relapse Prevention"],
    link: "/services/addiction-treatment",
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-white" />,
    title: "Individual Counseling",
    description:
      "One-on-one therapy sessions tailored to your specific needs, providing personalized support for mental health and addiction recovery.",
    features: ["Personalized Treatment Plans", "Evidence-Based Approaches", "Flexible Scheduling"],
    link: "/services/individual-counseling",
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Group Counseling",
    description:
      "Structured group therapy sessions that provide peer support and shared learning experiences in a safe, therapeutic environment.",
    features: ["Peer Support", "Skill Building", "Multiple Group Options"],
    link: "/services/group-counseling",
  },
  {
    icon: <Heart className="h-8 w-8 text-white" />,
    title: "Family Counseling",
    description:
      "Comprehensive family therapy services to heal relationships, improve communication, and support recovery for the entire family unit.",
    features: ["Family Systems Therapy", "Communication Skills", "Relationship Repair"],
    link: "/services/family-counseling",
  },
  {
    icon: <Brain className="h-8 w-8 text-white" />,
    title: "Trauma Counseling",
    description:
      "Specialized trauma-informed therapy for individuals dealing with PTSD, childhood trauma, and other traumatic experiences.",
    features: ["EMDR Therapy", "Trauma-Informed Care", "Safety-Focused Approach"],
    link: "/services/trauma-counseling",
  },
  {
    icon: <Syringe className="h-8 w-8 text-white" />,
    title: "Medication-Assisted Treatment",
    description:
      "Medication-Assisted Treatment (MAT) including Suboxone and methadone for opioid addiction, combined with counseling and behavioral therapies.",
    features: ["Physician-led Treatment", "Integrated with Therapy", "Ongoing Support"],
    link: "/services/methadone-treatment",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-white" />,
    title: "Case Management",
    description:
      "Our team helps you navigate resources for housing, employment, and other essential needs to support your recovery journey.",
    features: ["Resource Coordination", "Goal Setting", "Advocacy"],
    link: "/services/case-management",
  },
  {
    icon: <Home className="h-8 w-8 text-white" />,
    title: "Recovery Housing",
    description:
      "Safe, supportive housing environments that promote long-term recovery and independent living with comprehensive support services.",
    features: ["Transitional Housing", "Sober Living Homes", "24/7 Support"],
    link: "/services/recovery-housing",
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-brand-blue sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            We offer a comprehensive range of behavioral health and addiction services designed to meet your unique
            needs. Our integrated approach ensures you receive the holistic care you deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <CardHeader className="bg-brand-blue p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-blue/50 rounded-full p-3">{service.icon}</div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-auto w-full bg-brand-accent-orange hover:bg-brand-accent-orange/90">
                  <Link href={service.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
