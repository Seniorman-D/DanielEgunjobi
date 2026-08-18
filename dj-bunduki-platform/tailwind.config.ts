import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bundukiBlack: "#050505",
        bundukiCard: "#111111",
        bundukiGold: "#D4AF37",
        bundukiRed: "#B11226",
        bundukiPurple: "#8B5CF6"
      }
    }
  },
  plugins: []
};

export default config;
