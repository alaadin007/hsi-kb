"use client"

import { SearchBar } from '@/components/search-bar'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function CourseFAQ() {
  const faqs = [
    {
      question: "What qualifications do I need to take this course?",
      answer: "You must be a registered healthcare professional (Doctor, Dentist, Nurse, etc.) with a valid registration number from your respective regulatory body."
    },
    {
      question: "How many practical cases will I get to do?",
      answer: "During the course, you will have the opportunity to work on multiple real patients under expert supervision, typically 2-3 cases per treatment type."
    },
    {
      question: "Is there ongoing support after the course?",
      answer: "Yes, we provide comprehensive post-course support including mentoring, online resources, and access to our practitioner network."
    },
    {
      question: "What certification will I receive?",
      answer: "You will receive a CPD-accredited certificate recognized by major aesthetic bodies and insurance providers."
    }
  ]

  return (
    <section className="py-12 lg:py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-silver-200">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-silver-200 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}