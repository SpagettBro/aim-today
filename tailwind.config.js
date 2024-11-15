module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    extend: {
      colors: {
        grey: '#808080',
        darkGreen: '#012524',
        darkTeal: '#003846',
        offWhite: '#fdfff9',
        pink: '#f4c5fe',
        limeGreen: '#a8ff1a',
        lightLime: '#eaffbc',
        DonkerBlauw: '#264653',
      },
      backgroundImage: {
        limeGradient: 'linear-gradient(#a8ff1a, #eaffbc)',
        pinkGradient: 'linear-gradient(#f4c5fe, #eaffbc)',
        tealGradient: 'linear-gradient(#003846, #fdfff9)',
      },
      spacing: {
        '30': '30px',
      },
    },
  },
};
