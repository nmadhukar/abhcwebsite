"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

const breadcrumbNameMap: { [key: string]: string } = {
  "/about": "About Us",
  "/services": "Services",
  "/locations": "Locations",
  "/blog": "Blog",
  "/insurance": "Insurance",
  "/contact": "Contact",
  "/admissions": "Admissions",
  "/patient-portal": "Patient Portal",
  "/provider-portal": "Provider Portal",
  "/site-index": "Site Index",
  "/privacy": "Privacy Policy",
  "/hipaa": "HIPAA Notice",
  "/services/mental-health": "Mental Health Services",
  "/services/addiction-treatment": "Addiction Treatment",
  "/services/individual-counseling": "Individual Counseling",
  "/services/group-counseling": "Group Counseling",
  "/services/family-counseling": "Family Counseling",
  "/services/trauma-counseling": "Trauma Counseling",
  "/services/methadone-treatment": "Medication-Assisted Treatment",
  "/services/case-management": "Case Management",
  "/services/recovery-housing": "Recovery Housing",
  "/services/residential": "Residential Treatment",
  "/services/outpatient": "Outpatient Treatment",
  "/services/residential-detox": "Residential Detox",
}

export default function Breadcrumb() {
  const pathname = usePathname()
  if (!pathname || pathname === "/") {
    return null
  }

  const pathSegments = pathname.split("/").filter((segment) => segment)
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/")
    const name = breadcrumbNameMap[href] || segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    const isLast = index === pathSegments.length - 1

    return { href, name, isLast }
  })

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50/75">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 py-3 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-brand-accent-orange">
              Home
            </Link>
          </li>
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href}>
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 flex-shrink-0" />
                <Link
                  href={breadcrumb.href}
                  className={`ml-2 ${
                    breadcrumb.isLast ? "text-gray-700 font-medium" : "hover:text-brand-accent-orange"
                  }`}
                  aria-current={breadcrumb.isLast ? "page" : undefined}
                >
                  {breadcrumb.name}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
