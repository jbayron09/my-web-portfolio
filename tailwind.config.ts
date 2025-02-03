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
      backgroundImage: {
        'banner': 'url("/images/banner.jpg")',
      },
      animation: {
        'floating': 'floating 3s ease-in-out infinite',
      },
      keyframes: {
        'floating': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
