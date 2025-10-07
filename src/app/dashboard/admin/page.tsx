import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { mockCases } from '@/lib/data'
import {
  Activity,
  AlertCircle,
  CheckCircle2,
  CircleDollarSign,
  FileText,
  Users,
} from 'lucide-react'
import { CaseTable } from '../cases/components/case-table'

export default function AdminDashboardOverviewPage() {
  const totalCases = mockCases.length;
  const pendingCases = mockCases.filter(c => c.status === 'Pending').length;
  const totalDisbursed = mockCases
    .filter(c => c.status === 'Disbursed')
    .reduce((acc, c) => acc + c.amount, 0);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Admin Overview
        </h1>
        <p className="text-muted-foreground">
          A high-level summary of all victim support activities.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cases</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCases}</div>
            <p className="text-xs text-muted-foreground">
              Total cases registered
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingCases}</div>
            <p className="text-xs text-muted-foreground">
              Cases awaiting action
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Amount Disbursed
            </CardTitle>
            <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
                 {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    maximumFractionDigits: 0,
                  }).format(totalDisbursed)}
            </div>
            <p className="text-xs text-muted-foreground">
              Total relief funds paid out
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>All Recent Cases</CardTitle>
            <CardDescription>A view of the most recently updated cases in the system.</CardDescription>
        </CardHeader>
        <CardContent>
            <CaseTable data={mockCases} />
        </CardContent>
      </Card>
    </div>
  )
}
