/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", // Include mdx if you use it
  ],
  theme: {
    extend: {
      // You can merge theme settings from the template later if needed
      colors: {
        // Your custom colors:
        primary: "rgb(59 130 246)", // Consider using Tailwind's blue-500 or defining custom CSS vars
        "primary-text": "var(--text-color)", // Make sure --text-color is defined in your global CSS
      },
      // Add font families if you want to customize them globally
      // fontFamily: {
      //   sans: ['Inter Variable', 'sans-serif'], // Example using Inter
      //   serif: ['YourSerifFont', 'serif'],
      // },
    },
  },
  plugins: [
    // Add any Tailwind plugins used by the template or your old site here
    // e.g., require('@tailwindcss/typography'),
    require("@tailwindcss/typography"), // Enable the typography plugin
  ],
};

export default config;
