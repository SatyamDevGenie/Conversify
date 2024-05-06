/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/*.js"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// };
