import { FileText, Book, Newspaper, Lightbulb, Building2, TrendingUp, FileDown, FileImage } from 'lucide-react'

export const journalData = {
  featured: [
    {
      title: "The Future of Aesthetic Medicine: Trends to Watch in 2024",
      excerpt: "Discover the emerging trends and technologies shaping the future of aesthetic medicine, from AI-powered consultations to advanced treatment combinations.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
      category: "Industry Trends",
      date: "March 15, 2024"
    },
    {
      title: "Mastering Patient Consultations: A Comprehensive Guide",
      excerpt: "Learn the art of conducting effective patient consultations, from initial assessment to managing expectations and ensuring satisfaction.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
      category: "Practice Management",
      date: "March 12, 2024"
    },
    {
      title: "Advanced Injection Techniques: Tips from Industry Experts",
      excerpt: "Top aesthetic practitioners share their insights on advanced injection techniques for optimal results and patient satisfaction.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
      category: "Clinical Skills",
      date: "March 10, 2024"
    }
  ],
  news: [
    {
      title: "New Guidelines for Aesthetic Practitioners Released",
      date: "March 16, 2024"
    },
    {
      title: "Breakthrough in Dermal Filler Technology Announced",
      date: "March 14, 2024"
    },
    {
      title: "Industry Conference: Aesthetic Excellence 2024",
      date: "March 13, 2024"
    },
    {
      title: "Research Shows Growing Demand for Non-Surgical Treatments",
      date: "March 11, 2024"
    }
  ],
  categories: [
    { name: "Clinical Protocols", icon: FileText },
    { name: "Business Tips", icon: TrendingUp },
    { name: "Research", icon: Book },
    { name: "News", icon: Newspaper },
    { name: "Tips & Advice", icon: Lightbulb },
    { name: "Practice Building", icon: Building2 }
  ],
  downloads: [
    {
      title: "Clinical Guidelines 2024",
      size: "2.4 MB",
      icon: FileDown
    },
    {
      title: "Treatment Protocols",
      size: "1.8 MB",
      icon: FileDown
    },
    {
      title: "Marketing Templates",
      size: "3.2 MB",
      icon: FileImage
    }
  ]
}