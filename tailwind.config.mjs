/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a001b", // Deep purple-black
        foreground: "#ffffff",
        primary: "#a855f7", // Purple-500
        secondary: "#d8b4fe", // Purple-300
        accent: "#14b8a6", // Teal-500 (Cyan)
        darkvl: "#05000e", // Very dark violet 
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
      },
    },
  },
  plugins: [],
};
