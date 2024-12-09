"use client"

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Clock, GraduationCap, Syringe, Brain, Flask, Microscope, Award, Sparkles } from 'lucide-react'
import Link from 'next/link'

interface CourseCardProps {
  title: string
  description: string
  duration: string
  price: string
  level: string
  image?: string
  slug?: string
}

const levelColors = {
  'Beginner': 'bg-emerald-500/20 text-emerald-300',
  'Intermediate': 'bg-blue-500/20 text-blue-300',
  'Advanced': 'bg-purple-500/20 text-purple-300',
  'Expert': 'bg-amber-500/20 text-amber-300'
}

const categoryIcons = {
  'Foundation': Syringe,
  'Botox': Brain,
  'Advanced': Flask,
  'Polynucleotides': Microscope,
  'Certificate': Award,
  'Masterclass': Sparkles
}

function getCategoryIcon(title: string) {
  for (const [key, Icon] of Object.entries(categoryIcons)) {
    if (title.toLowerCase().includes(key.toLowerCase())) {
      return Icon
    }
  }
  return GraduationCap
}

export function CourseCard({ title, description, duration, price, level, image, slug }: CourseCardProps) {
  const Icon = getCategoryIcon(title)
  const levelColorClass = levelColors[level as keyof typeof levelColors] || 'bg-gray-500/20 text-gray-300'

  return (
    <Card className="w-[300px] bg-gray-900/50 border-silver-600/20 hover:border-silver-600/40 transition-all group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img 
          src={image || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"} 
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 z-20">
          <div className="p-2 rounded-full bg-gray-900/80 backdrop-blur-sm border border-silver-400/20">
            <Icon className="h-6 w-6 text-silver-300" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-silver-200 mb-2 line-clamp-2 min-h-[3.5rem]">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
          {description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-silver-400" />
            <span className="text-sm text-gray-300">{duration}</span>
          </div>
          <span className={`text-sm px-2 py-1 rounded-full ${levelColorClass}`}>
            {level}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-silver-200">{price}</span>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="border-silver-400 text-silver-300 hover:bg-silver-500/10">
                Quick View
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <img 
                  src={image || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"} 
                  alt={title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="text-gray-300">{description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="text-silver-200">{duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Level</p>
                    <p className="text-silver-200">{level}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Price</p>
                    <p className="text-silver-200">{price}</p>
                  </div>
                </div>
                {slug && (
                  <Button className="w-full" asChild>
                    <Link href={`/courses/${slug}`}>Full Course Page</Link>
                  </Button>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Card>
  )
}