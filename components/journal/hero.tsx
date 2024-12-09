"use client"

import { SearchBar } from '@/components/search-bar'

export function JournalHero() {
  return (
    <section className="relative bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto pt-40 pb-20"> {/* Increased top padding */}
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-silver-200 to-silver-400">
            The Aesthetic Medicine Journal
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Expert insights, industry news, and practical guides for aesthetic practitioners
          </p>
          <SearchBar />
        </div>
      </div>
    </section>
  )
}