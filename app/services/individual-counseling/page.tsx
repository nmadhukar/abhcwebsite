import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, MessageCircle, Clock, Award, Phone } from "lucide-react"
import Link from "next/link"

export default function IndividualCounselingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MessageCircle className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Individual Counseling</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Personalized one-on-one therapy sessions designed to address your unique mental health and recovery needs
              with compassionate, evidence-based care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                <Phone className="h-5 w-5 mr-2" />
                Call (614) 219-9394
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* What is Individual Counseling */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What is Individual Counseling?</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Individual counseling at Autumn Behavioral Health Center provides you with dedicated one-on-one time
                with a licensed therapist in a safe, confidential environment. Our personalized approach ensures that
                your unique experiences, challenges, and goals are at the center of your treatment plan.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're dealing with anxiety, depression, trauma, addiction, or life transitions, our experienced
                counselors work collaboratively with you to develop coping strategies, process emotions, and create
                lasting positive change in your life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Therapy Approaches */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Evidence-Based Therapy Approaches</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cognitive Behavioral Therapy (CBT)",
                description:
                  "Helps identify and change negative thought patterns and behaviors that contribute to emotional distress.",
              },
              {
                title: "Dialectical Behavior Therapy (DBT)",
                description:
                  "Focuses on building skills for emotional regulation, distress tolerance, and interpersonal effectiveness.",
              },
              {
                title: "Trauma-Focused Therapy",
                description: "Specialized approaches for processing and healing from traumatic experiences and PTSD.",
              },
              {
                title: "Motivational Interviewing",
                description:
                  "Collaborative approach that helps strengthen motivation and commitment to positive change.",
              },
              {
                title: "Solution-Focused Therapy",
                description: "Goal-oriented approach that focuses on solutions and strengths rather than problems.",
              },
              {
                title: "Mindfulness-Based Therapy",
                description: "Incorporates mindfulness practices to increase awareness and reduce stress and anxiety.",
              },
            ].map((approach) => (
              <Card key={approach.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-700">{approach.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{approach.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Conditions Treated */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Conditions We Treat</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Depression and Mood Disorders",
                "Anxiety and Panic Disorders",
                "Post-Traumatic Stress Disorder (PTSD)",
                "Substance Use Disorders",
                "Bipolar Disorder",
                "Obsessive-Compulsive Disorder (OCD)",
                "Eating Disorders",
                "Grief and Loss",
                "Relationship Issues",
                "Life Transitions and Stress",
                "ADHD and Focus Issues",
                "Personality Disorders",
              ].map((condition) => (
                <div key={condition} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What to Expect */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What to Expect</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Initial Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Comprehensive evaluation to understand your needs, goals, and develop a personalized treatment plan.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Regular Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Weekly or bi-weekly 50-minute sessions in a comfortable, confidential setting with your dedicated
                    therapist.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Progress Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Regular check-ins to assess progress, adjust treatment approaches, and celebrate your achievements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Healing Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step toward better mental health with personalized individual counseling at Autumn Behavioral
            Health Center.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              <Phone className="h-5 w-5 mr-2" />
              Call (614) 219-9394
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 bg-transparent"
            >
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
