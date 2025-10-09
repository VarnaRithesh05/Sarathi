'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookUser, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

export default function DashboardSelectionPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight">
          Welcome to the User Portal
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Please select the service you wish to access.
        </p>
      </div>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        <Link href="/dashboard/register-case" className="group">
          <Card className="h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <BookUser className="h-8 w-8 text-primary" />
                </div>
              <CardTitle className="font-headline text-2xl">Victim Support Portal</CardTitle>
              <CardDescription>
                File and track cases related to the SC/ST (Prevention of Atrocities) Act, file grievances, and find support.
              </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center font-semibold text-primary">
                    Go to Victim Portal
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/dashboard/inter-caste-marriage" className="group">
          <Card className="h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
             <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <HeartHandshake className="h-8 w-8 text-primary" />
                </div>
              <CardTitle className="font-headline text-2xl">Marriage Incentive Portal</CardTitle>
              <CardDescription>
                Apply for the Dr. Ambedkar Scheme for Social Integration through Inter-Caste Marriages.
              </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center font-semibold text-primary">
                    Go to Incentive Portal
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
