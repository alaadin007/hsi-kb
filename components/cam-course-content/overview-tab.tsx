"use client"

import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export function CAMOverviewTab() {
  return (
    <Card className="p-6">
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold text-silver-200 mb-4">Introduction</h3>
          <p className="text-gray-300">
            The 3-day Aesthetic Medicine Certificate is tailored towards new practitioners who are ready to kick-start their career in Aesthetic Medicine. It aims to provide an in-depth understanding of the Layers of the Skin and Biological Ageing Process. The course also includes a combined package of our most popular Foundation Botulinum Toxin and Dermal Fillers course, Advanced Botox and Dermal fillers including an introduction to using cannula and our Skin Rejuvenation Course all combined all together.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-silver-200 mb-4">Superior Training</h3>
          <p className="text-gray-300">
            An Intense 3-day course incorporating essentials basic and advanced botox and dermal filler procedures combined with popular skin treatments perfect for the beginner all-rounded aesthetic practitioner.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-silver-200 mb-4">Exposure</h3>
          <p className="text-gray-300">
            Direct mentorship by our various cosmetic practitioners who are experts in performing their respective aesthetic treatments.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-silver-200 mb-4">Confidence & Competence</h3>
          <p className="text-gray-300">
            Small group training under the direct supervision of our experienced aesthetic trainers. Master procedures to an advanced level. Learn theory, consultation methods and manage client expectations as well as complications.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-silver-200 mb-4">Inside Secrets</h3>
          <p className="text-gray-300">
            We provide you with practical and useful practice building tips and tricks from the people who have authority in the field and have deep insight.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-silver-200 mb-4">Fellowship Programme Roadmap</h3>
          <p className="text-gray-300">
            The Roadmap to Success in Aesthetic Medicine – Download
          </p>
        </div>
      </div>
    </Card>
  )
}