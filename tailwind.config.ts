import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        base: "var(--color-base)",
        ink: "var(--color-ink)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        surface: "var(--color-surface)",
        elevated: "var(--color-surface-elevated)",
        line: "var(--color-line)"
      },
      maxWidth: {
        shell: "1240px"
      },
      borderRadius: {
        sm: "10px",
        md: "16px",
        lg: "24px"
      },
      boxShadow: {
        soft: "0 20px 45px rgba(0, 0, 0, 0.35)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"]
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.45s cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;
