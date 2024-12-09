"use client"

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react'

const conferences = [
  {
    title: "International Aesthetic Medicine Congress",
    date: "June 15-17, 2024",
    location: "London, UK",
    attendees: "2000+ Expected",
    description: "Join leading experts for the latest in aesthetic medicine innovations, live demonstrations, and networking opportunities.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    title: "Advanced Injection Techniques Symposium",
    date: "July 8-9, 2024",
    location: "Manchester, UK",
    attendees: "500+ Expected",
    description: "Focused workshops on advanced botulinum toxin and dermal filler techniques with hands-on training sessions.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    title: "Aesthetic Business Summit",
    date: "August 22-23, 2024",
    location: "Edinburgh, UK",
    attendees: "1000+ Expected",
    description: "Essential business strategies, marketing insights, and practice management tips for aesthetic clinics.",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80",
    link: "#"
  }
]

export function Conferences() {
  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-silver-200 mb-4">Upcoming Conferences & Events</h2>
          <p className="text-gray-400">Stay updated with the latest aesthetic medicine conferences, workshops, and networking events</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conferences.map((conference, index) => (
            <Card key={index} className="overflow-hidden hover:border-silver-600/40 transition-colors">
              <div className="aspect-video relative">
                <img 
                  src={conference.image} 
                  alt={conference.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-silver-200 mb-4">{conference.title}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{conference.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>{conference.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="h-4 w-4" />
                    <span>{conference.attendees}</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-6">{conference.description}</p>

                <Button 
                  variant="outline" 
                  className="w-full border-silver-400 text-silver-300 hover:bg-silver-500/10"
                  asChild
                >
                  <a href={conference.link} className="inline-flex items-center justify-center">
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}