// FIXME:: Seems does not applied when test run
import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    root: ".",
    globals: true,
    exclude: [...configDefaults.exclude, ".next/**"],
  },
});
