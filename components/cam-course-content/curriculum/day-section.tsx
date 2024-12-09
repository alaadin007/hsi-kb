"use client"

import { Check } from "lucide-react"

interface DaySectionProps {
  dayNumber: number
  sections: {
    title: string
    items: string[]
  }[]
}

export function DaySection({ dayNumber, sections }: DaySectionProps) {
  return (
    <div>
      <h4 className="text-xl font-semibold text-silver-200 mb-6">DAY {dayNumber}</h4>
      
      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h5 className="text-lg font-semibold text-silver-300 mb-4">{section.title}</h5>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-300">
                  <Check className="h-5 w-5 text-silver-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}