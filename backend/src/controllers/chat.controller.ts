import type { Request, Response, NextFunction } from "express";
import { z } from "zod";

import type { ChatRequest, ChatResponse } from "@shared/types";
import { getBotResponse } from "../services/chat.services";

const ChatSchema = z.object({
  message: z
    .string({ required_error: "Message is required" })
    .min(1, "Message is required")
    .max(500, "Message is too long (max 500 chars)"),
});

export const handleChatMessage = async (
  req: Request<
    Record<string, never>,
    ChatResponse | { error: string },
    ChatRequest
  >,
  res: Response<ChatResponse | { error: string }>,
  next: NextFunction,
) => {
  try {
    const { message } = ChatSchema.parse(req.body);

    const reply = getBotResponse(message);

    // Simulating small delay for UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    res.json({ reply, timestamp: Date.now() });
  } catch (error) {
    next(error);
  }
};
