import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cheese: "#ffbf46",
        tangerine: "#fe8949",
        elecBlue: "#50c7e5",
        greenLight: "#49c19d",
        greenDark: "#3b9393",
        greenFog: "#3c5f72",
        textDark: "#3a3a3a",
      },
    },
  },
  plugins: [],
};
export default config;
