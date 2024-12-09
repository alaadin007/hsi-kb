"use client"

import { Card } from '@/components/ui/card'
import { journalData } from '@/lib/journal-data'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export function JournalGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Main Featured Article */}
        <div className="mb-16">
          <Card className="overflow-hidden hover:border-silver-600/40 transition-colors">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-[4/3] relative">
                <img 
                  src={journalData.featured[0].image} 
                  alt={journalData.featured[0].title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-sm text-silver-400 mb-2">{journalData.featured[0].category}</span>
                <h2 className="text-3xl font-bold text-silver-200 mb-4">{journalData.featured[0].title}</h2>
                <p className="text-gray-400 mb-6">{journalData.featured[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{journalData.featured[0].date}</span>
                  <a href="#" className="inline-flex items-center text-silver-400 hover:text-silver-300">
                    Read Article <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Multi-Column Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* News Column */}
          <div className="col-span-12 md:col-span-3 space-y-6">
            <h3 className="text-xl font-semibold text-silver-200 mb-4">Latest News</h3>
            {journalData.news.map((item, index) => (
              <Card 
                key={index} 
                className="p-4 hover:border-silver-600/40 transition-colors cursor-pointer group"
              >
                <span className="text-sm text-silver-400">{item.date}</span>
                <h4 className="text-lg font-semibold text-silver-200 mt-1 group-hover:text-silver-300 transition-colors">
                  {item.title}
                </h4>
              </Card>
            ))}
          </div>

          {/* Articles Column */}
          <div className="col-span-12 md:col-span-6 space-y-8">
            {journalData.featured.slice(1).map((article, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:border-silver-600/40 transition-colors group cursor-pointer"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-silver-400">{article.category}</span>
                    <h3 className="text-xl font-semibold text-silver-200 mt-2 mb-3 group-hover:text-silver-300 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm text-gray-500">{article.date}</span>
                      <ArrowUpRight className="h-4 w-4 text-silver-400 group-hover:text-silver-300 transition-colors" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Categories & Downloads Column */}
          <div className="col-span-12 md:col-span-3 space-y-8">
            {/* Categories */}
            <div>
              <h3 className="text-xl font-semibold text-silver-200 mb-4">Browse Topics</h3>
              <div className="grid gap-3">
                {journalData.categories.map((category, index) => (
                  <Card 
                    key={index} 
                    className="p-3 hover:border-silver-600/40 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <category.icon className="h-5 w-5 text-silver-400 group-hover:text-silver-300 transition-colors" />
                      <span className="text-silver-200 group-hover:text-silver-300 transition-colors">
                        {category.name}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Downloads */}
            <div>
              <h3 className="text-xl font-semibold text-silver-200 mb-4">Resources</h3>
              <div className="space-y-3">
                {journalData.downloads.map((item, index) => (
                  <Card 
                    key={index} 
                    className="p-4 hover:border-silver-600/40 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <item.icon className="h-6 w-6 text-silver-400 group-hover:text-silver-300 transition-colors" />
                      <div>
                        <h4 className="text-silver-200 font-semibold group-hover:text-silver-300 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-400">{item.size}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}