# 🤖 Fullstack Support Chatbot (WIP)

This repository contains a keyword-based support chatbot MVP. This is currently a **Work in Progress**, being built incrementally across different feature branches.

## 🎯 Project Goals

- [ ] Set up Monorepo structure with Shared Types
- [ ] Implement Node.js/Express backend with keyword logic
- [ ] Build React frontend chat interface
- [ ] Connect frontend and backend

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, CSS Modules/Tailwind.
- **Backend**: Node.js, Express, TypeScript.
- **Linter**: ESLint with TypeScript support.

## 📂 Project Structure

```text
.
├── apps/
│   ├── client/      # React frontend
│   └── server/      # Node.js Express backend
├── packages/
│   └── shared/      # Shared TypeScript interfaces and 
├── eslint.config.js # Global linting configuration
└── README.md
```

## ⚙️ Setup & Installation

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

Install dependencies from the root directory:

```bash
npm install
```

### Running the Application

You can start both the backend and frontend simultaneously from the root (if using a workspace runner like `concurrently`) or navigate to individual directories.

**Start Backend:**
```bash
cd apps/server
npm run dev
```

**Start Frontend:**
```bash
cd apps/client
npm run dev
```

## 💬 Conversation Logic

The chatbot responds to the following keywords:
- **Pricing**: "price", "cost", "pricing"
- **Greetings**: "hello", "hi", "hey"
- **Support**: "help", "support"
- **Features**: "features", "services"
