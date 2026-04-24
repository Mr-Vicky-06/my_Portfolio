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
        },
        optimus: {
          red: "#D92121",
          blue: "#0047AB",
          silver: "#A8A9AD",
        },
        bumblebee: {
          yellow: "#F2D638",
          black: "#010600",
          blue: "#1EC4F2",
        },
        megatron: {
          silver: "#A8A9AD",
          gunmetal: "#71706E",
          purple: "#9333EA",
          red: "#781518",
        },
        soundwave: {
          navy: "#1F3165",
          blue: "#7B92D6",
          gold: "#D4AF37",
        }
      },
      boxShadow: {
        'glow-edge': '0 0 10px rgba(59, 130, 246, 0.3), inset 0 0 5px rgba(59, 130, 246, 0.1)',
        'glow-hover': '0 0 20px rgba(59, 130, 246, 0.5), inset 0 0 10px rgba(59, 130, 246, 0.2)',
        'optimus-glow': '0 0 15px rgba(217, 33, 33, 0.4)',
        'megatron-glow': '0 0 15px rgba(147, 51, 234, 0.4)',
      }
    },
  },
  plugins: [],
};
