import { CaseTable } from './components/case-table'
import { mockCases } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { FilePlus } from 'lucide-react'
import Link from 'next/link'

export default function CasesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            Case Management
          </h1>
          <p className="text-muted-foreground">
            View, manage, and track all registered cases.
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/register-case">
            <FilePlus />
            New Case
          </Link>
        </Button>
      </div>

      <CaseTable data={mockCases} />
    </div>
  )
}
