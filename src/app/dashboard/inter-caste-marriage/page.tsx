'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { Upload, ShieldCheck } from 'lucide-react'

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

export default function InterCasteMarriagePage() {
    const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      applicantName1: '',
      applicantName2: '',
      marriageCertificateId: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Application Submitted",
      description: "Your incentive application has been successfully submitted.",
    })
    form.reset()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Inter-Caste Marriage Incentive
        </h1>
        <p className="text-muted-foreground">
          Apply for the incentive scheme for inter-caste marriages.
        </p>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Incentive Application Form</CardTitle>
            <CardDescription>Fill out the details for both partners to apply.</CardDescription>
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
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                                        <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-muted-foreground">Marriage Certificate, Caste Certificates, Aadhaar Cards</p>
                                    </div>
                                    <Input id="dropzone-file" type="file" className="hidden" {...field} multiple />
                                </label>
                            </div>
                            <div className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg bg-muted/50 p-6">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/DigiLocker_logo.svg/1200px-DigiLocker_logo.svg.png" alt="DigiLocker Logo" className="h-12 mb-4" />
                                <p className="text-center text-sm text-muted-foreground mb-4">
                                    Verify your documents quickly and securely with DigiLocker.
                                </p>
                                <Button type="button" variant="outline">
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
    </div>
  )
}
