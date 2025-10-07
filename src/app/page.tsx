import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, User, HeartHandshake, BookUser } from 'lucide-react';
import Link from 'next/link';

const SaarathiLogo = () => (
    <svg
      viewBox="0 0 120 120"
      className="h-10 w-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#2c5282', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#4299e1', stopOpacity: 1}} />
        </linearGradient>
        <linearGradient id="grad-orange" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: '#dd6b20', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#f6ad55', stopOpacity: 1}} />
        </linearGradient>
        <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
      </defs>
      {/* <!-- Top sheltering hands --> */}
      <path
        d="M 20 50 C 20 20, 40 10, 60 10 C 80 10, 100 20, 100 50 L 90 50 C 90 30, 75 20, 60 20 C 45 20, 30 30, 30 50 Z"
        fill="url(#grad-blue)"
      />
      {/* <!-- Bottom supportive hands --> */}
      <path
        d="M 20 70 C 20 100, 40 110, 60 110 C 80 110, 100 100, 100 70 L 90 70 C 90 90, 75 100, 60 100 C 45 100, 30 90, 30 70 Z"
        fill="url(#grad-orange)"
      />
      {/* <!-- Center glowing orb --> */}
      <circle cx="60" cy="60" r="8" fill="#FBBF24" filter="url(#glow)" />
    </svg>
);


export default function Home() {

  return (
    <div className="flex flex-col min-h-dvh bg-muted/20">
      <header className="p-4 sm:p-6 flex items-center gap-3">
        <SaarathiLogo />
        <h1 className="text-2xl font-headline font-semibold" style={{color: '#1A202C'}}>
          Saarathi
        </h1>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="font-headline text-4xl font-bold">Welcome to Saarathi</h2>
              <p className="mt-2 text-muted-foreground">
                Your guide to justice and rights. Please select your portal to begin.
              </p>
            </div>
            <div className="grid gap-6 md:col-span-2 sm:grid-cols-2">
              <Card className="flex flex-col">
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
                    <Link href="/dashboard">
                      Go to Victim Portal
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
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
                    <Link href="/dashboard/inter-caste-marriage">
                      Go to Incentive Portal
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          <Card className="mt-8">
            <CardHeader className="flex-row items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <ShieldCheck className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <CardTitle className="font-headline">Official's Portal</CardTitle>
                <CardDescription>
                  Manage cases, sanction funds, and view policy insights.
                </CardDescription>
              </div>
              <Button asChild className="ml-auto" variant="outline">
                <Link href="/dashboard/admin">
                  Login to Admin Dashboard
                </Link>
              </Button>
            </CardHeader>
          </Card>
        </div>
      </main>
      <footer className="p-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Saarathi Platform. All Rights Reserved.
      </footer>
    </div>
  );
}
