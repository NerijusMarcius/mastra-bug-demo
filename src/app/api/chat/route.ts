// https://mastra.ai/reference/v1/client-js/agents#ai-sdk-compatible-format

import { mastra } from "@/mastra";
import { NextResponse } from "next/server";
import { toAISdkStream } from "@mastra/ai-sdk";
import { convertMessages } from "@mastra/core/agent";
import { createUIMessageStreamResponse } from "ai";

const agent = mastra.getAgent("orchestrationAgent");

export async function POST(req: Request) {
  const { messages, memory} = await req.json();
  
 /* const stream = await agent.stream(messages, {
    memory: {
      thread: memory.thread,
      resource: memory.resource,
    },
  });

  const aiStream = toAISdkStream(stream as unknown as Parameters<typeof toAISdkStream>[0], { from: "agent" });
  
  return createUIMessageStreamResponse({
    stream: aiStream,
  })*/

    console.log('last message', messages[messages.length - 1]);
    const stream = await agent.network(messages, {
      memory: {
        thread: memory.thread,
        resource: memory.resource,
      },
    });
  
    return createUIMessageStreamResponse({
      stream: toAISdkStream(stream, { from: "network" }),
    })
}

/*
export async function GET() {
  const memory = await agent.getMemory();
  const response = await memory?.query({
    threadId: "example-user-id",
    resourceId: "weather-chat",
  });

  const uiMessages = 
    convertMessages(response?.uiMessages ?? []).to("AIV5.UI");
  return NextResponse.json(uiMessages);
}*/