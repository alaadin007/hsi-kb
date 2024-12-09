"use client"

import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const curriculumData = {
  day1: {
    title: "BASIC BOTULINUM TOXIN & DERMAL FILLERS",
    sections: [
      {
        title: "BASIC BOTULINUM TOXIN",
        items: [
          "Upper Face: Frown",
          "Forehead",
          "Crows' Feet"
        ]
      },
      {
        title: "BASIC DERMAL FILLER",
        items: [
          "Lips",
          "Nasolabial Folds",
          "Marionette Lines"
        ]
      }
    ]
  },
  day2: {
    title: "ADVANCED TECHNIQUES",
    sections: [
      {
        title: "ADVANCED BOTULINUM TOXIN",
        items: [
          "Lower Face: Mentalis crease",
          "Chin Puckering",
          "Nasal Bunny Lines",
          "Droopy Lip Corner",
          "Hyperhidrosis",
          "Jaw Reduction",
          "Nefertiti Facelift"
        ]
      },
      {
        title: "ADVANCED DERMAL FILLER",
        items: [
          "Intradermal Injection Techniques",
          "Introduction to Cannula",
          "Advanced Lip Techniques"
        ]
      }
    ]
  },
  day3: {
    title: "SKIN SCIENCE & BUSINESS",
    sections: [
      {
        title: "SKIN SCIENCE",
        items: [
          "Cosmeceuticals",
          "Skin Peels",
          "Combination Treatments"
        ]
      },
      {
        title: "BUSINESS DEVELOPMENT",
        items: [
          "Setting Up Your Practice",
          "Marketing Strategies",
          "Patient Management",
          "Legal Considerations"
        ]
      }
    ]
  }
}

export function CAMCurriculumTab() {
  return (
    <Card className="p-6">
      <h3 className="text-2xl font-semibold text-silver-200 mb-6">Aesthetic Medicine Topics</h3>
      <p className="text-gray-300 mb-8">The core principles that will be covered are described below.</p>

      <div className="space-y-12">
        {Object.entries(curriculumData).map(([day, data], index) => (
          <div key={day} className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-silver-900/50 px-4 py-2 rounded-lg">
                <h4 className="text-xl font-semibold text-silver-200">DAY {index + 1}</h4>
              </div>
              <h5 className="text-lg font-semibold text-silver-300">{data.title}</h5>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {data.sections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h6 className="text-base font-semibold text-silver-400">{section.title}</h6>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-300">
                        <Check className="h-5 w-5 text-silver-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="pt-8 border-t border-silver-600/20">
          <h4 className="text-xl font-semibold text-silver-200 mb-4">Training Spotlight</h4>
          <p className="text-gray-300 mb-4">
            Read an article on 'training spotlight' published in news magazine is a proof of our highly professional fellowship programme & training
          </p>
          <a href="#" className="text-silver-400 hover:text-silver-300 underline">
            Download Here
          </a>
        </div>
      </div>
    </Card>
  )
}