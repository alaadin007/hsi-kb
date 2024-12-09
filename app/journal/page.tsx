"use client"

import { JournalHeader } from '@/components/journal/header'
import { Footer } from '@/components/footer'
import { JournalHero } from '@/components/journal/hero'
import { JournalGrid } from '@/components/journal/grid'
import { Conferences } from '@/components/journal/conferences'

export default function JournalPage() {
  return (
    <>
      <JournalHeader />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <JournalHero />
        <JournalGrid />
        <Conferences />
      </main>
      <Footer />
    </>
  )
}