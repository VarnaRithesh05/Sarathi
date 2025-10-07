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
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { Upload, ShieldCheck } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const formSchema = z.object({
  victimName: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  firNumber: z.string().min(5, {
    message: 'FIR number must be valid.',
  }),
  district: z.string().min(2, {
    message: 'District is required.',
  }),
  incidentDetails: z.string().min(20, {
    message: 'Please provide detailed information about the incident.',
  }),
  documents: z.any().optional(),
})

export default function RegisterCasePage() {
    const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      victimName: '',
      firNumber: '',
      district: '',
      incidentDetails: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Case Registered",
      description: "Your new case has been successfully submitted.",
    })
    form.reset()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Register New Case
        </h1>
        <p className="text-muted-foreground">
          Fill out the form below to register a new case and start the relief process.
        </p>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Case Registration Form</CardTitle>
            <CardDescription>All fields are required unless otherwise stated.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="victimName"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Victim's Full Name</FormLabel>
                        <FormControl>
                        <Input placeholder="Enter the full name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="firNumber"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>FIR Number</FormLabel>
                            <FormControl>
                            <Input placeholder="e.g., FIR-2023-12345" {...field} />
                            </FormControl>
                            <FormDescription>
                                As registered with the police.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="district"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>District</FormLabel>
                            <FormControl>
                            <Input placeholder="e.g., North District" {...field} />
                            </FormControl>
                            <FormDescription>
                                The district where the incident occurred.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="incidentDetails"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Incident Details</FormLabel>
                        <FormControl>
                        <Textarea
                            placeholder="Describe the incident in detail..."
                            className="min-h-[150px]"
                            {...field}
                        />
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
                           Upload a copy of the FIR, identity proof, and other relevant documents, or use DigiLocker for verification.
                        </FormDescription>
                        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                                        <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-muted-foreground">PDF, PNG, JPG (MAX. 5MB)</p>
                                    </div>
                                    <Input id="dropzone-file" type="file" className="hidden" {...field} />
                                </label>
                            </div>
                            <div className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg bg-muted/50 p-6">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/DigiLocker_logo.svg/1200px-DigiLocker_logo.svg.png" alt="DigiLocker Logo" className="h-12 mb-4" />
                                <p className="text-center text-sm text-muted-foreground mb-4">
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

                <Button type="submit">Submit Case</Button>
                </form>
            </Form>
        </CardContent>
      </Card>
    </div>
  )
}
