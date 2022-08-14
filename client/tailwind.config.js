module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tara: {
          'yellow' : "#F5C32C",
          'orange' : "#FCA61F",
          'black' : "#242D49",
          'gray' : "#788097",
          'blueCard' : "#DDF8FE",
          'purple': "#D2EEFF",
          'orangeCard': "#fca61f"
        },
    },
    dropShadow:{
      'boxShadow' : '0px 19px 60px rgb(0, 0, 0, 0.08)',
      'smboxShadow': '-79px 51px 60px rgba(0, 0, 0, 0.08)',
    },
  },
},
  plugins: [],
}