import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../index";

describe("Chat Controller Integration", () => {
  it("should return a valid bot response for a known keyword", async () => {
    const response = await request(app)
      .post("/api/chat")
      .send({ message: "What is the price?" });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("reply");
    expect(response.body.reply).toContain("$9.99");
    expect(response.body).toHaveProperty("timestamp");
  });

  it("should return the default response for unknown input", async () => {
    const response = await request(app)
      .post("/api/chat")
      .send({ message: "Can you fly?" });

    expect(response.status).toBe(200);
    expect(response.body.reply).toContain(
      "I'm sorry, I didn't quite catch that",
    );
  });
});
