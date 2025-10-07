import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, User, HeartHandshake, BookUser } from 'lucide-react';
import Link from 'next/link';
import SaarathiLogo from '@/components/app/saarathi-logo';


export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-dvh bg-muted/20">
      <header className="p-4 sm:p-6 flex items-center gap-3 bg-background border-b">
        <SaarathiLogo className="h-10 w-10" />
        <h1 className="text-3xl font-headline font-semibold" style={{color: '#1A202C'}}>
          Saarathi
        </h1>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="font-headline text-5xl font-bold">Welcome to Saarathi</h2>
              <p className="mt-4 text-muted-foreground">
                Your guide to justice and rights. Please select your portal to begin.
              </p>
            </div>
            <div className="grid gap-6 md:col-span-2 sm:grid-cols-2">
              <Card className="flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <BookUser className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline">Victim of Atrocity</CardTitle>
                  <CardDescription>
                    Register cases, track relief funds, and access support services under the PoA & PCR Acts.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/login">
                      Go to Victim Portal
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <HeartHandshake className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline">Inter-Caste Marriage</CardTitle>
                  <CardDescription>
                    Apply for and track the incentive scheme for inter-caste marriages.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/login">
                      Go to Incentive Portal
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          <Card className="mt-8 bg-card/50">
            <CardHeader className="flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary flex-shrink-0">
                <ShieldCheck className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div className="flex-1">
                <CardTitle className="font-headline">Official's Portal</CardTitle>
                <CardDescription>
                  Manage cases, sanction funds, and view policy insights.
                </CardDescription>
              </div>
              <Button asChild className="w-full sm:w-auto" variant="outline">
                <Link href="/login?tab=admin">
                  Login to Admin Dashboard
                </Link>
              </Button>
            </CardHeader>
          </Card>
        </div>
      </main>
      <footer className="p-4 text-center text-sm text-muted-foreground">
        © {currentYear} Saarathi Platform. All Rights Reserved.
      </footer>
    </div>
  );
}
