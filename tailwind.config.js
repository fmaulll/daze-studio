/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        whatsapp: {
          DEFAULT: '#075E54',
          light: '#DCF8C6',
          bg: '#E5DDD5'
        },
        imessage: {
          blue: '#007AFF',
          gray: '#E9E9EB',
          bg: '#F3F3F3'
        }
      }
    },
  },
  plugins: [],
} 