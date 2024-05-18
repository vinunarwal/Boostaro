module.exports = {
  content: ["./src/components/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        customBgColorHSL: "hsl(316, 39%, 25%)", 
        customBgColorHex: "#fcf2cc", 
        customBgColor: "#fffae6",
      },
    },
  },
  plugins: [],
};
