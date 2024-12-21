import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What is RMax?",
      answer: "RMax is an all-in-one business management platform designed to help service providers streamline their operations, manage clients, and grow their business.",
    },
    {
      question: "How does it work?",
      answer: "RMax provides a suite of tools including scheduling, client management, billing, and marketing features. Simply sign up, set up your profile, and start managing your business more efficiently.",
    },
    {
      question: "How much does it cost?",
      answer: "We offer flexible pricing plans starting at $17/month. Choose the plan that best fits your business needs.",
    },
  ]

  return (
    <section className="py-12">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-center text-gray-600 mb-8">
          Find answers to common questions about our service and features.
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

