'use client'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { ChartContainer, ChartTooltipContent, ChartConfig } from '@/components/ui/chart'

type ChartDataPoint = {
  latitude: number;
  longitude: number;
  weight: number;
  district?: string;
};

export function InsightsCharts({ data }: { data: ChartDataPoint[] }) {

  const chartData = data.map((d, i) => ({ 
    ...d, 
    name: d.district || `Location ${i + 1}` 
  })).sort((a, b) => b.weight - a.weight);

  const chartConfig = {
    weight: {
      label: "Case Count",
      color: "hsl(var(--primary))",
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="h-[450px] w-full">
      <ResponsiveContainer>
        <BarChart 
            data={chartData} 
            margin={{ top: 20, right: 20, bottom: 60, left: 10 }}
            accessibilityLayer
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="name"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            angle={-45}
            textAnchor="end"
            height={1}
          />
          <YAxis dataKey="weight" />
          <Tooltip 
            cursor={{ fill: 'hsl(var(--accent) / 0.1)' }} 
            content={<ChartTooltipContent indicator="dot" />} 
          />
          <Bar 
            dataKey="weight" 
            fill="var(--color-weight)" 
            radius={[4, 4, 0, 0]}
            name="Case Count"
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
