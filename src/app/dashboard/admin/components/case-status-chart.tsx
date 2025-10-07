'use client'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { ChartContainer, ChartTooltipContent, ChartConfig } from '@/components/ui/chart'
import { mockCases } from '@/lib/data'

export function CaseStatusChart() {

  const statusCounts = mockCases.reduce((acc, caseItem) => {
    acc[caseItem.status] = (acc[caseItem.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const chartData = [
    { status: 'Pending', count: statusCounts['Pending'] || 0, fill: 'var(--color-pending)' },
    { status: 'Approved', count: statusCounts['Approved'] || 0, fill: 'var(--color-approved)' },
    { status: 'Disbursed', count: statusCounts['Disbursed'] || 0, fill: 'var(--color-disbursed)' },
    { status: 'Rejected', count: statusCounts['Rejected'] || 0, fill: 'var(--color-rejected)' },
  ];

  const chartConfig = {
    count: {
      label: "Cases",
    },
    pending: {
      label: "Pending",
      color: "hsl(var(--chart-2))", // Golden Yellow
    },
    approved: {
      label: "Approved",
      color: "hsl(var(--chart-1))", // Deep Blue
    },
    disbursed: {
        label: "Disbursed",
        color: "hsl(var(--chart-3))", // Grey
    },
    rejected: {
        label: "Rejected",
        color: "hsl(var(--chart-4))", // Red
    }
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="h-[250px] w-full">
      <ResponsiveContainer>
        <BarChart 
            data={chartData} 
            layout="vertical"
            margin={{ left: 10, right: 10 }}
            accessibilityLayer
        >
          <CartesianGrid horizontal={false} />
          <YAxis
            dataKey="status"
            type="category"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            width={80}
          />
          <XAxis dataKey="count" type="number" hide />
          <Tooltip 
            cursor={{ fill: 'hsl(var(--accent) / 0.1)' }} 
            content={<ChartTooltipContent indicator="dot" />} 
          />
          <Bar 
            dataKey="count" 
            radius={[4, 4, 4, 4]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
