'use client'

import { mockSupportServices } from '@/lib/data'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Handshake, MapPin, Phone, Scale, ExternalLink } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/use-toast'

export default function SupportPage() {
  const { toast } = useToast()

  const handleCnrSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const cnr = (e.currentTarget.elements.namedItem('cnr') as HTMLInputElement).value
    if (cnr) {
        toast({
            title: "Feature Demonstration",
            description: `In a live system, we would now look up the status for CNR: ${cnr}. This feature is for demonstration only.`,
        })
    }
  }


  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Support Network
        </h1>
        <p className="text-muted-foreground">
          Access legal aid, counseling, and support from verified organizations.
        </p>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Apply for NALSA Legal Aid</CardTitle>
                    <CardDescription>
                        Directly apply for free legal services from the National Legal Services Authority.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                        Clicking the button below will take you to an integrated form to submit your application to NALSA for legal assistance. Ensure your profile information is up to date.
                    </p>
                    <Button onClick={() => alert('This would lead to a NALSA application form.')}>
                        <Handshake className="mr-2 h-4 w-4" />
                        Apply to NALSA
                    </Button>
                </CardContent>
            </Card>
            <Card className="bg-accent/10 border-accent/50">
                <CardHeader>
                    <CardTitle>eCourts Services</CardTitle>
                    <CardDescription>
                        Access case information directly from the eCourts portal for victims.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col space-y-4">
                    <form onSubmit={handleCnrSubmit} className="space-y-2">
                        <Label htmlFor="cnr">Check Case Status (CNR Number)</Label>
                        <div className="flex gap-2">
                            <Input id="cnr" name="cnr" placeholder="Enter your 16-digit CNR" />
                            <Button type="submit" variant="secondary">Search</Button>
                        </div>
                    </form>
                    <div className="flex flex-col space-y-2 pt-2">
                         <Button variant="outline" asChild className="justify-start">
                            <a href="https://ecourts.gov.in/ecourts_home/" target="_blank" rel="noopener noreferrer">
                               <Scale className="mr-2 h-4 w-4" />
                                View Cause Lists
                                <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground" />
                            </a>
                        </Button>
                         <Button variant="outline" asChild className="justify-start">
                            <a href="https://ecourts.gov.in/ecourts_home/" target="_blank" rel="noopener noreferrer">
                               <Scale className="mr-2 h-4 w-4" />
                               Access Court Orders
                               <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground" />
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>


        <Separator />

        <div>
            <h2 className="text-2xl font-headline font-semibold">Verified NGOs & Legal Services</h2>
            <p className="text-muted-foreground">A directory of trusted support organizations.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockSupportServices.map((service) => (
            <Card key={service.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="font-headline text-lg">{service.name}</CardTitle>
                    <Badge variant={service.type === 'Legal Aid' ? 'secondary' : 'outline'}>{service.type}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 border-t pt-4">
                <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span>{service.location}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                    <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span>{service.contact}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
