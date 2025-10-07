'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, User, HeartHandshake, BookUser, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SaarathiLogo from '@/components/app/saarathi-logo';


export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-dvh bg-muted/20">
       <header className="sticky top-0 z-40 w-full border-b bg-background/80 px-4 py-3 backdrop-blur-sm sm:px-6">
        <div className="container mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
                <SaarathiLogo className="h-10 w-10" />
                <h1 className="text-2xl font-headline font-semibold tracking-tight" style={{color: '#1A202C'}}>
                Saarathi
                </h1>
            </Link>
            <div className="flex items-center gap-2">
                <Button variant="ghost" asChild>
                    <Link href="/login?tab=admin">
                        Admin Login
                    </Link>
                </Button>
                <Button asChild>
                    <Link href="/login">
                        User Portal <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="text-center mb-10">
          <h2 className="font-headline text-4xl font-bold tracking-tighter">Welcome to Saarathi</h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Your guide to justice and rights. Please select your portal to begin.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <Card className="flex flex-col text-center transition-all hover:shadow-lg hover:-translate-y-1">
                    <CardHeader className="items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 mb-2">
                            <BookUser className="h-6 w-6 text-accent" />
                        </div>
                        <CardTitle className="font-headline text-xl">Victim of Atrocity</CardTitle>
                        <CardDescription>
                            File a case, track its status, and access relief funds.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1" />
                    <CardContent>
                        <Button asChild className="w-full">
                            <Link href="/login">Go to Victim Portal</Link>
                        </Button>
                    </CardContent>
                </Card>
                <Card className="flex flex-col text-center transition-all hover:shadow-lg hover:-translate-y-1">
                    <CardHeader className="items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 mb-2">
                            <HeartHandshake className="h-6 w-6 text-accent" />
                        </div>
                        <CardTitle className="font-headline text-xl">Inter-Caste Marriage</CardTitle>
                        <CardDescription>
                            Apply for the incentive scheme and monitor your application.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1" />
                    <CardContent>
                        <Button asChild className="w-full">
                            <Link href="/login">Apply for Incentive</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-8">
                 <Card className="bg-muted/50">
                    <CardHeader className="flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background flex-shrink-0">
                        <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                        <CardTitle className="font-headline">Official's Portal</CardTitle>
                        <CardDescription>
                        For government officials to manage cases, sanction funds, and view policy insights.
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
        </div>
      </main>

      <footer className="w-full py-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
            © {currentYear} Saarathi Platform. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
