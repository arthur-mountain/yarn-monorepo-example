import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "./vitest.config.base.ts",
    test: {
      include: ["**/__tests__/**/*.test.{tsx,jsx}"],
      name: "js-dom",
      environment: "jsdom",
    },
  },
  {
    extends: "./vitest.config.base.ts",
    test: {
      include: ["**/__tests__/**/*.test.{ts,js}"],
      name: "node",
      environment: "node",
    },
  },
]);
