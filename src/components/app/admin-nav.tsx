'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  ShieldCheck,
} from 'lucide-react'

const links = [
  { href: '/dashboard/admin', label: 'Admin Overview', icon: LayoutDashboard },
  { href: '/dashboard/admin/cases', label: 'All Cases', icon: FileText },
  { href: '/dashboard/admin/insights', label: 'Policy Insights', icon: BarChart3 },
]

export function AdminNav() {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
                <h2 className="font-headline text-lg font-semibold text-sidebar-foreground">
                    Unity Admin
                </h2>
                <p className="text-xs text-sidebar-foreground/70">Official's Portal</p>
            </div>
        </div>
      </SidebarHeader>

      <SidebarMenu className="flex-1 p-2">
        {links.map((link) => (
          <SidebarMenuItem key={link.href}>
            <SidebarMenuButton
              asChild
              isActive={pathname === link.href || (link.href !== '/dashboard/admin' && pathname.startsWith(link.href))}
              tooltip={link.label}
            >
              <Link href={link.href}>
                <link.icon />
                <span>{link.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </div>
  )
}
