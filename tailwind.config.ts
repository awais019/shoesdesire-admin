/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        dark_gunmetal: "#232329",
        charleston_green: "#2A2A31",
        gainsboro: "#dddddd",
        onyx: "#38383f",
        eucalyptus: "#4ce1b6",
        gray: "#999999",
        light_azure: "#70bbfd",
        azure: "#3ea3fc",
        platinum: "#dee2e6",
      },
      boxShadow: {
        header: "rgba(0, 0, 0, 0.05) 0px 2px 15px 0px",
        sidebar: "rgba(0, 0, 0, 0.11) 0px 1px 30px 1px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
