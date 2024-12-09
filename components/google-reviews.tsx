"use client"

import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'

import 'swiper/css'
import 'swiper/css/pagination'

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

export function GoogleReviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In production, this would be an API route that securely handles the Google Places API call
    const fetchReviews = async () => {
      try {
        // Simulated API response for development
        const mockReviews = [
          {
            author_name: "Dr. Sarah Johnson",
            rating: 5,
            text: "Exceptional training at Harley Street Institute! The hands-on experience with real patients and expert guidance were invaluable. Highly recommend their Foundation Botox & Fillers course.",
            relative_time_description: "2 weeks ago"
          },
          {
            author_name: "Dr. Michael Chen",
            rating: 5,
            text: "Outstanding aesthetic training program. Small group sizes ensure personalized attention, and the practical sessions are comprehensive. Worth every penny for medical professionals looking to enter aesthetics.",
            relative_time_description: "1 month ago"
          },
          {
            author_name: "Dr. Emma Williams",
            rating: 5,
            text: "The masterclass series at Harley Street Institute is phenomenal. Expert instructors, state-of-the-art facilities, and excellent post-course support. Transformed my practice completely.",
            relative_time_description: "3 weeks ago"
          }
        ]
        setReviews(mockReviews)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching Google Reviews:', error)
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  if (loading) {
    return (
      <div className="py-12 bg-gray-900/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">Loading reviews...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-silver-200 mb-2">What Our Students Say</h3>
          <p className="text-gray-400">Verified Google Reviews from medical professionals who trained with us</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Card className="p-6 h-full bg-gray-900/90 border-silver-600/20 hover:border-silver-600/40 transition-colors">
                <Quote className="h-8 w-8 text-silver-400 mb-4" />
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 line-clamp-4">{review.text}</p>
                <div className="mt-auto">
                  <div className="flex items-center gap-3">
                    {review.profile_photo_url && (
                      <img
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-silver-200">{review.author_name}</p>
                      <p className="text-sm text-gray-400">{review.relative_time_description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

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