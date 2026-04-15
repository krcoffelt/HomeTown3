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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        }
      },
      maxWidth: {
        shell: "1280px"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 0.5rem)",
        "2xl": "calc(var(--radius) + 1rem)"
      },
      boxShadow: {
        "card": "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        "hero": "var(--shadow-hero)",
        "glow": "var(--shadow-glow)",
        "elevated": "var(--shadow-elevated)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"]
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" }
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" }
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" }
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) both",
        "fade-in": "fade-in 0.5s ease both",
        "scale-in": "scale-in 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) both",
        "slide-in-right": "slide-in-right 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) both",
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
