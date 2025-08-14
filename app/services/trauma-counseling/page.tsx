import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Brain, Shield, Heart, Award, Phone } from "lucide-react"
import Link from "next/link"

export default function TraumaCounselingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Brain className="h-16 w-16 mx-auto mb-6 text-teal-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Trauma Counseling</h1>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Specialized trauma-informed therapy to help you heal from traumatic experiences, process difficult
              emotions, and reclaim your life with evidence-based treatment approaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                <Phone className="h-5 w-5 mr-2" />
                Call (614) 219-9394
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-700 px-8 py-3 bg-transparent"
              >
                Begin Healing Journey
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding Trauma */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Understanding Trauma</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Trauma can result from a single overwhelming event or repeated experiences that leave lasting emotional,
                psychological, and sometimes physical effects. At Autumn Behavioral Health Center, we understand that
                trauma affects everyone differently and requires specialized, compassionate care.
              </p>
              <p className="text-lg leading-relaxed">
                Our trauma-informed approach creates a safe, supportive environment where you can process your
                experiences at your own pace, develop healthy coping strategies, and work toward post-traumatic growth
                and healing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trauma Treatment Approaches */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Evidence-Based Trauma Therapies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "EMDR (Eye Movement Desensitization and Reprocessing)",
                description:
                  "Proven therapy that helps process traumatic memories and reduce their emotional impact through bilateral stimulation.",
                icon: <Brain className="h-8 w-8 text-teal-600" />,
              },
              {
                title: "Trauma-Focused CBT",
                description:
                  "Cognitive-behavioral approach specifically designed to address trauma-related thoughts, feelings, and behaviors.",
                icon: <Award className="h-8 w-8 text-teal-600" />,
              },
              {
                title: "Somatic Experiencing",
                description:
                  "Body-based approach that helps release trapped trauma energy and restore natural healing responses.",
                icon: <Heart className="h-8 w-8 text-teal-600" />,
              },
              {
                title: "Narrative Therapy",
                description:
                  "Helps you rewrite your story, separating your identity from traumatic experiences and building resilience.",
                icon: <Shield className="h-8 w-8 text-teal-600" />,
              },
            ].map((therapy) => (
              <Card key={therapy.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {therapy.icon}
                    <CardTitle className="text-xl text-teal-700">{therapy.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{therapy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Types of Trauma */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Types of Trauma We Treat</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Post-Traumatic Stress Disorder (PTSD)",
                "Complex PTSD (C-PTSD)",
                "Childhood Trauma and Abuse",
                "Sexual Assault and Abuse",
                "Domestic Violence",
                "Combat and Military Trauma",
                "Accidents and Medical Trauma",
                "Natural Disasters",
                "Grief and Loss Trauma",
                "Vicarious/Secondary Trauma",
                "Developmental Trauma",
                "Intergenerational Trauma",
              ].map((trauma) => (
                <div key={trauma} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{trauma}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trauma-Informed Principles */}
      <div className="bg-teal-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Trauma-Informed Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First",
                description: "Creating physical and emotional safety in all interactions and treatment environments.",
              },
              {
                title: "Trustworthiness",
                description:
                  "Building trust through transparency, consistency, and reliable therapeutic relationships.",
              },
              {
                title: "Choice & Control",
                description:
                  "Empowering you with choices in your treatment and respecting your autonomy throughout the process.",
              },
              {
                title: "Collaboration",
                description:
                  "Working together as partners in your healing journey, valuing your expertise in your own experience.",
              },
              {
                title: "Cultural Humility",
                description:
                  "Recognizing and respecting cultural, historical, and identity factors that influence trauma and healing.",
              },
              {
                title: "Empowerment",
                description:
                  "Focusing on your strengths, resilience, and capacity for healing and post-traumatic growth.",
              },
            ].map((principle) => (
              <Card key={principle.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-teal-700">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">You Don't Have to Face Trauma Alone</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Take the courageous step toward healing. Our specialized trauma counseling services provide the safe,
            supportive environment you need to process your experiences and reclaim your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              <Phone className="h-5 w-5 mr-2" />
              Call (614) 219-9394
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-700 px-8 py-3 bg-transparent"
            >
              <Link href="/contact">Start Your Healing</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
