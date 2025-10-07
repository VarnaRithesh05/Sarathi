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

const SaarathiLogo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7 text-primary"
    >
      <path d="M9.5 3.5c1.21-1.21 3.07-1.21 4.28 0l6.16 6.16a3 3 0 0 1 0 4.28l-6.16 6.16a3 3 0 0 1-4.28 0L3.34 13.94a3 3 0 0 1 0-4.28z" />
      <path d="m14 9-4 4" />
      <path d="m9 9 5 5" />
      <path d="M12 22s-8-4-8-10V5l8-3 8 3v7c0 6-8 10-8 10z" />
    </svg>
  );

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
        <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <SaarathiLogo />
            </div>
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
