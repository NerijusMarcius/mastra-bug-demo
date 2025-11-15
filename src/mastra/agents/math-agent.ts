import { DEFAULT_MODEL } from '@/lib/ai/models';
import { Agent } from '@mastra/core/agent';
import { sumNumbersTool } from '../tools/sum-numbers-tool';

export const mathAgent = new Agent({
  id: 'math-agent',
  name: 'Math Agent',
  description: 'Agent can sum two numbers',
  instructions: `
     You are a math agent that can sum two numbers.
     Use the sumNumbersTool to sum two numbers.
     `,
  model: DEFAULT_MODEL,
  tools: { sumNumbersTool },
  defaultOptions: {
    maxSteps: 10,
  },
});
