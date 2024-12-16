"use client"

import { Logo } from '@/components/logo'
import { SearchBar } from '@/components/search-bar'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react'

export function Footer() {
  const navigation = {
    courses: [
      { name: 'Beginner Courses', href: '#' },
      { name: 'Master Classes', href: '#' },
      { name: 'Combined Programmes', href: '#' },
      { name: 'Online Courses', href: '#' },
    ],
    support: [
      { name: 'Contact Us', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Student Login', href: '#' },
      { name: 'Resources', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Testimonials', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
    ],
    social: [
      { name: 'Facebook', icon: Facebook, href: '#' },
      { name: 'Twitter', icon: Twitter, href: '#' },
      { name: 'Instagram', icon: Instagram, href: '#' },
      { name: 'YouTube', icon: Youtube, href: '#' },
    ],
  }

  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Search Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl text-silver-200 mb-2">Have Questions?</h3>
            <p className="text-gray-400">Search our comprehensive knowledge base or contact us directly</p>
          </div>
          <SearchBar />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-12">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-400 max-w-md">
              London's premier institute for aesthetic medicine training. Expert-led courses designed for medical professionals.
            </p>
            <div className="mt-6 space-y-2">
              <a href="tel:+442071234567" className="flex items-center text-gray-400 hover:text-silver-200">
                <Phone className="h-5 w-5 mr-2" />
                +44 (0) 20 7123 4567
              </a>
              <a href="mailto:info@harleystreetinstitute.com" className="flex items-center text-gray-400 hover:text-silver-200">
                <Mail className="h-5 w-5 mr-2" />
                info@harleystreetinstitute.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-silver-200 font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              {navigation.courses.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-silver-200">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-silver-200 font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-silver-200">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-silver-200 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-silver-200">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-silver-200"
                  >
                    <item.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Harley Street Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}