"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Clock, MapPin, GraduationCap, FileText, Award, Stethoscope } from 'lucide-react'

export function CourseBanner() {
  return (
    <section className="relative min-h-[600px] lg:h-[600px] bg-[url('https://www.theharleystreet.com/wp-content/uploads/2021/05/banner-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      <div className="relative container mx-auto px-4 py-32 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 items-start lg:items-center">
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-silver-200 to-silver-400">
            Botox only Course for Medical Professionals
            </h1>
            <p className="text-lg lg:text-xl text-gray-200">
            Practical Insight for Immediate Practice
            </p>
            <p className="text-base lg:text-lg text-gray-300">
              Conducted in Harley Street, London
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href='https://med.as.me/botox-only-course' target='blank'>
              <Button size="lg" className="bg-silver-600 hover:bg-silver-700 text-white w-full sm:w-auto">
                Book Course Now
              </Button></a>
              {/*<Button size="lg" variant="outline" className="border-silver-400 text-silver-300 hover:bg-silver-500/10 w-full sm:w-auto">
                Download Brochure
              </Button>*/}
            </div>
          </div>

          <Card className="p-6 bg-gray-900/90 border-silver-600/20 mt-8 lg:mt-0">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-silver-400" />
                  <div>
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="text-silver-200">1 Day</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-silver-400" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-silver-200">London & Manchester</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <GraduationCap className="h-5 w-5 text-silver-400" />
                  <div>
                    <p className="text-sm text-gray-400">Level</p>
                    <p className="text-silver-200">Beginner</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FileText className="h-5 w-5 text-silver-400" />
                  <div>
                    <p className="text-sm text-gray-400">Handouts</p>
                    <p className="text-silver-200">Yes</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Award className="h-5 w-5 text-silver-400" />
                  <div>
                    <p className="text-sm text-gray-400">CPD Points</p>
                    <p className="text-silver-200">12+</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Stethoscope className="h-5 w-5 text-silver-400" />
                  <div>
                    <p className="text-sm text-gray-400">Hands-on Practice</p>
                    <p className="text-silver-200">Yes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-silver-600/20">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xl font-semibold text-silver-200">£1190 + VAT</p>
                <a href='https://med.as.me/botox-only-course' target='blank'>
                <Button className="w-full sm:w-auto bg-silver-600 hover:bg-silver-700 text-white">
                  Book Now
                </Button></a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}