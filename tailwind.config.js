module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
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
      },
      spacing: {
        '30': '30px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
};