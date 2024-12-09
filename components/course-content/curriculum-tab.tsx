"use client"

import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export function CurriculumTab() {
  return (
    <Card className="p-6">
      <h3 className="text-2xl font-semibold text-silver-200 mb-6">FOUNDATION DERMAL FILLERS AND BOTOX COURSE</h3>
      
      <div className="space-y-8">
        <div>
          <h4 className="text-xl font-semibold text-silver-200 mb-4">Practical Session Learning outcomes</h4>
          
          <div className="space-y-6">
            <div>
              <h5 className="text-lg font-semibold text-silver-200 mb-3">Botox Injection Techniques</h5>
              <h6 className="text-base font-semibold text-silver-300 mb-2">Facial Anatomy & Botox Injection Techniques:</h6>
              <ul className="space-y-2 text-gray-300">
                {[
                  'Glabella',
                  'Forehead',
                  'Crows Feet',
                  'Eye Brow Lift',
                  'Bunny Lines ＊',
                  'Gummy Smile ＊',
                  'Lip Flip ＊'
                ].map((technique) => (
                  <li key={technique} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-silver-400" />
                    {technique}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-silver-200 mb-3">Dermal Filler Injection Techniques</h5>
              <h6 className="text-base font-semibold text-silver-300 mb-2">Skin Anatomy & Dermal Filler Injection Techniques:</h6>
              <ul className="space-y-2 text-gray-300">
                {[
                  'Mid-Deep Dermal Injection Skill Using Ultrafine Needle',
                  'Lip Filler Training – hydration, volume increase & contouring',
                  'Naso-labial folds – reduce lines running from base of the nose to corners of the mouth',
                  'Facial Lines & Wrinkles',
                  'Deep crows feet repair ＊',
                  'Downturned lip corners ＊'
                ].map((technique) => (
                  <li key={technique} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-silver-400" />
                    {technique}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-silver-200 mb-3">Business Advice & Consultancy:</h5>
              <ul className="space-y-2 text-gray-300">
                {[
                  'Setting Up Clinics',
                  'Pricing Strategy & Marketing Guidelines',
                  'Medical Malpractice & Insurance',
                  'Consent Forms & Record Keeping'
                ].map((topic) => (
                  <li key={topic} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-silver-400" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <p className="text-gray-400 mt-6">＊ as models permit we do hand on training on as many areas</p>
        </div>
      </div>
    </Card>
  )
}