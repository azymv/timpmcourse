"use client"
import { PricingCard } from "./pricing-card"

const plans = [
  {
    name: "Standard",
    price: 299,
    period: "one-time",
    features: [
      "Complete PM Mastery Course",
      "Case Studies & Projects",
      "Community Access",
      "Course Certificate",
      "AI for PMs e-book",
    ],
  },
  {
    name: "Premium",
    price: 499,
    period: "one-time",
    featured: true,
    features: [
      "Everything in Standard",
      "1-on-1 Mentoring Sessions",
      "Resume Review",
      "Interview Preparation",
      "Lifetime Updates",
      "Priority Support",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-zinc-900">
      <div className="container px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that best fits your needs. Both plans include lifetime access to the course materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

