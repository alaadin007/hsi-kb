"use client"

import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const reviews = [
  {
    author_name: "Sarah Johnson",
    rating: 5,
    text: "Excellent training program! The hands-on experience and expert guidance were invaluable. Highly recommend for any medical professional looking to enter aesthetic medicine.",
    relative_time_description: "2 weeks ago"
  },
  {
    author_name: "Dr. Michael Chen",
    rating: 5,
    text: "The Foundation Botox course was comprehensive and well-structured. The small group size ensured plenty of individual attention. Great investment in my professional development.",
    relative_time_description: "1 month ago"
  },
  {
    author_name: "Emma Williams",
    rating: 5,
    text: "Outstanding training facility and expert instructors. The practical sessions were particularly helpful. I feel confident starting my aesthetic practice after completing their courses.",
    relative_time_description: "3 weeks ago"
  },
  {
    author_name: "Dr. James Smith",
    rating: 5,
    text: "World-class training in aesthetic medicine. The instructors are highly experienced and the facilities are top-notch. Worth every penny.",
    relative_time_description: "1 week ago"
  }
]

export function ReviewsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="py-12 bg-gray-900/50 border-t border-b border-silver-600/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-silver-200 mb-2">What Our Students Say</h3>
          <p className="text-gray-400">Read reviews from medical professionals who trained with us</p>
        </div>

        <div className="relative group">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          >
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="flex-none w-[400px] p-6 bg-gray-900/90 border-silver-600/20 hover:border-silver-600/40 transition-colors"
              >
                <Quote className="h-8 w-8 text-silver-400 mb-4" />
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 line-clamp-3">{review.text}</p>
                <div className="mt-auto">
                  <p className="font-semibold text-silver-200">{review.author_name}</p>
                  <p className="text-sm text-gray-400">{review.relative_time_description}</p>
                </div>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900/90 border-silver-300/20"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900/90 border-silver-300/20"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/your-business-id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-silver-400 hover:text-silver-300 underline text-sm"
          >
            View all Google Reviews
          </a>
        </div>
      </div>
    </div>
  )
}