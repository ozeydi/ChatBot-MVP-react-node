import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "list",
  use: {
    baseURL: "http://localhost:5173",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: [
    {
      command: "npm run dev -w backend",
      port: 5000,
      reuseExistingServer: true,
    },
    {
      command: "npm run dev -w frontend",
      port: 5173,
      reuseExistingServer: true,
      stdout: "pipe",
    },
  ],
});
