export type MessageSender = "user" | "bot";

export interface Message {
  id: string;
  text: string;
  sender: MessageSender;
  timestamp: number;
}

export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  reply: string;
  timestamp: number;
}
