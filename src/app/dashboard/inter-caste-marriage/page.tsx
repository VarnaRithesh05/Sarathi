'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { Upload, ShieldCheck, File as FileIcon, AlertTriangle, CheckCircle2, Loader, CircleDollarSign, ArrowLeft } from 'lucide-react'
import DigilockerLogo from '@/components/app/digilocker-logo'
import { Badge } from '@/components/ui/badge'
import { mockInterCasteApplication } from '@/lib/data'
import { Label } from '@/components/ui/label'

const formSchema = z.object({
  applicantName1: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  applicantName2: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  marriageCertificateId: z.string().min(5, {
    message: 'Marriage certificate ID is required.',
  }),
  documents: z.any().optional(),
})

const statusDetails = {
    Submitted: { icon: <Loader className="h-5 w-5 text-accent" />, color: "text-accent" },
    'Documents Verified': { icon: <CheckCircle2 className="h-5 w-5 text-blue-500" />, color: "text-blue-500" },
    Approved: { icon: <CheckCircle2 className="h-5 w-5 text-primary" />, color: "text-primary" },
    Disbursed: { icon: <CircleDollarSign className="h-5 w-5 text-green-500" />, color: "text-green-500" },
    Rejected: { icon: <AlertTriangle className="h-5 w-5 text-destructive" />, color: "text-destructive" },
}

type View = 'selection' | 'check-status' | 'show-status' | 'new-application';

