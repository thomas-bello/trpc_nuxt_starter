import { type Config } from 'tailwindcss'

const contentPath = [
  '../../packages/ui/src/**/*.{js,ts,jsx,tsx,vue}',
  './**/*.{js,ts,jsx,tsx,vue}',
  './src/pages/**/*.{js,ts,jsx,tsx,vue}',
]

export default {
  content: contentPath,
  corePlugins: {
    preflight: false,
  },
} satisfies Config
