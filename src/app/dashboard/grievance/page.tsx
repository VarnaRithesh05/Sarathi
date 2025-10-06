'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { mockGrievances } from '@/lib/data'
import { mockCases } from '@/lib/data'
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

const formSchema = z.object({
  caseId: z.string({
    required_error: "Please select a case to file a grievance against.",
  }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  description: z.string().min(20, {
    message: 'Please provide a detailed description of your grievance.',
  }),
})

export default function GrievancePage() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        subject: '',
        description: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Grievance Submitted",
      description: "Your grievance has been filed and will be reviewed shortly.",
    })
    form.reset()
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
      <div className="space-y-6 lg:col-span-3">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            Grievance Redressal
          </h1>
          <p className="text-muted-foreground">
            File a complaint or track the status of an existing grievance.
          </p>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>File a New Grievance</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="caseId"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Related Case</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a registered case" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                {mockCases.map(c => (
                                    <SelectItem key={c.id} value={c.id}>{c.id} - {c.victimName}</SelectItem>
                                ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                            <Input placeholder="e.g., Delay in payment" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                            <Textarea
                                placeholder="Describe your grievance in detail..."
                                className="min-h-[120px]"
                                {...field}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit">Submit Grievance</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-2">
        <Card className="sticky top-20">
            <CardHeader>
                <CardTitle>My Grievances</CardTitle>
                <CardDescription>A list of your submitted grievances and their status.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Subject</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockGrievances.map((g) => (
                            <TableRow key={g.id}>
                                <TableCell className="font-mono text-xs">{g.id}</TableCell>
                                <TableCell className="font-medium">{g.subject}</TableCell>
                                <TableCell>
                                    <Badge variant={g.status === 'Resolved' ? 'default' : 'secondary'}>{g.status}</Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}
