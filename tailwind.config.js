module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'media',
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    extend: {
      colors: {
        grijs: '#ebeef3',
        oranje: '#e76f51',
        offWhite: '#fbfbf8',
        donkerBlauw: '#264653',
        footerKleur: '#ebeef3',
        lijngrijs: '#D9D9D9',

        darkGrijs: "#282828",
        donkerOranje: "#E76F51",
        donkerOffWhite: "#FFFFFF",
        donkerBlauw: "#264653",
        footerDark: "#232323",
        lijnDonker: "#D9D9D9",
      },
      spacing: {
        '30': '30px',
        '15': '15px',

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      dropShadow: {
        'imageachters': '5px 5px rgba(231, 111, 81)',
        'imageachterg': '10px 10px rgba(231, 111, 81)',
      }
    },
  },
};