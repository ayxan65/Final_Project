import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
       'primary':'rgba(67, 80, 114, 1)',
       'secondary':'rgba(96, 111, 132, 1)',
       'white':'#fff',
        'red':'red',
        'gray':'gray',
        'stone':'rgba(252, 252, 252, 1)',
        'grey':'rgba(224, 225, 225, 1)',
        'third':'rgba(244, 244, 244, 1)',
        'fourth':'rgba(243, 243, 243, 1)'
        
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
