"use client"
import { Header } from '@/components/header'
import { CourseBanner } from '@/components/course-banner-advanced-botox-and-fillers'
import { CourseContent } from '@/components/course-content'
import { CourseSearch } from '@/components/course-search'
import { CourseFAQ } from '@/components/course-faq'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
                      <h3 className="text-2xl font-semibold text-silver-200 mb-6">Advanced Botox & Dermal Fillers Course</h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <p className="text-gray-300 mt-4">
                            <h4 className="text-lg font-semibold text-silver-300 mb-3">Advanced Dermal Filler & Cannula Skills Masterclass</h4>
                            <p className="mb-2">This Advanced Dermal Filler & Cannula Skills Masterclass is suitable for those who have
                              completed and are confident in basic Botulinum Toxin and Dermal Filler techniques using needle.
                              Whilst learning to inject with a needle forms the basic building block to aesthetic injections,
                              the introduction of cannula work has been revolutionary in reducing side effects and complications,
                              whilst improving patient trauma, discomfort and downtime.</p>
                          </p>
                        </div>
                        <p className="text-gray-300 mt-4">
                          <h4 className="text-lg font-semibold text-silver-300 mb-3">Aims of the Course</h4>
                          <p className="mb-2">It is well established that cannulas can now be used in almost all areas of the face,
                            however, the intricate work of a needle should not be underestimated and still remains a more effective
                            choice in certain areas. Thus the will focus on the introduction and uses of cannula but also the combination
                            technique of using both needle and cannula work for obtaining maximum results; a gold standard approach for
                            many aesthetic practitioners today.</p>
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div className="space-y-4">
                          <p className="text-gray-300 mt-4">
                            <h4 className="text-lg font-semibold text-silver-300 mb-3">Who Should Attend</h4>
                            <p className="mb-2">This course is suited to practitioners who have already completed their Foundation Botox and Dermal filler Course and looking for the next career step in Aesthetic Medicine. It is possible to include any specific procedures or difficulties that delegates would like covered, just please inform us in advance. Additionally, we are happy for individuals to bring their own models if they wish to do so.</p>
                            <ul className="space-y-2 text-gray-300">
                        {[
                          'Doctors/GPs',
                          'Dentists',
                          'Registered Nurses'
                        ].map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-silver-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                          </p>
                        </div>
                        <p className="text-gray-300 mt-4">
                          <h4 className="text-lg font-semibold text-silver-300 mb-3">Course Information</h4>
                          <p className="mb-2">The theory will cover a comprehensive level of anatomy, consultation and examination, facial mapping and techniques and learning how to manage complications. You will also be taught how to assess the client from a holistic approach, using a combination of botulinum toxin and dermal fillers to achieve optimal results tailored to each client. We will also guide you and provide career counseling.</p>
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-300 mb-4">
                      The hands-on practical will be supervised by one of our expert aesthetic trainers. On successful completion of your training, you will be provided with a certificate of attendance and complimentary support pack.
                      </p>                   
                      <p className="text-gray-300 mt-4">
                      Many of our foundation course delegates supplement and further their training by signing up to our popular Advanced Dermal Filler with Cannula training course.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="curriculum">
                <Card className="p-6">
                  <h3 className="text-2xl font-semibold text-silver-200 mb-6">Two simple steps to start your Aesthetic Career</h3>
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="bg-silver-900/50 px-4 py-2 rounded-lg">
                        <h4 className="text-xl font-semibold text-silver-200">Part 1.</h4>
                      </div>
                      <h5 className="text-lg font-semibold text-silver-300">Online modules (£125)</h5>
                    </div>
                    <div>
                      <div className="space-y-6">
                        <div>
                          <ul className="space-y-2 text-gray-300">
                            {[
                              'Botulinum toxin for bruxism, TMJ & Wide Jaw',
                              'Cannula 101',
                              'Mid & Lower Face Botox Injections'
                              
                            ].map((technique) => (
                              <li key={technique} className="flex items-center gap-2">
                                <Check className="h-5 w-5 text-silver-400" />
                                {technique}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <a href='https://www.harleystreetinstitute.com/bundles?bundle_id=botulinum-toxin-for-wide-jaw-tmj-bruxism' target='blank'>
                          <Button size="lg" className="bg-silver-600 hover:bg-silver-700 text-white w-full sm:w-auto">
                            Start Learning
                          </Button></a>
                      </div>
                        <div className="flex items-center gap-4">
                          <div className="bg-silver-900/50 px-4 py-2 rounded-lg">
                            <h4 className="text-xl font-semibold text-silver-200">Part 2.</h4>
                          </div>
                          <h5 className="text-lg font-semibold text-silver-300">Practical Day (£1190 + VAT)</h5>
                        </div>

                        <div className="space-y-6">
                        <div>
                          <ul className="space-y-2 text-gray-300">
                            {[
                              
                              'Cannula Introduction',
                              'Peri – Oral Rejuvenation',
                              'Advanced Botox Injections'
                              
                            ].map((technique) => (
                              <li key={technique} className="flex items-center gap-2">
                                <Check className="h-5 w-5 text-silver-400" />
                                {technique}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-8">
                        <a href='https://med.as.me/hsi-short-courses' target='blank'>
                          <Button size="lg" className="bg-silver-600 hover:bg-silver-700 text-white w-full sm:w-auto">
                          Book Practical Day
                          </Button></a>
                      </div></div>
                      <div className="grid md:grid-cols-2 gap-8 mt-8">
                          <div className="space-y-4">
                            <ul className="space-y-2 text-gray-300">
                            <h6 className="text-base font-semibold text-silver-300 mb-2">Advanced Botulinum Toxin Treatments Training:</h6>
                              {[
                                'DAO (downturned smile)',
                                'Nefertiti / Platysmal Bands (neck cords)',
                                'Mentalis (chin)',
                                'Masseter Reduction (jaw)',
                                'Brow Lift',
                                'Bunny Lines',
                                'Hyperhidrosis (underarms – no models)',
                                'Combining Treatments With Dermal Fillers'
                                
                              ].map((technique) => (
                                <li key={technique} className="flex items-center gap-2">
                                  <Check className="h-5 w-5 text-silver-400" />
                                  {technique}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <ul className="space-y-2 text-gray-300">
                          <h6 className="text-base font-semibold text-silver-300 mb-2">Advanced Dermal Fillers Training:</h6>
                            {[
                              'Cannula Use',
                              'Perioral and Advanced Lip Treatments',
                              'Proficiency At Filling Facial Lines (Mid & Deep Dermis)',
                              'Volumising Oral Commissures and Downturned Lip Corners',
                              'Combining Dermal Fillers With Botox',
                              'Managing Complications',
                              'Hyperhidrosis (underarms – no models)',
                              'Hyaluronidase Reconstitution and Injection Technique'
                              
                            ].map((technique) => (
                              <li key={technique} className="flex items-center gap-2">
                                <Check className="h-5 w-5 text-silver-400" />
                                {technique}
                              </li>
                            ))}
                          </ul>
                        </div>


                      </div>

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
        <CourseSearch />
        <CourseFAQ />
      </main>
    </>
  )
}