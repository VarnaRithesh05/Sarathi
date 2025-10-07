import { SidebarTrigger } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { UserNav } from '@/components/app/user-nav'
import { Bell } from 'lucide-react'
import Link from 'next/link'

const SarathiLogo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-primary"
    >
      <path d="M12 22s-8-4-8-10V5l8-3 8 3v7c0 6-8 10-8 10z"></path>
      <circle cx="12" cy="12" r="3"></circle>
      <line x1="12" y1="9" x2="12" y2="2.5"></line>
      <line x1="12" y1="15" x2="12" y2="21.5"></line>
      <line x1="15.5" y1="13.25" x2="21.5" y2="13.25"></line>
      <line x1="8.5" y1="13.25" x2="2.5" y2="13.25"></line>
      <line x1="15.5" y1="10.75" x2="21.5" y2="10.75"></line>
      <line x1="8.5" y1="10.75" x2="2.5" y2="10.75"></line>
    </svg>
  );

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex-1">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="hidden md:block">
            <SarathiLogo />
          </div>
          <h1 className="hidden text-2xl font-headline font-semibold text-primary md:block">
            Sarathi
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
