import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, User } from "lucide-react"

export default function Header() {
  return (
    <>
      <div className="bg-brand-blue text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:6142199394" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-medium">(614) 219-9394</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/patient-portal"
                className="flex items-center gap-2 hover:text-blue-200 transition-colors font-medium"
              >
                <User className="h-4 w-4" />
                <span>Patient Portal</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center">
                <Image
                  src="/autumn-behavioral-logo.png"
                  alt="Autumn Behavioral Health Center"
                  width={240}
                  height={60}
                  className="h-14 w-auto"
                  priority
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                    e.currentTarget.nextElementSibling?.classList.remove("hidden")
                  }}
                />
                <div className="hidden">
                  <span className="text-2xl font-bold text-brand-blue">ABHC</span>
                  <span className="text-lg text-gray-600 ml-1">Autumn Behavioral Health Center</span>
                </div>
              </div>
            </Link>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-6 md:grid-cols-2">
                      <ListItem href="/services/mental-health" title="Mental Health Services">
                        Comprehensive psychiatric care and therapy for depression, anxiety, and other conditions.
                      </ListItem>
                      <ListItem href="/services/addiction-treatment" title="Addiction Treatment">
                        Evidence-based programs for substance use disorders and recovery support.
                      </ListItem>
                      <ListItem href="/services/individual-counseling" title="Individual Counseling">
                        One-on-one therapy sessions tailored to your specific mental health needs.
                      </ListItem>
                      <ListItem href="/services/group-counseling" title="Group Counseling">
                        Peer support and shared learning in structured therapeutic group settings.
                      </ListItem>
                      <ListItem href="/services/family-counseling" title="Family Counseling">
                        Family therapy to heal relationships and support recovery for everyone.
                      </ListItem>
                      <ListItem href="/services/trauma-counseling" title="Trauma Counseling">
                        Specialized trauma-informed therapy for PTSD and traumatic experiences.
                      </ListItem>
                      <ListItem href="/services/methadone-treatment" title="Medication-Assisted Treatment">
                        MAT programs including Suboxone and methadone for opioid addiction.
                      </ListItem>
                      <ListItem href="/services/case-management" title="Case Management">
                        Comprehensive care coordination and resource navigation support.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/housing" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Housing</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/locations" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Locations</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/insurance" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Insurance</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/admissions" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Admissions</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-sm">
                  <nav className="flex flex-col p-6 space-y-4">
                    <div className="border-b pb-4 mb-4">
                      <a href="tel:6142199394" className="flex items-center gap-2 text-brand-blue font-medium mb-2">
                        <Phone className="h-4 w-4" />
                        <span>(614) 219-9394</span>
                      </a>
                      <Link href="/patient-portal" className="flex items-center gap-2 text-brand-blue font-medium">
                        <User className="h-4 w-4" />
                        <span>Patient Portal</span>
                      </Link>
                    </div>

                    <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-brand-blue">
                      About Us
                    </Link>
                    <div className="space-y-2">
                      <Link href="/services" className="text-lg font-medium text-gray-700 hover:text-brand-blue">
                        Services
                      </Link>
                      <div className="pl-4 space-y-2">
                        <Link
                          href="/services/mental-health"
                          className="text-sm text-gray-600 hover:text-brand-blue block"
                        >
                          Mental Health Services
                        </Link>
                        <Link
                          href="/services/addiction-treatment"
                          className="text-sm text-gray-600 hover:text-brand-blue block"
                        >
                          Addiction Treatment
                        </Link>
                        <Link
                          href="/services/individual-counseling"
                          className="text-sm text-gray-600 hover:text-brand-blue block"
                        >
                          Individual Counseling
                        </Link>
                        <Link
                          href="/services/group-counseling"
                          className="text-sm text-gray-600 hover:text-brand-blue block"
                        >
                          Group Counseling
                        </Link>
                        <Link
                          href="/services/family-counseling"
                          className="text-sm text-gray-600 hover:text-brand-blue block"
                        >
                          Family Counseling
                        </Link>
                        <Link
                          href="/services/trauma-counseling"
                          className="text-sm text-gray-600 hover:text-brand-blue block"
                        >
                          Trauma Counseling
                        </Link>
                        <Link
                          href="/services/methadone-treatment"
                          className="text-sm text-gray-600 hover:text-brand-blue block"
                        >
                          Medication-Assisted Treatment
                        </Link>
                        <Link
                          href="/services/case-management"
                          className="text-sm text-gray-600 hover:text-brand-blue block"
                        >
                          Case Management
                        </Link>
                      </div>
                    </div>
                    <Link href="/housing" className="text-lg font-medium text-gray-700 hover:text-brand-blue">
                      Housing
                    </Link>
                    <Link href="/locations" className="text-lg font-medium text-gray-700 hover:text-brand-blue">
                      Locations
                    </Link>
                    <Link href="/insurance" className="text-lg font-medium text-gray-700 hover:text-brand-blue">
                      Insurance
                    </Link>
                    <Link href="/admissions" className="text-lg font-medium text-gray-700 hover:text-brand-blue">
                      Admissions
                    </Link>
                    <Link href="/blog" className="text-lg font-medium text-gray-700 hover:text-brand-blue">
                      Blog
                    </Link>
                    <Link href="/contact" className="text-lg font-medium text-gray-700 hover:text-brand-blue">
                      Contact
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

const ListItem = ({
  className,
  title,
  children,
  ...props
}: { className?: string; title: string; children: React.ReactNode; href: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={props.href}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
