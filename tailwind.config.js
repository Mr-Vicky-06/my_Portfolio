/** @type {import('tailwindcss').Config} */
module.exports = {
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
        mechanical: {
          dark: "#0A0F1C",
          panel: "#131A2A",
          border: "#1E293B",
          glow: "rgba(59, 130, 246, 0.5)",
          accent: "#3B82F6",
          accentCyan: "#06B6D4"
        }
      },
      boxShadow: {
        'glow-edge': '0 0 10px rgba(59, 130, 246, 0.3), inset 0 0 5px rgba(59, 130, 246, 0.1)',
        'glow-hover': '0 0 20px rgba(59, 130, 246, 0.5), inset 0 0 10px rgba(59, 130, 246, 0.2)',
      }
    },
  },
  plugins: [],
};
