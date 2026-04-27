import {
  DEFAULT_BOT_RESPONSE,
  KNOWLEDGE_BASE,
} from "../constants/chat.constants";

/**
 * Processes the user message and returns a predefined response based on keywords.
 */
export const getBotResponse = (message: string): string => {
  const normalizedInput = message.toLowerCase();

  const match = KNOWLEDGE_BASE.find((entry) =>
    entry.keywords.some((keyword) => normalizedInput.includes(keyword)),
  );

  return match ? match.response : DEFAULT_BOT_RESPONSE;
};
