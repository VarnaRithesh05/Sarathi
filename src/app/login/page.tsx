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
import SaarathiLogo from "@/components/app/saarathi-logo"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { Suspense, FormEvent } from 'react'

function UserLoginCard() {
  const router = useRouter()

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle OTP sending and verification here.
    // For now, we'll navigate directly to the dashboard.
    router.push('/dashboard')
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-headline">User Sign In</CardTitle>
        <CardDescription>
          Enter your mobile number to receive a one-time password (OTP).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
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
        </form>
      </CardContent>
    </Card>
  )
}

function AdminLoginCard() {
  const router = useRouter()

  const handleAdminLogin = (e: FormEvent) => {
    e.preventDefault()
    router.push('/dashboard/admin')
  }

  return (
    <Card>
      <CardHeader className="text-center">
          <CardTitle className="text-2xl font-headline">Admin Sign In</CardTitle>
          <CardDescription>
              Enter your official credentials to access the dashboard.
          </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleAdminLogin} className="space-y-4">
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
        </form>
      </CardContent>
    </Card>
  )
}


function LoginPageContent() {
  const searchParams = useSearchParams()
  const isAdminLogin = searchParams.get('tab') === 'admin'

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
      <div className="w-full max-w-sm">
        {isAdminLogin ? <AdminLoginCard /> : <UserLoginCard />}
      </div>
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
