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
  AlertOctagon,
  CircleDollarSign,
  FileText,
  MessageSquareWarning,
  Users,
} from 'lucide-react'
import { CaseTable } from '../cases/components/case-table'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { CaseStatusChart } from './components/case-status-chart'

export default function AdminDashboardOverviewPage() {
  const newCases = mockCases.filter(c => c.status === 'Pending').length;
  const pendingPayments = mockCases.filter(c => c.status === 'Approved').length;
  const newGrievances = 2; // Mock data
  const totalDisbursed = mockCases
    .filter(c => c.status === 'Disbursed')
    .reduce((acc, c) => acc + c.amount, 0) + 10000;

  return (
    <div className="container mx-auto max-w-7xl space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Admin Command Center
        </h1>
        <p className="text-muted-foreground">
          A high-level overview of urgent tasks and platform activities.
        </p>
      </div>

       <Alert variant="destructive" className="bg-destructive/5">
        <AlertOctagon className="h-4 w-4" />
        <AlertTitle className="font-headline">Urgent Alerts</AlertTitle>
        <AlertDescription>
          <ul className="list-disc pl-5 text-sm">
            <li><span className="font-semibold">3 cases</span> are nearing the 60-day investigation deadline.</li>
            <li><span className="font-semibold">5 relief payments</span> are pending for more than 7 days.</li>
          </ul>
        </AlertDescription>
      </Alert>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Cases Reported</CardTitle>
            <FileText className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{newCases}</div>
            <p className="text-xs text-muted-foreground">
              New atrocity cases filed
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sanctions Pending</CardTitle>
            <Activity className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingPayments}</div>
            <p className="text-xs text-muted-foreground">
              Relief payments awaiting your approval
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Grievances Filed</CardTitle>
            <MessageSquareWarning className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{newGrievances}</div>
            <p className="text-xs text-muted-foreground">
              Complaints requiring review
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Amount Disbursed
            </CardTitle>
            <CircleDollarSign className="h-4 w-4 text-primary" />
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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>Case Status Funnel</CardTitle>
                <CardDescription>Visual summary of the justice delivery pipeline.</CardDescription>
            </CardHeader>
            <CardContent>
                <CaseStatusChart />
            </CardContent>
        </Card>
        <Card className="lg:col-span-3">
            <CardHeader>
                <CardTitle>Recent Case Updates</CardTitle>
                <CardDescription>The most recently updated cases in the system.</CardDescription>
            </CardHeader>
            <CardContent>
                <CaseTable data={mockCases.slice(0, 5)} />
            </CardContent>
        </Card>
      </div>
    </div>
  )
}
