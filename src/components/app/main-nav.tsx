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
  FilePlus,
  LifeBuoy,
  Handshake,
  MessageSquareWarning,
  HeartHandshake,
} from 'lucide-react'
import SaarathiLogo from './saarathi-logo'

const links = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/cases', label: 'My Cases', icon: FileText },
  { href: '/dashboard/register-case', label: 'Register New Case', icon: FilePlus },
  { href: '/dashboard/inter-caste-marriage', label: 'Inter-Caste Marriage', icon: HeartHandshake },
  { href: '/dashboard/grievance', label: 'My Grievances', icon: MessageSquareWarning },
  { href: '/dashboard/support', label: 'Support Network', icon: LifeBuoy },
  { href: '/dashboard/schemes', label: 'Welfare Schemes', icon: Handshake },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
            <SaarathiLogo />
            <div>
                <h2 className="font-headline text-lg font-semibold text-sidebar-foreground">
                    Saarathi
                </h2>
                <p className="text-xs text-sidebar-foreground/70">Beneficiary Platform</p>
            </div>
        </div>
      </SidebarHeader>

      <SidebarMenu className="flex-1 p-2">
        {links.map((link) => (
          <SidebarMenuItem key={link.href}>
            <SidebarMenuButton
              asChild
              isActive={pathname === link.href || (link.href !== '/dashboard' && pathname.startsWith(link.href))}
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
