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

export default function LoginPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-muted/20 p-4">
       <div className="absolute left-4 top-4 sm:left-6 sm:top-6 flex items-center gap-3">
         <Link href="/" className="flex items-center gap-3">
            <SaarathiLogo className="h-10 w-10" />
            <h1 className="text-2xl font-headline font-semibold" style={{color: '#1A202C'}}>
            Saarathi
            </h1>
         </Link>
      </div>
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-headline">Sign In</CardTitle>
          <CardDescription>
            Enter your credentials to access your portal.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <Button variant="outline" className="w-full">
              Sign In with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
      <footer className="absolute bottom-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Saarathi Platform. All Rights Reserved.
      </footer>
    </div>
  )
}
