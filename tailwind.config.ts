import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
        sm: '1rem',
        lg: '45px',
        xl: '5rem',
        '2xl': '13rem',
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
          DEFAULT: "#000",
          100: "#000319",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
