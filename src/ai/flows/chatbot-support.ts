'use server';
/**
 * @fileOverview An AI-powered multilingual chatbot for victim support.
 *
 * - chatbotSupport - A function that handles user queries and provides support.
 * - ChatbotSupportInput - The input type for the chatbotSupport function.
 * - ChatbotSupportOutput - The return type for the chatbotSupport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotSupportInputSchema = z.object({
  query: z.string().describe('The user query or question.'),
  language: z.string().describe('The preferred language of the user.'),
});
export type ChatbotSupportInput = z.infer<typeof ChatbotSupportInputSchema>;

const ChatbotSupportOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user query.'),
});
export type ChatbotSupportOutput = z.infer<typeof ChatbotSupportOutputSchema>;

export async function chatbotSupport(input: ChatbotSupportInput): Promise<ChatbotSupportOutput> {
  return chatbotSupportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotSupportPrompt',
  input: {schema: ChatbotSupportInputSchema},
  output: {schema: ChatbotSupportOutputSchema},
  prompt: `You are a multilingual chatbot designed to provide support and information to victims.
Respond to the user's query in their preferred language.

User Query: {{{query}}}
Preferred Language: {{{language}}}

Response:`, // The LLM will complete this response.
});

const chatbotSupportFlow = ai.defineFlow(
  {
    name: 'chatbotSupportFlow',
    inputSchema: ChatbotSupportInputSchema,
    outputSchema: ChatbotSupportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
