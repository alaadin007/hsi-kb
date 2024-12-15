"use client"

import { Header } from '@/components/header'
import { CourseBanner } from '@/components/course-banner'
import { CourseContent } from '@/components/course-content'
import { CourseFAQ } from '@/components/course-faq'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'

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


export default function FoundationCoursePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <CourseBanner />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="grid w-full md:w-auto md:inline-grid md:grid-cols-4 gap-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="certification">Certification</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
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
              </TabsContent>

              <TabsContent value="curriculum">
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
              </TabsContent>

              <TabsContent value="requirements">
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
              </TabsContent>

              <TabsContent value="certification">
                <Card className="p-6">
                  <h3 className="text-2xl font-semibold text-silver-200 mb-6">Certification</h3>
                  {/* Add certification content when available */}
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <CourseFAQ />
      </main>
    </>
  )
}