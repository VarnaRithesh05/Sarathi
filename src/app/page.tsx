import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, User, HeartHandshake, BookUser } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const SarathiLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7 text-primary"
  >
    <path d="M12 22s-8-4-8-10V5l8-3 8 3v7c0 6-8 10-8 10z"></path>
    <circle cx="12" cy="12" r="3"></circle>
    <line x1="12" y1="9" x2="12" y2="2.5"></line>
    <line x1="12" y1="15" x2="12" y2="21.5"></line>
    <line x1="15.5" y1="13.25" x2="21.5" y2="13.25"></line>
    <line x1="8.5" y1="13.25" x2="2.5" y2="13.25"></line>
    <line x1="15.5" y1="10.75" x2="21.5" y2="10.75"></line>
    <line x1="8.5" y1="10.75" x2="2.5" y2="10.75"></line>
  </svg>
);


export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'card-image-3');

  return (
    <div className="flex flex-col min-h-dvh bg-muted/20">
      <header className="p-4 sm:p-6 flex items-center gap-2">
        <SarathiLogo />
        <h1 className="text-2xl font-headline font-semibold text-primary">
          Sarathi
        </h1>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="font-headline text-4xl font-bold">Welcome to Sarathi</h2>
              <p className="mt-2 text-muted-foreground">
                Your guide to justice and rights. Please select your portal to begin.
              </p>
            </div>
            <div className="grid gap-6 md:col-span-2 sm:grid-cols-2">
              <Card>
                <CardHeader>
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
              <Card>
                <CardHeader>
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
        © {new Date().getFullYear()} Sarathi Platform. All Rights Reserved.
      </footer>
    </div>
  );
}
