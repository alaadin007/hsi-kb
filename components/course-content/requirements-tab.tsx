"use client"

import { Card } from "@/components/ui/card"

const preRequisiteCourses = [
  {
    title: "Facial Ageing & Aesthetic Treatments",
    description: "Introduction to Facial Aging and Aesthetic Treatments: A Primer on Skin Care, Botox, and Dermal Filler Techniques"
  },
  {
    title: "Aesthetic Facial Assessment & Consultation Course",
    description: "Learn how to assess the face for injectable treatments with botox and dermal fillers as well for common skin issues."
  },
  {
    title: "Botulinum Toxin Dilution & Reconstitution",
    description: "Upper face Botox theory, focusing on botulinum toxin injections for the Glabella, Forehead, and Crow's Feet—top three cosmetic areas."
  },
  {
    title: "Botulinum Toxin Fundamentals",
    description: "Learn the theory behind botulinum toxin (aka Botox) as used in medicine for aesthetic as well as medical conditions."
  }
]

export function RequirementsTab() {
  return (
    <Card className="p-6">
      <h3 className="text-2xl font-semibold text-silver-200 mb-6">Pre-Course Requirements</h3>
      <p className="text-gray-300 mb-6">
        The following online courses will be provided access to and must be completed before the training day. They will help you familiarize with the material and aesthetic terminology so you can make the most out of the training day.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {preRequisiteCourses.map((course) => (
          <div key={course.title} className="bg-gray-900/50 p-6 rounded-lg border border-silver-300/20">
            <h4 className="text-lg font-semibold text-silver-200 mb-4">{course.title}</h4>
            <p className="text-gray-300">{course.description}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}