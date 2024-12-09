"use client"

interface SpotlightSectionProps {
  title: string
  description: string
  downloadLink?: string
}

export function SpotlightSection({ title, description, downloadLink }: SpotlightSectionProps) {
  return (
    <div className="pt-8 border-t border-silver-600/20">
      <h4 className="text-xl font-semibold text-silver-200 mb-4">{title}</h4>
      <p className="text-gray-300 mb-4">{description}</p>
      {downloadLink && (
        <a 
          href={downloadLink} 
          className="text-silver-400 hover:text-silver-300 underline"
        >
          Download Here
        </a>
      )}
    </div>
  )
}