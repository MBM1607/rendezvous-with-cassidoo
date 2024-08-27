/* eslint-disable import/no-default-export */
import { defineConfig } from "vitest/config.js";

export default defineConfig({
  test: {
    globals: true,
    clearMocks: true,
    environment: "node",
    typecheck: {
      include: ["**/*.test.{ts,tsx}"],
    },
  },
});
