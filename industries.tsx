import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Industries() {
  const industries = [
    {
      title: "Sports",
      image: "/placeholder.svg?height=300&width=400",
      description: "Perfect for sports coaches and fitness trainers",
    },
    {
      title: "Healthcare & Wellness",
      image: "/placeholder.svg?height=300&width=400",
      description: "Ideal for healthcare providers and wellness professionals",
    },
    {
      title: "Learning Activities",
      image: "/placeholder.svg?height=300&width=400",
      description: "Great solution for educators and tutors",
    },
  ]

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center">
          Empowering Service Providers Across Industries
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
          Whether you're in sports education, wellness, healthcare services, or other industries, our technology platform your business operations, making it easier for you to focus on what you do best.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={industry.image}
                alt={industry.title}
                width={400}
                height={300}
                className="w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <Button variant="link" className="text-red-500 p-0">
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

