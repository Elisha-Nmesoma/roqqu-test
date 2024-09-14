import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        profileColor: "#F0A0A0",
        nav: "#24273A",
        primary: "#1C2127",
        secondary: "#20252B",
        secondary2: "#252A30",
        border: "#737A91",
        border2: "#262932",
        border3:"#373B3F",
        btn_container: "#262B31",
        grey: "#A7B1BC",
        grey16: "#A7B1BC29",
        lightgrey:"#B1B5C3",
        Orange: "#FF6838",
        green: "#25C26E",
        red: "#FF554A",
        blue : "#2764FF",
        black: "#00000028",
        gradient1: "#483BEB",
        gradient2: "#7847E1",
        gradient3: "#DD568D",
        marketBg:"#353945",
      
       
      }
    },
  },
  plugins: [],
};
export default config;
