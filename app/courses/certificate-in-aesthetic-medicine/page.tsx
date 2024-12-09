"use client"

import { Header } from '@/components/header'
import { CAMCourseBanner } from '@/components/cam-course-banner'
import { CAMCourseContent } from '@/components/cam-course-content'
import { CourseFAQ } from '@/components/course-faq'

export default function CAMCoursePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <CAMCourseBanner />
        <CAMCourseContent />
        <CourseFAQ />
      </main>
    </>
  )
}