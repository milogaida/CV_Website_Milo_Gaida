import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas:        "var(--bg)",
        "canvas-2":    "var(--bg-2)",
        "canvas-3":    "var(--bg-3)",
        gold:          "var(--gold)",
        "gold-dim":    "var(--gold-dim)",
        cream:         "var(--cream)",
        "cream-dim":   "var(--cream-dim)",
        ivory:         "var(--white)",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        // keep mono for data/code if ever needed
        mono:    ["var(--font-inter)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem", letterSpacing: "0.1em" }],
      },
      maxWidth: {
        "8xl": "1200px",
      },
      spacing: {
        "section": "9rem",
      },
    },
  },
  plugins: [],
};

export default config;
