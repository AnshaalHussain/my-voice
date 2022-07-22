module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#00c7c7",
        "primary-yellow": "#feb300",
        "primary-red": "#e6265e",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
