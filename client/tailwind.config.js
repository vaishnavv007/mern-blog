// tailwind.config.js

import flowbite from 'flowbite-react/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    flowbite.content(), // Adds flowbite-react content
  ],
  plugins: [
    flowbite.plugin(), // Adds Flowbite React plugin
  ],
};
