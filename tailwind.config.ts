import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize:{
      sm: '0.8rem',
      base: '1rem',
      lg: '1.125rem',
      xl:'1.25rem',
    },
    extend: {
      colors:{
        'default':'#333',
        'primary':'#07BCA7',
        'secondary':'#4E4E4E',
        'bgEnd':'#B7FFAB',
      }
    },
  },
  plugins: [],
}
export default config
