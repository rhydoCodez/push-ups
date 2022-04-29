module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "genius-blue": "#5978BB",
        "genius-yellow": "#FED663",
        "genius-cream": "#FFECB5",
        "genius-red": "#D90404",
        "genius-green": "#008910",
        "genius-gray": "#707070",
        "genius-purple": "#711774",
        "genius-darkRed": "#CF0000",
        "genius-darkBlue": "#1321DB",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        userLoginBG: "url('/assets/userLoginBGImage.jpg')",
        footerBG: "url('/assets/footerBG.jpg')",
      },
    },
  },
  plugins: [],
}
