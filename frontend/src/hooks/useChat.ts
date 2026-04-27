import { useState, useCallback } from "react";
import type { Message, ChatResponse } from "@shared/types";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api/chat";

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "1",
      text: "Hello! How can I help you today?",
      sender: "bot",
      timestamp: Date.now(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (text: string) => {
    const userMsg: Message = {
      id: crypto.randomUUID(),
      text,
      sender: "user",
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        throw new Error(errorBody.error || `Error: ${response.status}`);
      }

      const data: ChatResponse = await response.json();
      const botMsg: Message = {
        id: crypto.randomUUID(),
        text: data.reply,
        sender: "bot",
        timestamp: data.timestamp,
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err: unknown) {
      console.error("Chat error:", err);
      const message =
        err instanceof Error
          ? err.message
          : "Unable to reach the server. Please try again later.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { messages, isLoading, error, sendMessage };
};
