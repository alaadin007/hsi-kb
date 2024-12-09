"use client"

import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export function OverviewTab() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-silver-200 mb-4">Beginners Level</h3>
          <h4 className="text-lg font-semibold text-silver-300 mb-3">Course Suitable For:</h4>
          <ul className="space-y-2 text-gray-300">
            {['Doctors', 'Dentists', 'Dental Hygienist', 'Nurses', 'Pharmacists', 'Orthoptists and Midwives'].map((profession) => (
              <li key={profession} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-silver-400" />
                {profession}
              </li>
            ))}
          </ul>
          <p className="text-gray-300 mt-4">
            Our aesthetic courses are designed to be enjoyable and easy for beginner practitioners, providing safe and effective techniques that can be immediately implemented after training.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-silver-200 mb-4">Aesthetic Courses by Mentorship</h3>
          <p className="text-gray-300 mb-4">
            These mentors are committed to shaping a safer and quality future for Aesthetic Medicine.
          </p>
          <h4 className="text-lg font-semibold text-silver-300 mb-3">Foundation Botox and Fillers Course offers:</h4>
          <ul className="space-y-2 text-gray-300">
            {[
              'Small-sized (4:1) trainee-to-trainer ratio',
              'Extensive hands-on experience with real clients',
              'Accredited course developed in line with HEE, JCCP, and CQC standards',
              'CPD-certified cosmetic courses',
              'Networking & after-course support'
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-silver-400" />
                {feature}
              </li>
            ))}
          </ul>
          <p className="text-gray-300 mt-4">
            Our unique approach to aesthetic training has over 95% of the practitioners starting the practice immediately afterwards.
          </p>
        </div>
      </div>
    </Card>
  )
}