import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'card-image-3');

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="p-4 sm:p-6">
        <h1 className="text-2xl font-headline font-semibold text-primary">
          Unity
        </h1>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="container max-w-4xl">
          <Card className="overflow-hidden sm:grid sm:grid-cols-2 sm:gap-4">
             <div className="relative h-48 sm:h-auto">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  data-ai-hint={heroImage.imageHint}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="p-6">
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-3xl">Welcome to Unity</CardTitle>
                <CardDescription>
                  Your unified platform for victim support and services. Please select your portal to continue.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 mt-6 space-y-4">
                 <Button asChild className="w-full" size="lg">
                    <Link href="/dashboard">
                        <User className="mr-2" />
                        Victim Portal
                    </Link>
                </Button>
                <Button asChild className="w-full" variant="outline" size="lg">
                    <Link href="/dashboard/admin">
                        <ShieldCheck className="mr-2" />
                        Official's Portal
                    </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </main>
      <footer className="p-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Unity Platform. All Rights Reserved.
      </footer>
    </div>
  );
}
