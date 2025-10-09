'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Users, ArrowRight, FileText, HeartHandshake, MessagesSquare } from 'lucide-react';
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 bg-background">
          <div className="container mx-auto text-center px-4">
            <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Your Guide to Justice and Rights</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
              Saarathi is a dedicated platform to help victims of atrocities and support inter-caste marriages through government schemes.
            </p>
            <div className="mt-8 flex justify-center gap-4">
               <Button asChild size="lg">
                  <Link href="/login">Access User Portal</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                  <Link href="/login?tab=admin">Official's Login</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h3 className="font-headline text-3xl font-bold tracking-tight">Key Services</h3>
              <p className="mt-2 text-muted-foreground">Empowering citizens with access to essential support systems.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card className="text-center transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                      <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl">Atrocity Case Registration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A streamlined process for victims to file cases under the SC/ST (Prevention of Atrocities) Act and track their progress towards justice.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                      <HeartHandshake className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl">Marriage Incentive Scheme</CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="text-muted-foreground">
                    Apply for financial incentives for inter-caste marriages, promoting social integration and equality.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                      <MessagesSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl">Support & Grievance</CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="text-muted-foreground">
                    Access a network of legal aid services, NGOs, and file grievances for prompt redressal of issues related to your case.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 border-t bg-background">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
            © {currentYear} Saarathi Platform. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
