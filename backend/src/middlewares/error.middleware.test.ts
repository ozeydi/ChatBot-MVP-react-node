import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../index";

describe("Error Middleware Integration", () => {
  it("should handle Zod validation errors and return 400", async () => {
    const response = await request(app).post("/api/chat").send({}); // Invalid payload

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toContain("Message is required");
  });

  it("should handle character limit violations", async () => {
    const response = await request(app)
      .post("/api/chat")
      .send({ message: "a".repeat(501) }); // Exceeds 500 chars

    expect(response.status).toBe(400);
    expect(response.body.error).toContain("Message is too long");
  });
});
