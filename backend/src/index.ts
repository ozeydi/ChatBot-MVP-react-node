import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/error.middleware";
import chatRoutes from "./routes/chat.routes";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Note: Enabling all origins for MVP development. In production, this should be restricted to specific allowed origins.
app.use(express.json());

// Routes
app.use("/api/chat", chatRoutes);

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`[server]: Backend is running at http://localhost:${PORT}`);
});
