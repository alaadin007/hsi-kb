"use client"

import { SearchBar } from '@/components/search-bar'
import { GraduationCap, Users, Hospital, UserPlus } from 'lucide-react'

const features = [
  {
    icon: GraduationCap,
    title: "Making Aesthetics Easy",
    description: "Our aesthetic courses make complicated treatments easy to understand and practice safely for any medical professional, regardless of their background"
  },
  {
    icon: Users,
    title: "95% of Trainees Practicing",
    description: "Our Dermal Filler and Botox Courses, paired with extensive after-training support, enable over 95% of participants to start injecting within three months"
  },
  {
    icon: Hospital,
    title: "Real Patients Training",
    description: "Our aesthetic courses are conducted in clinics with multiple patients for each trainee and not in hotel boardrooms with model patients"
  },
  {
    icon: UserPlus,
    title: "Small Group Training",
    description: "All our aesthetic courses are held in small groups at a 1:2 or 1:3 trainer-to-trainee ratio"
  }
]

export function HeroBanner() {
  return (
    <section className="relative bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80')] bg-cover bg-center py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto pt-20"> {/* Added pt-20 for extra top padding */}
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-silver-200 to-silver-400">
            Transform Your Medical Career with Expert Aesthetic Training
          </h1>
          <p className="text-xl text-gray-200 mb-12">
            Join London's premier institute for aesthetic medicine training. Expert-led courses designed for medical professionals.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/60 backdrop-blur-sm border border-silver-300/20 rounded-lg p-6 hover:border-silver-300/40 transition-colors"
            >
              <feature.icon className="w-10 h-10 text-silver-300 mb-4" />
              <h3 className="text-lg font-semibold text-silver-200 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}