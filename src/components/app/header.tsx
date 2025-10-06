import { SidebarTrigger } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { UserNav } from '@/components/app/user-nav'
import { Bell } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex-1">
        <Link href="/dashboard">
          <h1 className="hidden text-2xl font-headline font-semibold text-primary md:block">
            Unity
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
