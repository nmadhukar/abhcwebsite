import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { getManagementTeam } from "@/lib/supabase/management-team"

export const metadata: Metadata = {
  title: "Management Team | Autumn Behavioral Health Center",
  description:
    "Meet the dedicated and experienced management team at Autumn Behavioral Health Center, leading our commitment to compassionate care and recovery.",
  keywords: [
    "Autumn Behavioral Health management team",
    "addiction treatment leadership",
    "mental health executives",
    "healthcare leadership team",
    "treatment center directors",
    "healthcare executives",
  ],
  openGraph: {
    title: "Management Team | Autumn Behavioral Health Center",
    description:
      "Meet the dedicated and experienced management team at Autumn Behavioral Health Center, leading our commitment to compassionate care and recovery.",
    url: "https://autumnbehavioralhealthcenter.com/management-team",
  },
  alternates: {
    canonical: "https://autumnbehavioralhealthcenter.com/management-team",
  },
}

export default async function ManagementTeamPage() {
  const teamMembers = await getManagementTeam()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Autumn Behavioral Health Center",
    url: "https://autumnbehavioralhealthcenter.com",
    employee: teamMembers.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.title,
      worksFor: {
        "@type": "Organization",
        name: "Autumn Behavioral Health Center",
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Management Team</h1>
              <p className="text-xl leading-relaxed">
                Meet the dedicated leaders who guide our mission to provide exceptional mental health and addiction
                treatment services across Ohio.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Management Team</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our leadership team is composed of dedicated, experienced professionals committed to providing the
                  highest quality of care and support to our clients and community.
                </p>
              </div>
              <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
              >
                {teamMembers.map((person) => (
                  <li key={person.id} className="bg-white rounded-2xl p-6 shadow-lg">
                    <img
                      className="aspect-[3/2] w-full rounded-2xl object-cover mb-6"
                      src={person.image_url || "/placeholder.svg"}
                      alt={`Portrait of ${person.name}`}
                    />
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-base leading-7 text-blue-600 font-medium">{person.title}</p>
                    {person.credentials && <p className="text-sm text-gray-500 mt-1">{person.credentials}</p>}
                    {person.bio && <p className="text-sm text-gray-600 mt-3 line-clamp-4">{person.bio}</p>}
                    {person.specialties && person.specialties.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {person.specialties.slice(0, 3).map((specialty, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {specialty}
                          </span>
                        ))}
                        {person.specialties.length > 3 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            +{person.specialties.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership Philosophy Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Leadership Philosophy</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our management team is united by a shared commitment to excellence, innovation, and compassionate care.
                We believe in leading by example, fostering a culture of continuous learning, and always putting our
                patients' needs first.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Collaborative Leadership</h3>
                  <p className="text-gray-600">
                    We work together across disciplines to ensure comprehensive, coordinated care for every patient.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Innovation Focus</h3>
                  <p className="text-gray-600">
                    We continuously seek new and better ways to serve our patients and improve treatment outcomes.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Patient-Centered</h3>
                  <p className="text-gray-600">
                    Every decision we make is guided by what's best for our patients and their families.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
