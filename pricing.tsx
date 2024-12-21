import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Pricing() {
  const plans = [
    {
      name: "Monthly",
      price: "17",
      period: "/month",
      features: [
        "Unlimited Users",
        "CRM Suite + Elements",
        "Unlimited Storage Support",
        "24/7 Customer Support",
      ],
    },
    {
      name: "Premium",
      price: "88",
      period: "/month",
      features: [
        "Everything in Monthly +",
        "CRM Suite + Elements",
        "Unlimited Storage Support",
        "24/7 Premium Support",
        "AI-Powered Insights",
      ],
      popular: true,
    },
  ]

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center">
          Choose Plan That's Right For You
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Simple and transparent pricing. No hidden fees.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-red-500' : ''}`}>
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                  Popular
                </span>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-red-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-red-500 hover:bg-red-600' : ''}`}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

