import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function About() {
  const benefits = [
    "Learn product management from 10+ years of experience",
    "Practice with real-world case studies and projects",
    "Get personalized feedback on your work",
    "Join a community of aspiring product managers",
  ]

  return (
    <section id="about" className="py-24 bg-zinc-900">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold">About the Course</h2>
            <p className="text-xl text-gray-400">
              Master product management through practical experience and expert guidance
            </p>
          </div>

          <div className="grid gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-black border-zinc-800">
                <CardContent className="flex items-start gap-4 p-6">
                  <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <p className="text-lg">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 text-center">
            <p className="text-blue-400">
              Plus, get my e-book "AI for Product Managers" (€10 value) included with the course!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

