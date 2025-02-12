// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */

export default {
    content: [
      './src/**/*.{astro,html,js,ts}',
    ],
    theme: {
      extend: {
        colors: {
          "micolor": "#FFFFFF",
        },
      },
    },
    plugins: [
    ],
};