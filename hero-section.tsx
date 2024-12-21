import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="pt-24 pb-12">
      <div className="container flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
          Powerful all-in-one tool for growing business
        </div>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold md:text-6xl">
          Maximize Your Impact Business with{" "}
          <span className="text-red-500">RMax</span>
        </h1>
        <p className="mt-6 max-w-2xl text-gray-600">
          Enhance your business with RMax's all-in-one platform - streamlining client management, automating workflows, and driving growth
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-red-500 hover:bg-red-600">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}

