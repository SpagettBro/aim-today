module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "media",
  // darkMode: 'class',
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
        donkerOranje: "#d64d36",
        donkerOffWhite: "#1e1e1c",
        donkerBlauw: "#1b2b35",
        footerDark: "#232323",
        lijnDonker: "#3f3f3f",
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