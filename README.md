# ChatBot-MVP

A production-ready full-stack monorepo featuring a TypeScript Express backend and a React frontend with integrated E2E testing. Designed for modern file-system based utility and storage management with real-time collaborative features.

## 🚀 Features

- **Monorepo Architecture**: Efficient management of frontend, backend, and E2E tests using NPM Workspaces.
- **Reactive Chat Interface**: Integrated support bot with keyword-based intelligence for instant user assistance.
- **Type-Safe API**: End-to-end type safety using TypeScript and Zod for runtime schema validation.
- **Modern UI**: A responsive, clean interface built with React 19 and Tailwind CSS.
- **Developer Experience**: Real-time development with HMR (Hot Module Replacement) and concurrent execution of services.


### Runtime Requirements (Production)
- Node.js v22.x runtime
- Environment variables configured (see `.env.local.example`)
- Network access for API endpoints

## 🛠 Tech Stack & Rationale

### Backend Stack
| Technology | Version | Purpose | Why Chosen |
|-----------|---------|---------|-----------|
| **Express** | 5.x | HTTP Server Framework | Latest, stable, minimal overhead; excellent middleware ecosystem |
| **TypeScript** | 5.7 | Type Safety | Catches errors at compile-time; improves code quality & IDE support |
| **Zod** | 3.24+ | Runtime Validation | Parse & validate untrusted input; type inference from schemas |
| **tsx** | 4.19+ | TypeScript Executor | Native ESM support; instant execution without build step |
| **Cors** | 2.8.5 | Cross-Origin Control | Secure API; flexible origin policies |

**Architecture**: RESTful API with keyword-based chat service; modular controller-service-repository pattern.

### Frontend Stack
| Technology | Version | Purpose | Why Chosen |
|-----------|---------|---------|-----------|
| **React** | 19 | UI Framework | Latest stable; fiber-based rendering; excellent ecosystem |
| **Vite** | 8.x | Build Tool | Lightning-fast dev server; native ESM; minimal config |
| **Tailwind CSS** | 3.4 | Styling | Utility-first; no CSS bloat; responsive by default |
| **TypeScript** | 6.0 | Type Safety | Full compatibility with React 19; strict mode enabled |

**Architecture**: Component-driven SPA with hooks-based state management; alias paths for shared types.

### Quality & Tooling
| Technology | Version | Purpose | Why Chosen |
|-----------|---------|---------|-----------|
| **ESLint** | 9.x | Linting | Flat config; strict rule set; TypeScript support |
| **Concurrently** | 9.2+ | Process Management | Run backend + frontend simultaneously during dev |

### Shared Packages
- **@shared/types**: TypeScript interfaces & types (used by backend & frontend)
- Single source of truth for API contracts


## 🏁 Getting Started

### Prerequisites Verification
```bash
# Verify Node.js version
node --version  # Should output v22.0.0 or higher

# Verify NPM version
npm --version   # Should output v10.x or higher
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://gitlab.com/Ozeydi/fs-store.git
   cd fs-store
   ```

2. **Install dependencies for all workspaces**:
   ```bash
   npm install
   ```
   This installs dependencies for: root, backend, frontend

3. **Configure Environment Variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` with your configuration (see Environment Variables section below).

### Development

#### Start Development Servers
```bash
# Run backend and frontend concurrently
npm run dev

# Or run individually:
npm run dev:backend   # Backend on http://localhost:5000
npm run dev:frontend  # Frontend on http://localhost:5173
```

#### Build for Production
```bash
npm run build
```



### Code Quality

#### Linting
```bash
# Check for linting errors
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

## 🔧 Environment Variables

Create `.env.local` in the root directory:

```env
# Backend
PORT=5000
VITE_API_URL=http://localhost:5000/api/chat
```

**Note**: Variables prefixed with `VITE_` are accessible in the browser; keep sensitive data in backend-only variables.


### Chat Endpoint

**POST** `/api/chat`

Request body:
```json
{
  "message": "How much does it cost?"
}
```

Response:
```json
{
  "reply": "Our pricing starts at $9.99/month.",
  "timestamp": "2026-04-20T10:30:00Z"
}
```

**Status Codes**:
- `200 OK` - Message processed successfully
- `400 Bad Request` - Invalid message format
- `500 Internal Server Error` - Server error

## 🔄 Architecture & Design Patterns

### Backend Patterns
- **MVC-inspired**: Controllers handle requests, Services contain logic, Constants store app data
- **Middleware**: CORS for cross-origin requests, JSON body parsing
- **Keyword-based Routing**: Chat service uses keyword matching for intent detection

### Frontend Patterns
- **Component Composition**: Functional components with React Hooks
- **Type Safety**: TypeScript strict mode; shared types from `@shared/types`
- **Path Aliases**: `@shared/*` resolves to `../shared/*` for clean imports
- **Styling**: Tailwind utilities + custom CSS for component styling

### Monorepo Conventions
- **Workspaces**: Backend, Frontend, E2E each have own `package.json`
- **Shared Types**: `shared/types.ts` is single source of truth for API contracts
- **Root Scripts**: Run scripts from root to execute in all/specific workspaces
- **ESM Modules**: All packages use `"type": "module"` for native ESM


## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port in .env.local
PORT=5001
```

### Module Resolution Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Vite HMR Issues
```bash
# In vite.config.ts, check HMR configuration for your environment
```

## 📄 License

ISC
