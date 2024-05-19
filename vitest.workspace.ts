import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  "packages/*",
  {
    extends: "./vitest.config.base.ts",
    test: {
      include: ["__tests__/**/*.test.{tsx,jsx}"],
      name: "happy-dom",
      environment: "happy-dom",
    },
  },
  {
    extends: "./vitest.config.base.ts",
    test: {
      include: ["__tests__/**/*.test.{ts,js}"],
      name: "node",
      environment: "node",
    },
  },
]);
