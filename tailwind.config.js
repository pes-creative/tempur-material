/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'material-gradient': 'linear-gradient(to bottom right, #040816, #1C0B5B)'
        // 'material-gradient': 'linear-gradient(to bottom right, #040816, #0a0b38, #140864, #1C0B5B)'
        'material-gradient': 'linear-gradient(to bottom right, #040816, #331c38, #45263d, #1C0B4B)'
        // 'material-gradient': 'linear-gradient(to bottom right, #040816, #2a2047, #493256, #1C0B5B)'
        // 'material-gradient': 'linear-gradient(to bottom right, #040816, #253545, #405066, #1C0B5B)'
        // 'material-gradient': 'linear-gradient(to bottom right, #040816, #333456, #504b6e, #1C0B5B)'
        // 'material-gradient': 'linear-gradient(to bottom right, #040816, #1d3348, #3a4f65, #1C0B5B)'
        // 'material-gradient': 'linear-gradient(to bottom right, #040816, #1d3348, #3a4f65, #1C0B5B)'
        // 'material-gradient': 'linear-gradient(to bottom right, #040816, #29294c, #4b4b70, #1C0B5B)'
        // 'material-gradient': 'linear-gradient(to bottom right, #040816, #2c2f4f, #555676, #1C0B5B)'

      },
    },
  },
  plugins: [],
};
