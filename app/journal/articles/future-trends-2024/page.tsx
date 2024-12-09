"use client"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArticleContent } from '@/components/journal/article-content'

export default function TrendsArticlePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <ArticleContent />
      </main>
      <Footer />
    </>
  )
}