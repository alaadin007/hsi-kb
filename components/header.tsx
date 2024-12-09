"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '#courses' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar */}
      <div className="bg-black/90 border-b border-silver-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:+442071234567" className="flex items-center text-gray-300 hover:text-silver-200">
                <Phone className="h-4 w-4 mr-2" />
                +44 (0) 20 7123 4567
              </a>
              <a href="mailto:info@harleystreetinstitute.com" className="flex items-center text-gray-300 hover:text-silver-200">
                <Mail className="h-4 w-4 mr-2" />
                info@harleystreetinstitute.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="link" className="text-gray-300 hover:text-silver-200">
                Student Login
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={cn(
        "transition-all duration-200",
        scrolled 
          ? "bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-silver-200 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-silver-400 transition-all group-hover:w-full" />
                </Link>
              ))}
              <Button 
                variant="outline" 
                className="border-silver-400 text-silver-300 hover:bg-silver-500/10 hover:border-silver-300"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden fixed inset-x-0 top-[73px] bg-black/95 border-b border-silver-500/20 transition-all duration-300 ease-in-out backdrop-blur-md",
            mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          )}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-silver-200 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="outline" 
              className="w-full border-silver-400 text-silver-300 hover:bg-silver-500/10"
            >
              Book Now
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}