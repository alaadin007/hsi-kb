"use client"

import { Header } from '@/components/header'
import { CourseBanner } from '@/components/course-banner'
import { CourseContent } from '@/components/course-content'
import { CourseSearch } from '@/components/course-search'
import { CourseFAQ } from '@/components/course-faq'

export default function FoundationCoursePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <CourseBanner />
        <CourseContent />
        <CourseSearch />
        <CourseFAQ />
      </main>
    </>
  )
}