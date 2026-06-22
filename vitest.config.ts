import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@": dirname
    }
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./tests/setup.ts"],
    include: ["tests/**/*.test.ts", "tests/**/*.test.tsx"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      include: [
        "lib/analytics/events.ts",
        "lib/analytics/lead-attribution.ts",
        "lib/logging/**/*.ts",
        "lib/seo/metadata.ts",
        "lib/seo/schema.ts",
        "lib/seo/sitemaps.ts",
        "lib/seo/routes.ts"
      ],
      exclude: ["**/*.d.ts"],
      thresholds: {
        statements: 60,
        branches: 55,
        functions: 50,
        lines: 60
      }
    }
  }
});
