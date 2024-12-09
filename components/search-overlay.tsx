"use client"

import { useEffect } from 'react'
import { X } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
  searchQuery: string
}

export function SearchOverlay({ isOpen, onClose, searchQuery }: SearchOverlayProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <Card className="w-full max-w-4xl mx-auto bg-gray-900/90 border-silver-600/20">
          <div className="flex items-center justify-between p-4 border-b border-silver-600/20">
            <h2 className="text-xl font-semibold text-silver-200">
              Search Results for "{searchQuery}"
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-silver-300 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-6">
            {/* Add AI-powered search results here */}
            <p className="text-gray-400">
              Searching for relevant content...
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}