function ApplicationStatusView({ onBack }: { onBack: () => void }) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={onBack}>
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <div>
                        <CardTitle>My Application Status</CardTitle>
                        <CardDescription>
                            Tracking ID: {mockInterCasteApplication.id}
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center justify-between rounded-lg border bg-muted/30 p-4">
                    <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-background`}>
                            {statusDetails[mockInterCasteApplication.status].icon}
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Status</p>
                            <p className={`font-semibold ${statusDetails[mockInterCasteApplication.status].color}`}>{mockInterCasteApplication.status}</p>
                        </div>
                    </div>
                     <div>
                        <p className="text-sm text-muted-foreground text-right">Amount</p>
                        <p className="font-semibold text-lg">INR {new Intl.NumberFormat('en-IN').format(mockInterCasteApplication.amount)}</p>
                    </div>
                </div>

                {mockInterCasteApplication.missingDocuments && (
                    <div className="rounded-md border border-destructive/50 bg-destructive/5 p-4">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-destructive">Action Required: Missing Documents</h4>
                                <p className="text-sm text-destructive/80 mt-1">Your application is on hold. Please upload the required documents to proceed: <span className="font-semibold">{mockInterCasteApplication.missingDocuments.join(', ')}</span>.</p>
                                <Button size="sm" variant="destructive" className="mt-3">Upload Documents</Button>
                            </div>
                        </div>
                    </div>
                )}
                
                <div>
                    <h4 className="font-semibold mb-3">Application Timeline</h4>
                    <div className="space-y-4">
                        {mockInterCasteApplication.timeline.map((event, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                        <CheckCircle2 className="h-4 w-4" />
                                    </div>
                                    {index < mockInterCasteApplication.timeline.length - 1 && (
                                        <div className="w-px flex-1 bg-border my-1"></div>
                                    )}
                                </div>
                                <div>
                                    <p className="font-medium">{event.title}</p>
                                    <p className="text-sm text-muted-foreground">{event.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}


function NewApplicationForm({ onBack }: { onBack: () => void }) {
    const { toast } = useToast()
    const [uploadedFiles, setUploadedFiles] = useState<FileList | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      applicantName1: '',
      applicantName2: '',
      marriageCertificateId: '',
      documents: undefined,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    const newApplicationId = Math.floor(100000 + Math.random() * 900000).toString();
    toast({
      title: "Application Submitted",
      description: `Your application has been successfully submitted. Your Application ID is ${newApplicationId}.`,
    })
    form.reset()
    setUploadedFiles(null)
    onBack();
  }

  return (
    <Card>
        <CardHeader>
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={onBack}>
                    <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                    <CardTitle>Incentive Application Form</CardTitle>
                    <CardDescription>Fill out the details for both partners to apply.</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="applicantName1"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Partner 1 Full Name</FormLabel>
                            <FormControl>
                            <Input placeholder="Enter full name" {...field} />
                            </FormControl>
                            <FormDescription>One partner must belong to the SC community.</FormDescription>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="applicantName2"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Partner 2 Full Name</FormLabel>
                            <FormControl>
                            <Input placeholder="Enter full name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="marriageCertificateId"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Marriage Certificate ID</FormLabel>
                        <FormControl>
                        <Input placeholder="Enter the official ID from the certificate" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="documents"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Upload Documents</FormLabel>
                        <FormDescription>
                           Upload documents via file upload or connect with DigiLocker for verification.
                        </FormDescription>
                        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="space-y-3">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                                        <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-muted-foreground">Marriage Certificate, Caste Certificates, Aadhaar Cards</p>
                                    </div>
                                    <FormControl>
                                        <Input 
                                            id="dropzone-file" 
                                            type="file" 
                                            className="hidden"
                                            multiple
                                            onChange={(e) => {
                                                field.onChange(e.target.files)
                                                setUploadedFiles(e.target.files)
                                            }}
                                        />
                                    </FormControl>
                                </label>
                                {uploadedFiles && Array.from(uploadedFiles).map((file, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground border rounded-md p-2">
                                        <FileIcon className="h-4 w-4" />
                                        <span className="flex-1 truncate">{file.name}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg bg-muted/50 p-6">
                                <DigilockerLogo className="h-16" />
                                <p className="text-center text-sm text-muted-foreground my-3">
                                    Verify your documents quickly and securely with DigiLocker.
                                </p>
                                <Button 
                                    type="button" 
                                    variant="outline"
                                    onClick={() => alert('This feature is for demonstration and will be fully integrated soon.')}
                                >
                                    <ShieldCheck className="mr-2" /> Connect with DigiLocker
                                </Button>
                            </div>
                        </div>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                <Button type="submit">Submit Application</Button>
                </form>
            </Form>
        </CardContent>
      </Card>
  );
}


export default function InterCasteMarriagePage() {
    const { toast } = useToast();
    const [view, setView] = useState<View>('selection');
    const [applicationId, setApplicationId] = useState('');

    const handleStatusCheck = (e: React.FormEvent) => {
        e.preventDefault();
        if (applicationId) {
            setView('show-status');
        } else {
            toast({
                variant: 'destructive',
                title: 'Invalid ID',
                description: 'Please enter a valid application ID.',
            });
        }
    };
    
    const renderContent = () => {
        switch (view) {
            case 'selection':
                return (
                    <Card className="w-full max-w-2xl mx-auto">
                        <CardHeader>
                            <CardTitle>Inter-Caste Marriage Incentive Portal</CardTitle>
                            <CardDescription>What would you like to do today?</CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Button variant="outline" className="w-full h-24 text-base" onClick={() => setView('new-application')}>
                                Register New Application
                            </Button>
                            <Button className="w-full h-24 text-base" onClick={() => setView('check-status')}>
                                Check Existing Application Status
                            </Button>
                        </CardContent>
                    </Card>
                );

            case 'check-status':
                return (
                    <Card className="w-full max-w-md mx-auto">
                         <CardHeader>
                             <div className="flex items-center gap-4">
                                <Button variant="ghost" size="icon" onClick={() => setView('selection')}>
                                    <ArrowLeft className="h-4 w-4" />
                                </Button>
                                <div>
                                    <CardTitle>Check Application Status</CardTitle>
                                    <CardDescription>Enter your application ID to view its status.</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleStatusCheck} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="applicationId">Application ID</Label>
                                    <Input 
                                        id="applicationId" 
                                        name="applicationId" 
                                        placeholder="e.g., 123456"
                                        value={applicationId}
                                        onChange={(e) => setApplicationId(e.target.value)}
                                    />
                                </div>
                                <Button type="submit" className="w-full">Check Status</Button>
                            </form>
                        </CardContent>
                    </Card>
                );

            case 'show-status':
                return <ApplicationStatusView onBack={() => setView('selection')} />;

            case 'new-application':
                return <NewApplicationForm onBack={() => setView('selection')} />;
            
            default:
                 return null;
        }
    };


  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Inter-Caste Marriage Incentive
        </h1>
        <p className="text-muted-foreground">
          Apply for the scheme or check the status of your existing application.
        </p>
      </div>
      
      {renderContent()}

    </div>
  )
}
