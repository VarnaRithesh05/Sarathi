'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const links = [
  { href: '/dashboard', label: 'Overview' },
  { href: '/dashboard/cases', label: 'My Cases' },
  { href: '/dashboard/register-case', label: 'Register New Case' },
  { href: '/dashboard/inter-caste-marriage', label: 'Inter-Caste Marriage' },
  { href: '/dashboard/grievance', label: 'My Grievances' },
  { href: '/dashboard/support', label: 'Support Network' },
  { href: '/dashboard/schemes', label: 'Welfare Schemes' },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "whitespace-nowrap transition-colors hover:text-primary",
            pathname.startsWith(link.href) ? "text-foreground font-semibold" : "text-foreground/60"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
