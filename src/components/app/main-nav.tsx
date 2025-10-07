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

const SarathiLogo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M12 22s-8-4-8-10V5l8-3 8 3v7c0 6-8 10-8 10z"></path>
      <circle cx="12" cy="12" r="3"></circle>
      <line x1="12" y1="9" x2="12" y2="2.5"></line>
      <line x1="12" y1="15" x2="12" y2="21.5"></line>
      <line x1="15.5" y1="13.25" x2="21.5" y2="13.25"></line>
      <line x1="8.5" y1="13.25" x2="2.5" y2="13.25"></line>
      <line x1="15.5" y1="10.75" x2="21.5" y2="10.75"></line>
      <line x1="8.5" y1="10.75" x2="2.5" y2="10.75"></line>
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
                <SarathiLogo />
            </div>
            <div>
                <h2 className="font-headline text-lg font-semibold text-sidebar-foreground">
                    Sarathi
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
