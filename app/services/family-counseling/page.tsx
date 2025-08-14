import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, Users, Home, Award, Phone } from "lucide-react"
import Link from "next/link"

export default function FamilyCounselingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Family Counseling</h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Strengthen family bonds, improve communication, and heal together through comprehensive family therapy
              services that support recovery for the entire family unit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                <Phone className="h-5 w-5 mr-2" />
                Call (614) 219-9394
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-3 bg-transparent"
              >
                Schedule Family Session
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Family Counseling */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Family Counseling Matters</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Addiction and mental health issues don't just affect the individual—they impact the entire family
                system. Family counseling at Autumn Behavioral Health Center recognizes that healing happens best when
                the whole family is involved in the recovery process.
              </p>
              <p className="text-lg leading-relaxed">
                Our family therapy services help rebuild trust, improve communication, establish healthy boundaries, and
                create a supportive home environment that promotes lasting recovery and emotional wellness for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Family Therapy Approaches */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Family Therapy Approaches</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Family Systems Therapy",
                description:
                  "Examines family dynamics, roles, and patterns to identify and change unhealthy interactions that may contribute to problems.",
                icon: <Users className="h-8 w-8 text-purple-600" />,
              },
              {
                title: "Structural Family Therapy",
                description:
                  "Focuses on reorganizing family structure, boundaries, and hierarchies to create healthier family functioning.",
                icon: <Home className="h-8 w-8 text-purple-600" />,
              },
              {
                title: "Communication Training",
                description:
                  "Teaches effective communication skills, active listening, and conflict resolution techniques for better family relationships.",
                icon: <Heart className="h-8 w-8 text-purple-600" />,
              },
              {
                title: "Multidimensional Family Therapy",
                description:
                  "Comprehensive approach addressing individual, family, peer, and community factors that influence behavior and recovery.",
                icon: <Award className="h-8 w-8 text-purple-600" />,
              },
            ].map((approach) => (
              <Card key={approach.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {approach.icon}
                    <CardTitle className="text-xl text-purple-700">{approach.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{approach.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Issues We Address */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Family Issues We Address</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Impact of Addiction on Family",
                "Communication Breakdowns",
                "Trust and Relationship Repair",
                "Codependency Issues",
                "Boundary Setting",
                "Parenting Challenges",
                "Adolescent Behavioral Issues",
                "Grief and Loss",
                "Divorce and Separation",
                "Blended Family Dynamics",
                "Financial Stress",
                "Mental Health Impact on Family",
              ].map((issue) => (
                <div key={issue} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What to Expect */}
      <div className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What to Expect in Family Counseling</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Initial Family Assessment",
                  description:
                    "Comprehensive evaluation of family dynamics, communication patterns, and individual needs to develop a tailored treatment plan.",
                },
                {
                  step: "2",
                  title: "Goal Setting Together",
                  description:
                    "Collaborative process where all family members participate in setting realistic, achievable goals for family healing and growth.",
                },
                {
                  step: "3",
                  title: "Skill Building Sessions",
                  description:
                    "Learn and practice new communication skills, conflict resolution techniques, and healthy boundary-setting in a safe environment.",
                },
                {
                  step: "4",
                  title: "Progress Monitoring",
                  description:
                    "Regular check-ins to assess family progress, adjust treatment approaches, and celebrate improvements in family relationships.",
                },
              ].map((step) => (
                <div key={step.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Heal and Grow Together as a Family</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Take the first step toward stronger family relationships and lasting recovery. Our family counseling
            services are here to support your entire family's healing journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              <Phone className="h-5 w-5 mr-2" />
              Call (614) 219-9394
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-3 bg-transparent"
            >
              <Link href="/contact">Start Family Healing</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
