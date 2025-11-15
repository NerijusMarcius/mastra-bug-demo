import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { weatherAgent } from './weather-agent';
import { mathAgent } from './math-agent';
import { DEFAULT_MODEL } from '@/lib/ai/models';
import { createStorage } from '@/lib/ai/storage';

export const orchestrationAgent = new Agent({
  id: 'orchestration-agent',
  name: 'Orchestration Agent',
  description: `Main orchestration agent that can orchestrate other agents.`,
  instructions: `
     You are a main orchestration agent that can orchestrate other agents.
     You can run:
     - weatherAgent to get weather information
     - mathAgent to sum two numbers
     `,
  model: DEFAULT_MODEL,
  agents: {
    weatherAgent,
    mathAgent,
  },
  
  memory: new Memory({
    storage: createStorage(),
    /*options: {
      lastMessages: 3,
    }*/
  }),
});
