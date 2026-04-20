export interface KnowledgeBaseEntry {
  keywords: string[];
  response: string;
}

export const KNOWLEDGE_BASE: KnowledgeBaseEntry[] = [
  {
    keywords: ["price", "cost", "pricing"],
    response: "Our pricing starts at $9.99/month",
  },
  {
    keywords: ["hello", "hi", "hey"],
    response: "Hello! How can I assist you today?",
  },
  {
    keywords: ["help", "support"],
    response: "I'm here to help. What can I do for you?",
  },
  {
    keywords: ["features", "services"],
    response:
      "We offer various features including cloud storage, real-time sync, and 24/7 support",
  },
  {
    keywords: ["security", "safe", "encrypted", "privacy"],
    response:
      "We use industry-standard AES-256 encryption and follow strict privacy protocols to ensure your data is always safe.",
  },
  {
    keywords: ["storage", "limit", "capacity", "space"],
    response:
      "Our basic plan includes 100GB of storage. Premium plans offer up to 2TB or unlimited storage depending on your needs.",
  },
  {
    keywords: ["trial", "free", "demo", "test"],
    response:
      "Yes! You can start a 14-day free trial today with no credit card required to explore all our premium features.",
  },
  {
    keywords: ["integrate", "api", "connect", "tools"],
    response:
      "We integrate seamlessly with popular tools like Slack, Google Drive, and Dropbox. Check our documentation for API details.",
  },
  {
    keywords: ["account", "login", "password", "sign in"],
    response:
      "You can manage your account settings or reset your password by clicking on the profile icon in the top right corner.",
  },
];

export const DEFAULT_BOT_RESPONSE =
  "I'm sorry, I didn't quite catch that. Could you try rephrasing your question?";
