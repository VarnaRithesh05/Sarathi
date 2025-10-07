'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckSquare, ExternalLink, Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { checkSchemeEligibility } from '@/ai/flows/check-scheme-eligibility'

const schemes = [
    {
        name: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
        description: "National Mission for Financial Inclusion to ensure access to financial services, namely, basic savings & deposit accounts, remittance, credit, insurance, pension in an affordable manner.",
        link: "https://pmjdy.gov.in/"
    },
    {
        name: "National Social Assistance Programme (NSAP)",
        description: "A welfare programme for the poor, it provides financial assistance to the elderly, widows and persons with disabilities. It is targeted for BPL families.",
        link: "https://nsap.nic.in/"
    },
    {
        name: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)",
        description: "The world's largest health insurance/ assurance scheme fully financed by the government. It provides a cover of Rs. 5 lakhs per family per year for secondary and tertiary care hospitalization to poor and vulnerable families.",
        link: "https://pmjay.gov.in/"
    }
]

type Scheme = typeof schemes[0];
type SchemeWithEligibility = Scheme & { isEligible?: boolean, reason?: string };

export default function SchemesPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const [analysedSchemes, setAnalysedSchemes] = React.useState<SchemeWithEligibility[]>(schemes);

  const handleCheckEligibility = async () => {
    setIsLoading(true);
    setAnalysedSchemes(schemes); // Reset on new check

    const mockUserProfile = {
        caste: "SC",
        annualIncome: 45000,
        isBPL: true,
        occupation: "Labourer",
    };

    try {
        const result = await checkSchemeEligibility({
            userProfile: mockUserProfile,
            schemes: schemes.map(({ name, description }) => ({ name, description }))
        });

        const eligibleSchemeNames = new Set(result.eligibleSchemes.map(s => s.name));
        
        const updatedSchemes = schemes.map(scheme => ({
            ...scheme,
            isEligible: eligibleSchemeNames.has(scheme.name),
        }));

        setAnalysedSchemes(updatedSchemes);

        toast({
          title: "Eligibility Check Complete",
          description: `You are likely eligible for ${result.eligibleSchemes.length} of these schemes.`,
        })

    } catch (error) {
      console.error("Eligibility check failed:", error);
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: "Could not check eligibility at this time. Please try again later.",
      })
    } finally {
        setIsLoading(false);
    }
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
                <CardTitle>AI-Powered Eligibility Checker</CardTitle>
                <CardDescription>
                    Based on your profile, we can check your eligibility for other central and state government schemes.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                    Our system uses AI to analyze your profile and identify additional support schemes you can benefit from. Click the button to check your eligibility now.
                </p>
                <Button onClick={handleCheckEligibility} disabled={isLoading}>
                    {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <CheckSquare className="mr-2 h-4 w-4" />
                    )}
                    {isLoading ? 'Analyzing...' : 'Check My Eligibility'}
                </Button>
            </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {analysedSchemes.map((scheme) => (
                <Card key={scheme.name} className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                            <CardTitle className="font-headline text-lg">{scheme.name}</CardTitle>
                            {scheme.isEligible && (
                                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 flex-shrink-0">Likely Eligible</Badge>
                            )}
                        </div>
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
