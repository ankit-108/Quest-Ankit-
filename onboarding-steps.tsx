import { CircleUser, PenLine, LayoutGrid } from 'lucide-react'

export function OnboardingSteps() {
  const steps = [
    {
      icon: <CircleUser className="h-8 w-8 text-red-500" />,
      title: "Create your profile",
      description: "Set up your business profile and showcase your expertise by creating your online presence",
    },
    {
      icon: <PenLine className="h-8 w-8 text-red-500" />,
      title: "Add services",
      description: "Define your service offerings, set prices, and create packages that align with your business model",
    },
    {
      icon: <LayoutGrid className="h-8 w-8 text-red-500" />,
      title: "Built Website",
      description: "Customize your website to showcase your services and attract more clients",
    },
  ]

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center">
          Onboard business in 3 simple steps
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Start onboard smoothly with RMax for the most convenient
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-red-50 p-3">
                {step.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

