import { test, expect } from "@playwright/test";

test.describe("Chat Bot Integration Flow", () => {
  test("should allow user to send a message and receive a bot response", async ({
    page,
  }) => {
    await page.goto("/");

    // 1. Verify Page Identity (A11y/SEO check)
    await expect(page).toHaveTitle(/Support Assistant/);
    await expect(page.getByText("Support Assistant")).toBeVisible();

    // 2. Interaction: Type message
    const input = page.getByLabel("Message input");
    await input.fill("how much does it cost?");

    // 3. Action: Send
    const sendButton = page.getByRole("button", { name: /send message/i });
    await sendButton.click();

    // 4. Verification: Check message list updates
    await expect(page.getByText("how much does it cost?")).toBeVisible();
    // Bot response (handling simulated network delay)
    await expect(
      page.getByText("Our pricing starts at $9.99/month"),
    ).toBeVisible({ timeout: 10000 });
  });
});
