"use client"

import { Logo } from '@/components/logo'
import { ReviewsSlider } from '@/components/reviews-slider'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
  courses: [
    { name: 'Beginner Courses', href: '#' },
    { name: 'Master Classes', href: '#' },
    { name: 'Combined Programmes', href: '#' },
    { name: 'Online Courses', href: '#' }
  ],
  resources: [
    { name: 'The Journal', href: '/journal' },
    { name: 'Downloads', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Student Portal', href: '#' }
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' }
  ]
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Youtube', icon: Youtube, href: '#' }
]

export function Footer() {
  return (
    <footer className="bg-gray-900">
      {/* Reviews Section */}
      <ReviewsSlider />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-400">
              Premier aesthetic medicine training institute providing expert-led courses in London.
            </p>
            <div className="space-y-3">
              <a href="tel:+442071234567" className="flex items-center text-gray-400 hover:text-silver-300">
                <Phone className="h-4 w-4 mr-2" />
                +44 (0) 20 7123 4567
              </a>
              <a href="mailto:info@harleystreetinstitute.com" className="flex items-center text-gray-400 hover:text-silver-300">
                <Mail className="h-4 w-4 mr-2" />
                info@harleystreetinstitute.com
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <span>Harley Street, London, W1G</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-silver-200 font-semibold mb-6">Courses</h4>
            <ul className="space-y-4">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-silver-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-silver-200 font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-silver-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-silver-200 font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-silver-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-silver-600/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Harley Street Institute. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-silver-300 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}