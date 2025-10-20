/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/slices/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ["var(--font-dm-sans)"],
        }
    },
  },
  plugins: [],
}

