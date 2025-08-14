import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Clock, Heart, Award, Phone } from "lucide-react"
import Link from "next/link"

export default function GroupCounselingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Group Counseling</h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Connect with others who understand your journey through structured group therapy sessions that provide
              peer support, shared learning, and collective healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                <Phone className="h-5 w-5 mr-2" />
                Call (614) 219-9394
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 bg-transparent"
              >
                Join a Group
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits of Group Counseling */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Benefits of Group Counseling</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8 text-green-600" />,
                title: "Peer Support",
                description:
                  "Connect with others who share similar experiences and challenges, reducing feelings of isolation.",
              },
              {
                icon: <Users className="h-8 w-8 text-green-600" />,
                title: "Shared Learning",
                description:
                  "Learn from others' experiences, coping strategies, and recovery journeys in a supportive environment.",
              },
              {
                icon: <Award className="h-8 w-8 text-green-600" />,
                title: "Skill Building",
                description:
                  "Practice communication, social skills, and coping strategies in a safe, therapeutic setting.",
              },
              {
                icon: <Clock className="h-8 w-8 text-green-600" />,
                title: "Cost-Effective",
                description:
                  "Access professional therapy at a more affordable rate while still receiving quality care.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-green-600" />,
                title: "Accountability",
                description: "Group members provide mutual support and accountability for maintaining recovery goals.",
              },
              {
                icon: <Heart className="h-8 w-8 text-green-600" />,
                title: "Hope & Inspiration",
                description:
                  "Witness others' progress and success, providing hope and motivation for your own journey.",
              },
            ].map((benefit) => (
              <Card key={benefit.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{benefit.icon}</div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Group Types */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Group Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Addiction Recovery Groups",
                description:
                  "Support groups for individuals in various stages of addiction recovery, focusing on relapse prevention and coping strategies.",
                features: ["12-Step Integration", "Relapse Prevention", "Peer Support", "Coping Skills"],
              },
              {
                title: "Depression & Anxiety Groups",
                description:
                  "Therapeutic groups for individuals dealing with mood disorders, providing tools and support for managing symptoms.",
                features: ["CBT Techniques", "Mindfulness Practice", "Stress Management", "Social Support"],
              },
              {
                title: "Trauma Recovery Groups",
                description:
                  "Specialized groups for trauma survivors, focusing on healing, safety, and post-traumatic growth.",
                features: ["Trauma-Informed Care", "Safety Planning", "EMDR Integration", "Peer Support"],
              },
              {
                title: "Life Skills Groups",
                description:
                  "Practical groups focused on developing essential life skills for independent living and recovery maintenance.",
                features: ["Communication Skills", "Problem Solving", "Goal Setting", "Relationship Building"],
              },
              {
                title: "Family Support Groups",
                description: "Groups for family members and loved ones affected by addiction and mental health issues.",
                features: ["Family Education", "Boundary Setting", "Communication Tools", "Self-Care Strategies"],
              },
              {
                title: "Dual Diagnosis Groups",
                description:
                  "Specialized groups for individuals dealing with both mental health and substance use disorders.",
                features: ["Integrated Treatment", "Medication Management", "Coping Strategies", "Peer Support"],
              },
            ].map((group) => (
              <Card key={group.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{group.description}</p>
                  <div className="space-y-2">
                    {group.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Find Your Support Community</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join a supportive group environment where healing happens together. Connect with others who understand your
            journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              <Phone className="h-5 w-5 mr-2" />
              Call (614) 219-9394
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 bg-transparent"
            >
              <Link href="/contact">Learn About Groups</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
