module.exports = {
  mode: "jit",
  purge: ["./src/**/*.css", "./**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "day-green": "#B7FEB9",
      "night-green": "#1BFF37",
      "day-teal": "#A8FEFF",
      "night-teal": "#12FFFF",
      "day-pink": "#FEB1FE",
      "night-pink": "#FF31FF",
      blackish: "#080F0F",
      "day-gray": "#E9EAEB",
      "night-gray": "#646568",
      "link-blue": "#4169E1",
    },
    fontFamily: {
      sans: ["'Space Grotesk'"],
    },
    extend: {
      animation: {
        "spin-slow": "spin 60s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
