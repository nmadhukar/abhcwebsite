import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Provider Portal | Autumn Behavioral Health Center",
  description: "A secure portal for our professional partners to coordinate patient care.",
}

export default function ProviderPortalPage() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-brand-blue sm:text-6xl">Provider & Partner Portal</h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated resource for our valued community partners, referring providers, and legal professionals.
          </p>
        </div>
      </div>
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8 shadow-lg">
            <CardHeader className="text-center">
              <Users className="mx-auto h-16 w-16 text-brand-green mb-4" />
              <CardTitle className="text-2xl text-brand-blue">Partner Login</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Access shared client information, submit referrals, and track progress in our secure, HIPAA-compliant
                portal.
              </p>
              <Button asChild size="lg" className="bg-brand-accent-orange hover:bg-brand-accent-orange/90">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Login to Partner Portal <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <p className="mt-6 text-sm text-gray-500">
                To request access or for assistance, please contact our community liaison at{" "}
                <a href="mailto:partners@autumnbhc.com" className="underline">
                  partners@autumnbhc.com
                </a>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
