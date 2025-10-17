import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0f9ac9",
          purple: "#71d6c0",
          dark: "#0b2239",
          light: "#f0faf7"
        }
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "system-ui", "sans-serif"],
        mono: ["'Fira Code'", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        glow: "0 0 25px rgba(15, 154, 201, 0.35)"
      }
    }
  },
  plugins: []
} satisfies Config;
