'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing AI-driven intelligent service suggestions in the OPS Marketplace.
 *
 * - intelligentServiceMatching - A function that takes user needs as input and returns service suggestions with reasoning.
 * - IntelligentServiceMatchingInput - The input type for the intelligentServiceMatching function.
 * - IntelligentServiceMatchingOutput - The return type for the intelligentServiceMatching function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IntelligentServiceMatchingInputSchema = z.object({
  userNeeds: z
    .string()
    .describe('A description of the users needs for their project.'),
});
export type IntelligentServiceMatchingInput = z.infer<typeof IntelligentServiceMatchingInputSchema>;

const IntelligentServiceMatchingOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('A list of service suggestions based on the user needs.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the service suggestions provided.'),
});
export type IntelligentServiceMatchingOutput = z.infer<typeof IntelligentServiceMatchingOutputSchema>;

export async function intelligentServiceMatching(input: IntelligentServiceMatchingInput): Promise<IntelligentServiceMatchingOutput> {
  return intelligentServiceMatchingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'intelligentServiceMatchingPrompt',
  input: {schema: IntelligentServiceMatchingInputSchema},
  output: {schema: IntelligentServiceMatchingOutputSchema},
  prompt: `You are an AI assistant in an enterprise service marketplace. Your task is to provide service suggestions based on the user's described needs. Also give a brief and concise reasoning behind the suggestions.

User Needs: {{{userNeeds}}}

Suggestions:
{{suggestions}}

Reasoning: {{reasoning}}`,
});

const intelligentServiceMatchingFlow = ai.defineFlow(
  {
    name: 'intelligentServiceMatchingFlow',
    inputSchema: IntelligentServiceMatchingInputSchema,
    outputSchema: IntelligentServiceMatchingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
