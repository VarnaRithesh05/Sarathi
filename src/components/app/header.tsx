import { SidebarTrigger } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { UserNav } from '@/components/app/user-nav'
import { Bell } from 'lucide-react'
import Link from 'next/link'
import SaarathiLogo from './saarathi-logo'

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
          <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
        </Button>
        <UserNav />
      </div>
    </header>
  )
}
