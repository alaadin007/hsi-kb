"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Clock, MapPin, GraduationCap, FileText, Award, ClipboardCheck } from 'lucide-react'

export function CAMCourseBanner() {
  return (
    <section className="relative h-[600px] bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      <div className="relative container mx-auto px-4 pt-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-silver-200 to-silver-400">
              Certificate in Aesthetic Medicine
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              Kickstart a successful career in aesthetic medicine...
            </p>
            <Button size="lg" className="bg-silver-600 hover:bg-silver-700 text-white">
              Enroll Now
            </Button>
          </div>

          <Card className="p-6 bg-gray-900/90 border-silver-600/20">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-silver-400" />
                <div>
                  <p className="text-sm text-gray-400">Duration</p>
                  <p className="text-silver-200">3 Days</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-silver-400" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-silver-200">London</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <GraduationCap className="h-5 w-5 text-silver-400" />
                <div>
                  <p className="text-sm text-gray-400">Level</p>
                  <p className="text-silver-200">Beginner/Intermediate</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FileText className="h-5 w-5 text-silver-400" />
                <div>
                  <p className="text-sm text-gray-400">Assessment</p>
                  <p className="text-silver-200">Written</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Award className="h-5 w-5 text-silver-400" />
                <div>
                  <p className="text-sm text-gray-400">CPD Points</p>
                  <p className="text-silver-200">48 Points</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ClipboardCheck className="h-5 w-5 text-silver-400" />
                <div>
                  <p className="text-sm text-gray-400">Suitability</p>
                  <p className="text-silver-200">Doctors, Dentists & Nurses</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-silver-600/20">
              <p className="text-xl font-semibold text-silver-200">£3200 + VAT</p>
              <Button className="w-full mt-4 bg-silver-600 hover:bg-silver-700 text-white">
                Enroll Now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}