import { Calendar, Users, LineChart, Monitor, CreditCard, LayoutGrid } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-red-500" />,
      title: "Scheduling",
      description: "Efficient appointment booking, flexible scheduling options, and automated reminders",
      link: "#",
    },
    {
      icon: <Users className="h-6 w-6 text-red-500" />,
      title: "Client Management & CRM",
      description: "Comprehensive client profiles and communication tracking",
      link: "#",
    },
    {
      icon: <LineChart className="h-6 w-6 text-red-500" />,
      title: "AI-Powered Insights",
      description: "Data-driven decisions with advanced analytics",
      link: "#",
    },
    {
      icon: <Monitor className="h-6 w-6 text-red-500" />,
      title: "Marketing & Engagement Tools",
      description: "Boost client retention and grow your business",
      link: "#",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-red-500" />,
      title: "Billing & Payments",
      description: "Streamline invoicing and payments processing",
      link: "#",
    },
    {
      icon: <LayoutGrid className="h-6 w-6 text-red-500" />,
      title: "Multi-Location Management",
      description: "Manage multiple locations with ease",
      link: "#",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center">Why Rmax?</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
                <Button variant="link" className="mt-4 text-red-500 p-0">
                  Learn more →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

