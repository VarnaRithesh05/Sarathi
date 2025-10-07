import { SidebarTrigger } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { UserNav } from '@/components/app/user-nav'
import { Bell } from 'lucide-react'
import Link from 'next/link'

const SaarathiLogo = () => (
    <svg
      viewBox="0 0 120 120"
      className="h-8 w-8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#2c5282', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#4299e1', stopOpacity: 1}} />
        </linearGradient>
        <linearGradient id="grad-orange" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: '#dd6b20', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#f6ad55', stopOpacity: 1}} />
        </linearGradient>
        <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
      </defs>
      {/* <!-- Top sheltering hands --> */}
      <path
        d="M 20 50 C 20 20, 40 10, 60 10 C 80 10, 100 20, 100 50 L 90 50 C 90 30, 75 20, 60 20 C 45 20, 30 30, 30 50 Z"
        fill="url(#grad-blue)"
      />
      {/* <!-- Bottom supportive hands --> */}
      <path
        d="M 20 70 C 20 100, 40 110, 60 110 C 80 110, 100 100, 100 70 L 90 70 C 90 90, 75 100, 60 100 C 45 100, 30 90, 30 70 Z"
        fill="url(#grad-orange)"
      />
      {/* <!-- Center glowing orb --> */}
      <circle cx="60" cy="60" r="8" fill="#FBBF24" filter="url(#glow)" />
    </svg>
);

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex-1">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="hidden md:block">
            <SaarathiLogo />
          </div>
          <h1 className="hidden text-xl font-headline font-semibold md:block" style={{color: '#1A202C'}}>
            Saarathi
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-5 w-5" />
          <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent" />
        </Button>
        <UserNav />
      </div>
    </header>
  )
}
