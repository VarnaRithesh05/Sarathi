import type { Metadata } from 'next'
import { AdminNav } from '@/components/app/admin-nav'
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import Chatbot from '@/components/app/chatbot'
import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'
import { UserNav } from '@/components/app/user-nav'


export const metadata: Metadata = {
  title: 'Admin Dashboard | Saarathi',
  description: 'Admin panel for Saarathi victim support platform.',
}

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <AdminNav />
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div className="relative flex min-h-dvh flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
            <SidebarTrigger className="md:hidden" />
            <div className="flex-1" />
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" aria-label="Notifications">
                <Bell className="h-5 w-5" />
              </Button>
              <UserNav />
            </div>
          </header>
          <main className="flex-1 p-4 sm:p-6">{children}</main>
          <Chatbot />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
