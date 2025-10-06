import { visualizeCaseData } from '@/ai/flows/visualize-case-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { InsightsCharts } from './components/insights-charts';
import { Lightbulb } from 'lucide-react';

const mockCaseData = JSON.stringify([
  { "id": "C001", "district": "North District", "disbursement_delay_days": 5, "latitude": 28.70, "longitude": 77.10, "weight": 15 },
  { "id": "C002", "district": "South District", "disbursement_delay_days": 12, "latitude": 28.50, "longitude": 77.21, "weight": 8 },
  { "id": "C003", "district": "North District", "disbursement_delay_days": 3, "latitude": 28.75, "longitude": 77.15, "weight": 10 },
  { "id": "C004", "district": "East District", "disbursement_delay_days": 20, "latitude": 28.63, "longitude": 77.29, "weight": 25 },
  { "id": "C005", "district": "West District", "disbursement_delay_days": 8, "latitude": 28.66, "longitude": 77.09, "weight": 12 },
  { "id": "C006", "district": "South District", "disbursement_delay_days": 15, "latitude": 28.52, "longitude": 77.23, "weight": 18 },
]);

export default async function InsightsPage() {
  let visualization: string | undefined;
  let chartData: any[] = [];
  let error: string | null = null;

  try {
    const result = await visualizeCaseData({ caseData: mockCaseData });
    visualization = result.visualization;
    chartData = JSON.parse(result.heatmapData);
  } catch (e) {
    console.error("Failed to fetch AI insights:", e);
    error = "Could not load AI-powered insights at this time. The service may be temporarily unavailable.";
    // Provide some dummy data for the chart to render
    chartData = JSON.parse(mockCaseData);
    visualization = "AI analysis is currently unavailable. Showing mock analysis: The data indicates a high concentration of cases in the East District, which also experiences the longest disbursement delays. Policy intervention may be required in this area to improve efficiency. North and West districts show moderate case loads with better processing times."
  }
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Policy-Maker Insights
        </h1>
        <p className="text-muted-foreground">
          Real-time analysis and visualization of case data trends.
        </p>
      </div>

       {error && (
        <Card className="bg-destructive/10 border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Service Unavailable</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader className="flex flex-row items-start gap-4 space-y-0">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-1">
                <CardTitle>AI-Generated Analysis</CardTitle>
                <CardDescription>Key trends and takeaways.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{visualization}</p>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Case Concentration Hotspots</CardTitle>
            <CardDescription>
              Visualization of case counts across different geographical points.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <InsightsCharts data={chartData} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
