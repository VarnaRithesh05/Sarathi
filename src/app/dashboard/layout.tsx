'use client' // Required to use usePathname hook

import { usePathname } from 'next/navigation'
import { Header } from '@/components/app/header'
import { MainNav } from '@/components/app/main-nav'
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarInset,
  SidebarRail,
} from '@/components/ui/sidebar'
import Chatbot from '@/components/app/chatbot'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShieldCheck } from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAdminPage = pathname.startsWith('/dashboard/admin')

  // If it's an admin page, the admin layout will handle the UI.
  // We render the children directly to avoid nested sidebars.
  if (isAdminPage) {
    return <>{children}</>
  }

  // Otherwise, render the standard user dashboard layout.
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarContent>
          <MainNav />
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1 p-4 sm:p-6">{children}</main>
          <div className="absolute bottom-24 right-6 z-10 sm:bottom-6 sm:right-24">
            <Button asChild variant="outline" size="sm">
              <Link href="/dashboard/admin">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Admin View
              </Link>
            </Button>
          </div>
          <Chatbot />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
