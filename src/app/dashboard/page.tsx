import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { mockCases, mockNotifications } from '@/lib/data'
import {
  Activity,
  AlertCircle,
  CheckCircle2,
  CircleDollarSign,
  FileText,
  Loader,
} from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const statusIcons = {
  Pending: <Loader className="h-4 w-4 text-accent" />,
  Approved: <CheckCircle2 className="h-4 w-4 text-primary" />,
  Disbursed: <CircleDollarSign className="h-4 w-4 text-green-500" />,
  Rejected: <AlertCircle className="h-4 w-4 text-destructive" />,
}

export default function DashboardOverviewPage() {
  const activeCases = mockCases.filter(c => c.status === 'Pending' || c.status === 'Approved').length;
  const pendingPayments = mockCases.filter(c => c.status === 'Approved').length;
  const unreadNotifications = mockNotifications.filter(n => !n.read).length;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Welcome Back
        </h1>
        <p className="text-muted-foreground">
          Here is a summary of your activities and cases.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Active Cases</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeCases}</div>
            <p className="text-xs text-muted-foreground">
              Cases currently in progress
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <CircleDollarSign className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingPayments}</div>
            <p className="text-xs text-muted-foreground">
              Approved cases awaiting disbursement
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Unread Notifications
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{unreadNotifications}</div>
            <p className="text-xs text-muted-foreground">
              Important updates and alerts
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>My Recent Case Updates</CardTitle>
            <CardDescription>
              Latest status changes on your registered cases.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockCases.slice(0, 3).map((caseItem, index) => (
                <div key={caseItem.id} className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarFallback>
                      {statusIcons[caseItem.status]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      {caseItem.id}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Last update: {caseItem.lastUpdate}
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    <Badge variant={
                      caseItem.status === 'Disbursed' ? 'default' :
                      caseItem.status === 'Approved' ? 'secondary' :
                      caseItem.status === 'Rejected' ? 'destructive' :
                      'outline'
                    }>{caseItem.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>My Notifications</CardTitle>
            <CardDescription>
              You have {unreadNotifications} unread messages.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            {mockNotifications.slice(0, 3).map((notification, index) => (
              <div key={notification.id} className="flex items-start gap-4">
                <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
                  <AvatarFallback className="bg-transparent">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
                 {!notification.read && <div className="ml-auto h-2 w-2 rounded-full bg-primary mt-1" />}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
