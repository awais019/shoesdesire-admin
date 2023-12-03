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
        anti_flash_white: "#f2f4f7",
        flash_white: "#EFF1F5",
        dim_gray: "#646777",
        eucalyptus: "#4ce1b6",
        gray: "#999999",
        light_azure: "#70bbfd",
        azure: "#3ea3fc",
        platinum: "#dee2e6",
      },
      boxShadow: {
        header: "rgba(0, 0, 0, 0.05) 0px 2px 15px 0px",
        sidebar: "rgba(0, 0, 0, 0.11) 0px 1px 30px 1px",
        block: "rgba(0, 0, 0, 0.06) 0px 10px 30px 1px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
