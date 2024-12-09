"use client"

import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export function CAMRequirementsTab() {
  return (
    <Card className="p-6">
      <h3 className="text-2xl font-semibold text-silver-200 mb-6">Course Requirements</h3>
      <div className="space-y-6">
        <p className="text-gray-300">
          These courses will be provided access to and must be completed before the training day. They will help you familiarize with the material and aesthetic terminology so you can make the most out of the training day.
        </p>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-silver-200">Pre-Course Materials Include:</h4>
          <ul className="space-y-2">
            {[
              'Facial Ageing & Aesthetic Treatments Course',
              'Aesthetic Facial Assessment & Consultation Course',
              'Botulinum Toxin Dilution & Reconstitution',
              'Botulinum Toxin Fundamentals',
              'Fundamentals of Dermal Fillers Course',
              'Upper Face Botox Guide',
              'Use Of Hyalase (Hyaluronidase) | Dermal Filler Complications'
            ].map((requirement) => (
              <li key={requirement} className="flex items-center gap-2 text-gray-300">
                <Check className="h-5 w-5 text-silver-400" />
                {requirement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}