import type { Config } from 'tailwindcss'
import { baseConfig } from '../../packages/config/tailwind.config.base'

// =============================================================================
//  Tailwind Config — apps/web
//  Extends shared brand tokens from packages/config
// =============================================================================
const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      ...(baseConfig.theme?.extend ?? {}),
    },
  },
  plugins: [],
}

export default config
