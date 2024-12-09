import { courseData } from '@/lib/course-data'
import { CourseSlider } from '@/components/course-slider'
import { SearchBar } from '@/components/search-bar'

export function CourseCategories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 py-8 bg-gray-900/30 rounded-xl backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-xl text-silver-200 mb-2">Find Your Perfect Course</h3>
            <p className="text-gray-400">Search our comprehensive range of courses and get AI-powered answers to your questions</p>
          </div>
          <SearchBar />
        </div>

        <h2 className="text-3xl font-bold text-center mb-12 text-silver-200">Our Aesthetic Courses</h2>
        <div className="space-y-12">
          <CourseSlider title="Beginner Courses" courses={courseData.beginners} />
          <CourseSlider title="Master Classes" courses={courseData.masterClasses} />
          <CourseSlider title="Combined Programmes" courses={courseData.combinedProgrammes} />
          <CourseSlider title="Online Courses" courses={courseData.onlineCourses} />
        </div>
      </div>
    </section>
  )
}