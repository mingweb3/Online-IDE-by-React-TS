/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px'
    },
    colors: {
      transparent: 'transparent',
      tab: 'currentColor',
      border: '#2C2C37',
      text: '#C6C6C6',
      text2: '#616162',
      text3: '#646cff',
      red: '#B02324',
      green: '#00A372',
      black1e: '#1e1e1e',
      bg3: '#282837',
      bg2: '#2E2E3A',
      bg: '#202029'
    },
    extend: {},
  },
  plugins: [],
});
