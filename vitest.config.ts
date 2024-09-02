/* eslint-disable import/no-default-export */
import { defineConfig } from "vitest/config";

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
