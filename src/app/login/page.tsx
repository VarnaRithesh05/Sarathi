'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SaarathiLogo from "@/components/app/saarathi-logo"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from 'react'

function LoginPageContent() {
  const searchParams = useSearchParams()
  const defaultTab = searchParams.get('tab') === 'admin' ? 'admin' : 'user'

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-muted/20 p-4">
      <div className="absolute left-4 top-4 flex items-center gap-3 sm:left-6 sm:top-6">
        <Link href="/" className="flex items-center gap-3">
          <SaarathiLogo className="h-10 w-10" />
          <h1 className="text-2xl font-headline font-semibold" style={{color: '#1A202C'}}>
            Saarathi
          </h1>
        </Link>
      </div>
      <Tabs defaultValue={defaultTab} className="w-full max-w-sm">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="user">User Login</TabsTrigger>
          <TabsTrigger value="admin">Admin Login</TabsTrigger>
        </TabsList>
        <TabsContent value="user">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-headline">User Sign In</CardTitle>
              <CardDescription>
                Enter your mobile number to receive a one-time password (OTP).
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input id="mobile" type="tel" placeholder="e.g., 9876543210" required />
              </div>
              <Button type="submit" className="w-full">
                Send OTP
              </Button>
               <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="#" className="underline">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="admin">
          <Card>
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-headline">Admin Sign In</CardTitle>
                <CardDescription>
                    Enter your official credentials to access the dashboard.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.gov.in"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <footer className="absolute bottom-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Saarathi Platform. All Rights Reserved.
      </footer>
    </div>
  )
}


export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPageContent />
    </Suspense>
  )
}
