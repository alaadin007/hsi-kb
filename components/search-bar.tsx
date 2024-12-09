"use client"

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { SearchOverlay } from '@/components/search-overlay'

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      setIsOverlayOpen(true)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="relative max-w-3xl mx-auto">
        <div className="relative">
          <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search for anything aesthetics (courses, tips, handling complications, practice building)"
            className="pl-14 text-white"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>

      <SearchOverlay 
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
        searchQuery={query}
      />
    </>
  )
}