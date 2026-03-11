import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#f0f3fa",
          100: "#d9e0f0",
          200: "#b3c2e1",
          300: "#8da3d2",
          400: "#6785c3",
          500: "#4166b4",
          600: "#2e4f96",
          700: "#1e3571",
          800: "#152550",
          900: "#0d1830",
          950: "#070e1e",
        },
        brand: {
          blue:   "#1a2f6e",
          dark:   "#0f1d45",
          orange: "#e8610a",
          amber:  "#f59e0b",
          light:  "#f4f7ff",
        },
      },
      fontFamily: {
        display: ["var(--font-barlow)", "system-ui", "sans-serif"],
        body:    ["var(--font-source)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "radial-gradient(ellipse at 60% 50%, #1a3a7a 0%, #0d1830 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
