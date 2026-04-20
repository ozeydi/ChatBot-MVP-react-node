import express from "express";
import cors from "cors";
import chatRouter from "./routes/chat.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Note: Enabling all origins for MVP development. In production, this should be restricted to specific allowed origins.
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running");
});

app.use("/api/chat", chatRouter);

app.listen(PORT, () => {
  console.log(`[server]: Backend is running at http://localhost:${PORT}`);
});
