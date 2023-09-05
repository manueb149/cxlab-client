import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'cxlab': '0px 0px 15px 1px #ea642b',
      },
      colors: {
        'cxlab-ud': 'radial-gradient(25% 33% at 50% 46%, rgb(0 0 0 / 60%) 0%, rgb(8 5 0 / 40%) 200%)'
      }
    },
  },
  plugins: [require('daisyui')],
}
export default config
