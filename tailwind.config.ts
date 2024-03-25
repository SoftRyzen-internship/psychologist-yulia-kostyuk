import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXL: { max: '1279.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      backgroundImage: {
        backdrop: `linear-gradient(rgba(41, 41, 41, 0.40),rgba(41, 41, 41, 0.40))`,
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      content: {
        arrow: `url(/icons/arrow-right.svg)`,
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        tenor: ['var(--font-tenor)'],
      },
      fontSize: {
        medium: ['28px', '1.28'],
        lightLarge: ['32px', '1.25'],
        large: ['40px', '1.2'],
        extraLarge: ['56px', '1.07'],
      },
      colors: {
        mainBcg: '#E5E1D5',
        footerBcg: '#D6D0C5',
        cardBcg: '#FAF5ED',
        accent: '#395734',
        text: '#292929',
        error: '#CB3D3D',
        hover: '#2C4228',
        pressed: '#21331F',
        border: 'rgba(57, 87, 52, 0.30)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
