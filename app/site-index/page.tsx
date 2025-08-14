import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Site Index - Autumn Behavioral Health Center",
  description: "A complete index of all pages on the Autumn Behavioral Health Center website for easy navigation.",
  robots: {
    index: true,
    follow: true,
  },
}

const sections = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Management Team", href: "/management-team" },
      { name: "Our Services", href: "/services" },
      { name: "Our Locations", href: "/locations" },
      { name: "Our Blog", href: "/blog" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Patient Resources",
    links: [
      { name: "Admissions", href: "/admissions" },
      { name: "Insurance Information", href: "/insurance" },
      { name: "Patient Portal", href: "/patient-portal" },
      { name: "Provider Portal", href: "/provider-portal" },
      { name: "Probation Portal", href: "/probation-portal" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { name: "Mental Health Services", href: "/services/mental-health" },
      { name: "Addiction Treatment", href: "/services/addiction-treatment" },
      { name: "Outpatient Programs", href: "/services/outpatient" },
      { name: "Residential Treatment", href: "/services/residential" },
      { name: "Residential Detox", href: "/services/residential-detox" },
      { name: "Methadone Treatment (OTP)", href: "/services/methadone-treatment" },
      { name: "Case Management", href: "/services/case-management" },
      { name: "Recovery Housing", href: "/services/recovery-housing" },
    ],
  },
  {
    title: "Our Locations",
    links: [
      { name: "Cadiz", href: "/locations/cadiz" },
      { name: "Circleville", href: "/locations/circleville" },
      { name: "Cleveland", href: "/locations/cleveland" },
      { name: "Clyde", href: "/locations/clyde" },
      { name: "Columbus", href: "/locations/columbus" },
      { name: "Mansfield", href: "/locations/mansfield" },
      { name: "Marion", href: "/locations/marion" },
      { name: "Reynoldsburg", href: "/locations/reynoldsburg" },
      { name: "St. Clairsville", href: "/locations/st-clairsville" },
      { name: "Toledo", href: "/locations/toledo" },
      { name: "Toledo East", href: "/locations/toledo-east" },
      { name: "Toledo West", href: "/locations/toledo-west" },
      { name: "Toledo West HealSpace", href: "/locations/toledo-west-healspace" },
      { name: "Washington Court House", href: "/locations/washington-court-house" },
      { name: "Wilmington", href: "/locations/wilmington" },
    ],
  },
  {
    title: "Legal Information",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "HIPAA Notice", href: "/hipaa" },
      { name: "Accessibility Statement", href: "/accessibility" },
    ],
  },
]

export default function SiteIndexPage() {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Site Index</h1>
          <p className="mt-4 text-lg text-gray-600">
            Find quick links to all pages on the Autumn Behavioral Health Center website.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-brand-blue mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-brand-accent-orange hover:underline transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Need help finding something?{" "}
            <Link href="/contact" className="text-brand-blue hover:underline">
              Contact us
            </Link>{" "}
            at{" "}
            <a href="tel:614-219-9394" className="text-brand-blue hover:underline">
              (614) 219-9394
            </a>{" "}
            or{" "}
            <a href="mailto:clinic@autumntreatment.com" className="text-brand-blue hover:underline">
              clinic@autumntreatment.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
