"use client"
import { Header } from '@/components/header'
import { CourseBanner } from '@/components/course-banner-botox-training-medical-prof'
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
                    <h3 className="text-2xl font-semibold text-silver-200 mb-6">Harley Street Botox Course</h3>
                      <h4 className="text-lg font-semibold text-silver-300 mb-3">Intense Aesthetic Courses</h4>
                      <p className="text-gray-300 mt-4">
                        <p className="mb-2">Almost all Foundation Day Courses are aimed at doctors, dentists, nurses, pharmacists, and other healthcare professionals looking to start their career in Aesthetic Medicine. However, we’ve designed a Botox-only course specifically for those who want to focus on Botox without learning treatments that may not be relevant to their practice at this stage, such as dermal fillers.</p>
                        <p className="mb-2">Introducing our Botox-Only Course—ideal for dentists looking to expand their services with treatments for conditions like bruxism or migraines, or for any healthcare professional who wishes to specialize in Botox treatments alone.</p>
                        <p className="mb-2">As with all our courses, we adopt a hybrid approach, allowing for self-paced learning through a combination of e-learning modules and a one-day practical session. The e-learning modules are filled with pre-recorded video demonstrations, detailed graphic images, and diagrams to support your learning.</p>
                        On the practical day, participants will apply their theoretical knowledge in hands-on training with live models, ensuring they gain real-world experience and confidence in Botox administration.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-silver-200 mb-4">Botox Course by Mentorship</h3>
                      <p className="text-gray-300 mb-4">
                        Harley Street Institute is powered by a team of experienced and skilled industry experts who are passionate about what they do.
                        These mentors are committed to shaping a safer and quality future of Aesthetic Medicine.
                      </p>
                      <h4 className="text-lg font-semibold text-silver-300 mb-3">Foundation Botox and Fillers Course offer you:</h4>
                      <ul className="space-y-2 text-gray-300">
                        {[
                          'Small sized (4:1) trainee to trainer ratio',
                          'Bespoke courses and training',
                          'Accredited course developed in line with HEE, JCCP and CQC standards',
                          'CPD certified courses for a wide range of medical and healthcare professionals',
                          'A platform to build and expand professional networks within aesthetics'
                        ].map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-silver-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <p className="text-gray-300 mt-4">
                        Our unique approach to aesthetic training has enabled and empowered the delegates to launch their independent practice right away; over 90% start the practice immediately afterwards
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="curriculum">
                <Card className="p-6">
                  <h3 className="text-2xl font-semibold text-silver-200 mb-6">Botox Only Course for Medical Professionals (12 CPD) </h3>
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="bg-silver-900/50 px-4 py-2 rounded-lg">
                        <h4 className="text-xl font-semibold text-silver-200">Part 1.</h4>
                      </div>
                      <h5 className="text-lg font-semibold text-silver-300">Online Modules</h5>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-silver-200 mb-3">Pre-requisite Botox Course Online Modules (7+ CPD)</h5>
                      <h6 className="text-base font-semibold text-silver-300 mb-2">Understand aesthetic terminology, ageing process & anatomy as well as pharmacodynamics of drugs used in practice.</h6>
                      <div className="space-y-6">
                        <div>
                          <ul className="space-y-2 text-gray-300">
                            {[
                              'Facial Ageing Overview',
                              'Facial Assessment & Consultation',
                              'Botulinum Toxin Fundamentals',
                              'Botulinum Toxin Reconstitution',
                              'Upper Face Botulinum Toxin Injections',
                              'Foundation Day Trainers Guidelines',
                              'Upper Face Botulinum Toxin Injections'
                            ].map((technique) => (
                              <li key={technique} className="flex items-center gap-2">
                                <Check className="h-5 w-5 text-silver-400" />
                                {technique}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="bg-silver-900/50 px-4 py-2 rounded-lg">
                            <h4 className="text-xl font-semibold text-silver-200">Part 2.</h4>
                          </div>
                          <h5 className="text-lg font-semibold text-silver-300">Practical Day</h5>
                        </div>
                        <h6 className="text-base font-semibold text-silver-300 mb-2">What you will Learn on this Botox Only Course:</h6>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <ul className="space-y-2 text-gray-300">
                              {[
                                'How to mix botox',
                                'The Aesthetic Consultation',
                                'Aesthetic Photography',
                                'What is the treatment protocol and plan for people having Botox?',
                                'How to asses suitability of the masseter muscle for botox',
                                'Learn to categorise according to masseter size',
                                'How to Administer Botox for Areas Taught',
                                'Gummy smiles',
                                'Droopy Lips',
                                'Crumpled Chin'
                              ].map((technique) => (
                                <li key={technique} className="flex items-center gap-2">
                                  <Check className="h-5 w-5 text-silver-400" />
                                  {technique}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <ul className="space-y-2 text-gray-300">
                            {[
                              'Bruxism',
                              'Migraines',
                              'Frown lines',
                              'Crows feet',
                              'Forehead lines',
                              'Bunny lines',
                              'What are the correct doses per area per gender',
                              'How to administer – and receive 1:1 Feedback',
                              'Common and rare complications – and How to Avoid',
                              'Marketing Strategy and how to attract clients'
                            ].map((technique) => (
                              <li key={technique} className="flex items-center gap-2">
                                <Check className="h-5 w-5 text-silver-400" />
                                {technique}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <a href='https://med.as.me/botox-only-course' target='blank'>
                          <Button size="lg" className="bg-silver-600 hover:bg-silver-700 text-white w-full sm:w-auto">
                            Book Course Now
                          </Button></a>
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