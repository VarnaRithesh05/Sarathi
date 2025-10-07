import type { Metadata } from 'next'
import { Header } from '@/components/app/header'
import { AdminNav } from '@/components/app/admin-nav'
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarInset,
} from '@/components/ui/sidebar'
import Chatbot from '@/components/app/chatbot'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { User } from 'lucide-react'

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
          <Header />
          <main className="flex-1 p-4 sm:p-6">{children}</main>
          <div className="absolute bottom-24 right-6 z-10 sm:bottom-6 sm:right-24">
             <Button asChild variant="outline" size="sm">
              <Link href="/dashboard">
                <User className="mr-2 h-4 w-4" />
                Victim View
              </Link>
            </Button>
          </div>
          <Chatbot />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
