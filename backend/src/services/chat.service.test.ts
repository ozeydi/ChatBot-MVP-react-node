import { describe, it, expect } from "vitest";
import { getBotResponse } from "./chat.services";
import { DEFAULT_BOT_RESPONSE } from "../constants/chat.constants";

describe("Chat Service Logic", () => {
  it("should return correct response for pricing keywords", () => {
    const response = getBotResponse("how much does it cost?");
    expect(response).toContain("$9.99");
  });

  it("should return correct response for features keywords", () => {
    const response = getBotResponse("what are your services?");
    expect(response).toContain("cloud storage");
  });

  it("should return default response when no keywords match", () => {
    const response = getBotResponse("random gibberish");
    expect(response).toBe(DEFAULT_BOT_RESPONSE);
  });
});
