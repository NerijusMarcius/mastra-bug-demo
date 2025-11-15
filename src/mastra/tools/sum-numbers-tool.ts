import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const sumNumbersTool = createTool({
  id: 'sum-numbers',
  description: 'Calculate the sum of two numbers',
  inputSchema: z.object({
    a: z.number().describe('First number'),
    b: z.number().describe('Second number'),
  }),
  outputSchema: z.object({
    result: z.number(),
  }),
  execute: async (inputData, context) => {
    /*await context?.writer?.custom({
      type: "data-tool-sum-numbers",
      data: {
        message: "data from sum numbers tool",
      }
    });*/
    
    return {
      result: inputData.a + inputData.b,
    };
  },
});

