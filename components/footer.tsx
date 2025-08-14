import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="md:col-span-1">
            <Image
              src="/autumn-behavioral-logo.png"
              alt="Autumn Behavioral Health Center Logo"
              width={200}
              height={50}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-gray-300">
              Providing compassionate and comprehensive behavioral health and addiction treatment services.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Linkedin />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-300 hover:text-white">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/admissions" className="text-gray-300 hover:text-white">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="text-gray-300 hover:text-white">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/patient-portal" className="text-gray-300 hover:text-white">
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link href="/provider-portal" className="text-gray-300 hover:text-white">
                  Provider Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>
                <a href="tel:614-219-9394" className="hover:text-white">
                  (614) 219-9394
                </a>
              </li>
              <li>
                <a href="mailto:clinic@autumntreatment.com" className="hover:text-white">
                  clinic@autumntreatment.com
                </a>
              </li>
              <li className="pt-2">
                <p>Confidential help available 24/7.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditations Section */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold mb-6">Accreditations & Certifications</h3>
            <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
              <div className="flex flex-col items-center">
                <Image
                  src="/carf-logo.png"
                  alt="CARF Accredited - Commission on Accreditation of Rehabilitation Facilities"
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain"
                />
                <p className="text-xs text-gray-400 mt-2">CARF Accredited</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/ohmas-logo.png"
                  alt="Ohio Mental Health and Addiction Services"
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
                <p className="text-xs text-gray-400 mt-2">OHMAS Certified</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Autumn Behavioral Health Center</p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/hipaa" className="text-gray-400 hover:text-white">
              HIPAA Notice
            </Link>
            <Link href="/site-index" className="text-gray-400 hover:text-white">
              Site Index
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
