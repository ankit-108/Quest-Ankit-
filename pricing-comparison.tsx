import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function PricingComparison() {
  const features = [
    {
      category: "Basic Management",
      items: [
        { name: "Users", starter: "1", premium: "15" },
        { name: "Branches", starter: "1", premium: "10" },
        { name: "Courses", starter: "3", premium: "15/branch" },
        { name: "Max. Students Allowed", starter: "25", premium: "500" },
      ],
    },
    {
      category: "Features",
      items: [
        { name: "Communication", starter: "25", premium: "Yes" },
        { name: "Bulk Updates", starter: "25", premium: "Yes" },
        { name: "User Roles", starter: "25", premium: "Yes" },
      ],
    },
  ]

  return (
    <div className="container max-w-6xl">
      <h1 className="text-4xl font-bold text-center mb-16">Compare our plans</h1>
      
      <div className="grid grid-cols-[1.5fr,1fr,1fr] gap-8">
        {/* Header */}
        <div className="text-lg font-medium text-gray-500">Features</div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Starter</h2>
          <div className="text-2xl font-bold text-red-500 mb-1">$17<span className="text-base font-normal text-gray-600">/month</span></div>
          <div className="text-sm text-gray-600">billed monthly</div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Premium</h2>
          <div className="text-2xl font-bold text-red-500 mb-1">$88<span className="text-base font-normal text-gray-600">/month</span></div>
          <div className="text-sm text-gray-600">billed monthly</div>
        </div>

        {/* Features Table */}
        {features.map((section, sectionIndex) => (
          <div key={section.category} className="contents">
            {/* Category Header */}
            <div className="col-span-3 text-xl font-bold pt-8 pb-4 border-b">
              {section.category}
            </div>

            {/* Features */}
            {section.items.map((item, itemIndex) => (
              <div key={item.name} className="contents">
                <div className="py-4 border-b text-gray-600">{item.name}</div>
                <div className="py-4 border-b text-center font-medium">{item.starter}</div>
                <div className="py-4 border-b text-center font-medium">{item.premium}</div>
              </div>
            ))}
          </div>
        ))}

        {/* CTA Buttons */}
        <div className="col-span-1"></div>
        <div className="pt-8">
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white group">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-gray-500 text-center mt-4">No credit card required</p>
        </div>
        <div className="pt-8">
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white group">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-gray-500 text-center mt-4">No credit card required</p>
        </div>
      </div>
    </div>
  )
}

