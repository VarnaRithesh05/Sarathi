'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const links = [
  { href: '/dashboard/admin', label: 'Admin Overview' },
  { href: '/dashboard/admin/cases', label: 'All Cases' },
  { href: '/dashboard/admin/grievances', label: 'Grievances'},
  { href: '/dashboard/admin/insights', label: 'Policy Insights' },
]

export function AdminNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === link.href ? "text-foreground" : "text-foreground/60"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
