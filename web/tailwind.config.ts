import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-red": "#dc2626",
        "brand-dark": "#991b1b",
        "brand-light": "#fee2e2",
        "brand-rose": "#f43f5e",
      },
      boxShadow: {
        glow: "0 20px 45px -20px rgba(220,38,38,0.55)",
      },
      backgroundImage: {
        "mesh-soft":
          "radial-gradient(circle at 10% 20%, rgba(248,113,113,0.35), transparent 35%), radial-gradient(circle at 80% 0%, rgba(244,63,94,0.22), transparent 35%), radial-gradient(circle at 50% 85%, rgba(239,68,68,0.25), transparent 40%)",
      },
      fontFamily: {
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
