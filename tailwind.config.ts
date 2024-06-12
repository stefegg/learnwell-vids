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
        tangerine: "#ff844d",
        elecBlue: "#50c7e5",
        greenLight: "#49c19d",
        greenDark: "#3b9393",
        greenFog: "#3c5f72",
      },
    },
  },
  plugins: [],
};
export default config;
