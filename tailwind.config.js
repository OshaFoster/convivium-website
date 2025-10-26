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
        // Gold tones
        'gold': '#d4af37',
        'gold1': '#f6c156',
        'gold2': '#f2b158',
        'warm-beige': '#f5f1ea',
        'warm-cream': '#faf8f4',
        'warm-tan': '#e8dfd3',
        // Pink tones
        'pink-light': '#eb757f',
        'pink-dark': '#cc5260',
        // Dark charcoal
        'charcoal': '#262626',
        'charcoal-border': '#333333',
      },
    },
  },
  plugins: [],
};
