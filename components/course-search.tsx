"use client"

import { SearchBar } from '@/components/search-bar'

export function CourseSearch() {
  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-silver-200 mb-4">
              Have Questions About This Course?
            </h2>
            <p className="text-gray-300 mb-8">
              Get instant AI-powered answers about course content, requirements, and more
            </p>
          </div>
          <SearchBar />
        </div>
      </div>
    </section>
  )
}