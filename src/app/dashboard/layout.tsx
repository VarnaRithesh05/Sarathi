import type { Metadata } from 'next'
import { Header } from '@/components/app/header'
import { MainNav } from '@/components/app/main-nav'
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarInset,
} from '@/components/ui/sidebar'
import Chatbot from '@/components/app/chatbot'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Saarathi Dashboard',
  description: 'A unified platform for victim support and services.',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <MainNav />
        </SidebarContent>
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
