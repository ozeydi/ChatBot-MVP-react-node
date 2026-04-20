import type { Request, Response } from "express";
import type { ChatRequest, ChatResponse } from "@shared/types";
import { getBotResponse } from "../services/chat.services";

export const handleChatMessage = (
  req: Request<
    Record<string, never>,
    ChatResponse | { error: string },
    ChatRequest
  >,
  res: Response<ChatResponse | { error: string }>,
) => {
  const { message } = req.body;

  // Manual validation for initial commit
  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Message is required" });
  }

  const reply = getBotResponse(message);

  // Simulating small delay for UX using standard setTimeout
  setTimeout(() => {
    res.json({ reply, timestamp: Date.now() });
  }, 500);
};
