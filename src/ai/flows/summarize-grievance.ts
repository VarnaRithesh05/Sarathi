'use server';
/**
 * @fileOverview An AI-powered flow to summarize grievance descriptions.
 *
 * - summarizeGrievance - A function that takes grievance text and returns a summary.
 * - SummarizeGrievanceInput - The input type for the summarizeGrievance function.
 * - SummarizeGrievanceOutput - The return type for the summarizeGrievance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeGrievanceInputSchema = z.object({
  grievanceText: z.string().describe('The full text of the grievance to be summarized.'),
});
export type SummarizeGrievanceInput = z.infer<typeof SummarizeGrievanceInputSchema>;

const SummarizeGrievanceOutputSchema = z.object({
  summary: z.string().describe('A concise, one-sentence summary of the grievance.'),
});
export type SummarizeGrievanceOutput = z.infer<typeof SummarizeGrievanceOutputSchema>;

export async function summarizeGrievance(input: SummarizeGrievanceInput): Promise<SummarizeGrievanceOutput> {
  return summarizeGrievanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeGrievancePrompt',
  input: {schema: SummarizeGrievanceInputSchema},
  output: {schema: SummarizeGrievanceOutputSchema},
  prompt: `You are an expert at summarizing official complaints.
Analyze the following grievance text and provide a concise, one-sentence summary that captures the core issue.

Grievance Text:
{{{grievanceText}}}

Summary:`,
});

const summarizeGrievanceFlow = ai.defineFlow(
  {
    name: 'summarizeGrievanceFlow',
    inputSchema: SummarizeGrievanceInputSchema,
    outputSchema: SummarizeGrievanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
