'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckSquare, ExternalLink } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const schemes = [
    {
        name: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
        description: "National Mission for Financial Inclusion to ensure access to financial services, namely, basic savings & deposit accounts, remittance, credit, insurance, pension in an affordable manner.",
        link: "https://pmjdy.gov.in/"
    },
    {
        name: "National Social Assistance Programme (NSAP)",
        description: "A welfare programme being administered by the Ministry of Rural Development. This programme is being implemented in rural as well as urban areas.",
        link: "https://nsap.nic.in/"
    },
    {
        name: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)",
        description: "The world's largest health insurance/ assurance scheme fully financed by the government. It provides a cover of Rs. 5 lakhs per family per year for secondary and tertiary care hospitalization.",
        link: "https://pmjay.gov.in/"
    }
]

export default function SchemesPage() {
  const { toast } = useToast()

  const handleCheckEligibility = () => {
    toast({
      title: "Feature Coming Soon",
      description: "Automated eligibility checking will be integrated shortly.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Social Welfare Schemes
        </h1>
        <p className="text-muted-foreground">
          Discover other government schemes you may be eligible for.
        </p>
      </div>

      <div className="space-y-8">
        <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
                <CardTitle>Eligibility Checker</CardTitle>
                <CardDescription>
                    Based on your profile, we can check your eligibility for other central and state government schemes.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                    Our system uses the data from your profile and registered cases to identify additional support schemes you can benefit from. Click the button to check your eligibility now.
                </p>
                <Button onClick={handleCheckEligibility}>
                    <CheckSquare className="mr-2 h-4 w-4" />
                    Check My Eligibility
                </Button>
            </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {schemes.map((scheme) => (
                <Card key={scheme.name} className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">{scheme.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <p className="text-sm text-muted-foreground">
                            {scheme.description}
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" asChild className="w-full">
                            <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Learn More & Apply
                            </a>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
