"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { SearchBar } from '@/components/search-bar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Articles', href: '/journal/articles' },
  { name: 'News', href: '/journal/news' },
  { name: 'Tips', href: '/journal/tips' },
  { name: 'Classified', href: '/journal/classified' },
  { name: 'Jobs', href: '/journal/jobs' },
  { name: 'Home', href: '/' },
]

export function JournalHeader() {
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

            {/* Search Bar */}
            <div className="hidden lg:block flex-1 max-w-xl mx-8">
              <SearchBar />
            </div>

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
            <div className="mb-4">
              <SearchBar />
            </div>
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
          </div>
        </div>
      </nav>
    </header>
  )
}