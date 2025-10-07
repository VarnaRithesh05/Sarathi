'use server';
/**
 * @fileOverview An AI-powered flow to check user eligibility for welfare schemes.
 *
 * - checkSchemeEligibility - A function that takes user data and schemes and returns eligibility.
 * - CheckSchemeEligibilityInput - The input type for the checkSchemeEligibility function.
 * - CheckSchemeEligibilityOutput - The return type for the checkSchemeEligibility function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SchemeSchema = z.object({
  name: z.string(),
  description: z.string(),
});

const UserProfileSchema = z.object({
  caste: z.string(),
  annualIncome: z.number(),
  isBPL: z.boolean(),
  disability: z.string().optional(),
  occupation: z.string(),
});

export const CheckSchemeEligibilityInputSchema = z.object({
  userProfile: UserProfileSchema.describe("The user's profile data."),
  schemes: z.array(SchemeSchema).describe('A list of available welfare schemes.'),
});
export type CheckSchemeEligibilityInput = z.infer<typeof CheckSchemeEligibilityInputSchema>;

const EligibleSchemeSchema = z.object({
  name: z.string().describe('The name of the scheme the user is likely eligible for.'),
  reason: z.string().describe('A brief explanation for why the user is eligible.'),
});

export const CheckSchemeEligibilityOutputSchema = z.object({
  eligibleSchemes: z.array(EligibleSchemeSchema).describe('A list of schemes the user is likely eligible for.'),
});
export type CheckSchemeEligibilityOutput = z.infer<typeof CheckSchemeEligibilityOutputSchema>;

export async function checkSchemeEligibility(input: CheckSchemeEligibilityInput): Promise<CheckSchemeEligibilityOutput> {
  return checkSchemeEligibilityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'checkSchemeEligibilityPrompt',
  input: {schema: CheckSchemeEligibilityInputSchema},
  output: {schema: CheckSchemeEligibilityOutputSchema},
  prompt: `You are an expert on Indian government welfare schemes.
Analyze the user's profile and the provided list of schemes.
Based on the scheme descriptions, determine which schemes the user is likely eligible for.

User Profile:
- Caste: {{{userProfile.caste}}}
- Annual Income: {{{userProfile.annualIncome}}}
- BPL Status: {{{userProfile.isBPL}}}
- Occupation: {{{userProfile.occupation}}}
{{#if userProfile.disability}}
- Disability: {{{userProfile.disability}}}
{{/if}}

Available Schemes:
{{#each schemes}}
- **{{name}}**: {{description}}
{{/each}}

Return a list of schemes the user is likely eligible for, along with a brief reason for each determination. Focus only on the provided schemes.
`,
});

const checkSchemeEligibilityFlow = ai.defineFlow(
  {
    name: 'checkSchemeEligibilityFlow',
    inputSchema: CheckSchemeEligibilityInputSchema,
    outputSchema: CheckSchemeEligibilityOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
