/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// This is a Tailwind CSS configuration file that specifies the content sources
// for purging unused styles and extends the default theme. It includes
// the paths to all HTML and JavaScript files in the project.