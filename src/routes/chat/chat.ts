import { Router } from "express";
import { Paths } from "src/common/Paths";
import { getCompletion } from "src/services/openai-service";
import { sendValidator } from "./validator";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

export const ChatRouter = Router();

ChatRouter.post(Paths.Chat.Send, async (req, res) => {
  console.log(req.body);
  const { messages } = sendValidator.parse(req.body);
  const chatResponse = await getCompletion(
    messages as ChatCompletionMessageParam[]
  );
  res.send(chatResponse);
});
