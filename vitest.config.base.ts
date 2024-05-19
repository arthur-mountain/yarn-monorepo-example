import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    include: ["__tests__/**/*.test.{ts,tsx,js,jsx}"],
    coverage: { provider: "v8" },
  },
});
