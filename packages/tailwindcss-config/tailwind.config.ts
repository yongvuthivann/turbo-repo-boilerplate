import type { Config } from "tailwindcss";

const config = {
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  plugins: [],
} satisfies Config;

export default config;
