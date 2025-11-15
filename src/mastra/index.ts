
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
//import { Observability } from '@mastra/observability';
import { weatherWorkflow } from './workflows/weather-workflow';
import { weatherAgent } from './agents/weather-agent';
//import { testAgent } from './agents/math-agent';
import { orchestrationAgent } from './agents/orchestration-agent';
import { chatRoute, networkRoute } from '@mastra/ai-sdk';
import { createStorage } from '@/lib/ai/storage';

export const mastra = new Mastra({
  //workflows: { weatherWorkflow },
  agents: {orchestrationAgent },
  storage: createStorage(),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),

  /*bundler: {
    externals: ["@mastra/mongodb"]
  },*/
  /*observability: new Observability({
    // Enables DefaultExporter and CloudExporter for tracing
    default: { enabled: true },
    }),*/

    /*server: {
      apiRoutes: [
        //list name of my buildings
        chatRoute({
          path: '/chat',
          agent: 'sqlAgent',
        }),
        
       networkRoute({
          path: '/chat',
          agent: 'orchestrationAgent',
        }),
      ],
    },*/
});
