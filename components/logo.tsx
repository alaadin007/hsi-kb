import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-white uppercase tracking-wide">
          Harley Street
        </span>
        <span className="text-sm text-silver-400 tracking-wider -mt-1">
          Institute
        </span>
      </div>
    </Link>
  )
}