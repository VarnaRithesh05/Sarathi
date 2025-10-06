import { mockSupportServices } from '@/lib/data'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Handshake, MapPin, Phone } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function SupportPage() {
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
                <Button>
                    <Handshake className="mr-2 h-4 w-4" />
                    Apply to NALSA
                </Button>
            </CardContent>
        </Card>

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
