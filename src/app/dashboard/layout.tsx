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

export const metadata: Metadata = {
  title: 'Unity Dashboard',
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
          <Chatbot />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
