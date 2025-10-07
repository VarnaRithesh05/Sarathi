import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, User, HeartHandshake, BookUser, ArrowRight, FileText, IndianRupee, Scale } from 'lucide-react';
import Link from 'next/link';
import SaarathiLogo from '@/components/app/saarathi-logo';


export default function Home() {
  const currentYear = new Date().getFullYear();

  const features = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Atrocity Case Registration",
      description: "Easily file and register new atrocity cases under the Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act."
    },
    {
      icon: <IndianRupee className="h-6 w-6 text-primary" />,
      title: "Track Relief Funds",
      description: "Get real-time updates on the status of your financial relief, from sanctioning to disbursement."
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-primary" />,
      title: "Marriage Incentives",
      description: "Apply for the incentive scheme for inter-caste marriages and track your application status seamlessly."
    },
    {
      icon: <Scale className="h-6 w-6 text-primary" />,
      title: "Legal & Support Network",
      description: "Access a verified network of legal aid providers, NGOs, and support services to guide you."
    }
  ]

  return (
    <div className="flex flex-col min-h-dvh bg-background">
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
        <section 
          className="relative bg-cover bg-center py-20 text-center text-white"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528747045269-3904978e3559?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
            <div className="container relative mx-auto max-w-4xl">
                <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Your Compass for Justice and Support
                </h2>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
                    Saarathi is a dedicated digital platform designed to empower and assist victims of atrocities and beneficiaries of social welfare schemes with transparency and efficiency.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button size="lg" asChild>
                        <Link href="/login">
                            Go to Victim Portal
                        </Link>
                    </Button>
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="/login">
                            Apply for Marriage Incentive
                        </Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h3 className="font-headline text-3xl font-bold">What We Offer</h3>
                    <p className="text-muted-foreground mt-2">A streamlined process for accessing your rights.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                         <Card key={feature.title} className="text-center transition-all hover:shadow-lg hover:-translate-y-1">
                            <CardHeader className="items-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                                    {feature.icon}
                                </div>
                                <CardTitle className="font-headline text-lg">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </CardContent>
                         </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Officials Portal Section */}
        <section className="bg-muted/30 py-16">
            <div className="container mx-auto">
                <Card className="bg-card/80">
                    <CardHeader className="flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary flex-shrink-0">
                        <ShieldCheck className="h-6 w-6 text-secondary-foreground" />
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
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto p-4 text-center text-sm text-muted-foreground">
            © {currentYear} Saarathi Platform. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
