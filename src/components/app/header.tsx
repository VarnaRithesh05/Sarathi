import { SidebarTrigger } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { UserNav } from '@/components/app/user-nav'
import { Bell } from 'lucide-react'
import Link from 'next/link'

const SaarathiLogo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7 text-primary"
    >
      <path d="M9.5 3.5c1.21-1.21 3.07-1.21 4.28 0l6.16 6.16a3 3 0 0 1 0 4.28l-6.16 6.16a3 3 0 0 1-4.28 0L3.34 13.94a3 3 0 0 1 0-4.28z" />
      <path d="m14 9-4 4" />
      <path d="m9 9 5 5" />
      <path d="M12 22s-8-4-8-10V5l8-3 8 3v7c0 6-8 10-8 10z" />
    </svg>
  );

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex-1">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="hidden md:block">
            <SaarathiLogo />
          </div>
          <h1 className="hidden text-2xl font-headline font-semibold text-primary md:block">
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
