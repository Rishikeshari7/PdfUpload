/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        bgDark: "#141D2F",
        bgDarkBox: "#1E2A47",
        bgDarkBox2: "#141D2F",
        textDark: "#ffffff",
        // bgDarkForm:"#1E2A47",
        // bgLightForm:"#fefefe",
        textLight: "#4b6a9b",
        textLight2:"#2b3442",
        bgLightBox: "fefefe",
        bgLightBox: "f6f8ff",
        bgLight: "#f6f8ff",
      },
    },
  },
  plugins: [],
};
