'use server';
/**
 * @fileOverview Visualizes case data for policy-makers, displaying geographical heatmaps with real-time visualization of case concentrations,
 * disbursement delays, and trend analysis.
 *
 * - visualizeCaseData - A function that handles the case data visualization process.
 * - VisualizeCaseDataInput - The input type for the visualizeCaseData function.
 * - VisualizeCaseDataOutput - The return type for the visualizeCaseData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VisualizeCaseDataInputSchema = z.object({
  caseData: z.string().describe('JSON string containing case data with geographical information and disbursement details.'),
});
export type VisualizeCaseDataInput = z.infer<typeof VisualizeCaseDataInputSchema>;

const VisualizeCaseDataOutputSchema = z.object({
  visualization: z.string().describe('A detailed, multi-sentence analysis of the case data, highlighting trends, geographical concentrations, and disbursement delays. Identify specific districts by name.'),
  heatmapData: z.string().describe('JSON string containing data suitable for rendering a geographical heatmap.'),
});
export type VisualizeCaseDataOutput = z.infer<typeof VisualizeCaseDataOutputSchema>;

export async function visualizeCaseData(input: VisualizeCaseDataInput): Promise<VisualizeCaseDataOutput> {
  return visualizeCaseDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'visualizeCaseDataPrompt',
  input: {schema: VisualizeCaseDataInputSchema},
  output: {schema: VisualizeCaseDataOutputSchema},
  prompt: `You are an expert data visualizer for policy-makers.
  Your task is to analyze the provided case data and provide a detailed summary covering three key areas:
  1.  **Geographical Concentrations**: Identify which specific districts have the highest case concentrations.
  2.  **Disbursement Delays**: Pinpoint the districts experiencing the longest disbursement delays and quantify them.
  3.  **Trends & Recommendations**: Based on the data, describe any notable trends and suggest a concrete policy recommendation.

  Case Data: {{{caseData}}}

  Provide your analysis in the 'visualization' field. In the 'heatmapData' field, provide a JSON object containing
  data suitable for rendering a geographical heatmap. The JSON object should contain an array of objects, each with
  a 'latitude', 'longitude', and 'weight' (case count) field.
  `,
});

const visualizeCaseDataFlow = ai.defineFlow(
  {
    name: 'visualizeCaseDataFlow',
    inputSchema: VisualizeCaseDataInputSchema,
    outputSchema: VisualizeCaseDataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
