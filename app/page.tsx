import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroBanner } from '@/components/hero-banner'
import { WhyChooseUs } from '@/components/why-choose-us'
import { CourseCategories } from '@/components/course-categories'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <HeroBanner />
        <CourseCategories />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  )
}