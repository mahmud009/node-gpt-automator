import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import Env from "src/common/Env";

const openai = new OpenAI({
  apiKey: Env.OpenAiApiKey,
});

export async function getCompletion(messages: ChatCompletionMessageParam[]) {
  const gptResponse = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: messages,
  });
  return gptResponse;
}
