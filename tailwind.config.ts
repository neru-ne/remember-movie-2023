import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize:{
      sm: '0.8rem',
      base: '1rem',
    },
    extend: {
      colors:{
        'default':'#333',
        'primary':'#07BCA7',
        'bgEnd':'#B7FFAB',
      }
    },
  },
  plugins: [],
}
export default config
