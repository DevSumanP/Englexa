import type { Config } from 'tailwindcss'

// =============================================================================
//  🎨 Tailwind Base Config — Eduvet Brand
//  Import in apps/web/tailwind.config.ts and spread into theme.extend
// =============================================================================
export const baseConfig: Partial<Config> = {
  theme: {
    extend: {

      colors: {
        brand: {
          primary:  '#641320',
          accent:   '#0000ee',
          white:    '#ffffff',
          ink:      '#111111',
          subtle:   '#333333',
          muted:    '#666666',
          border:   '#767676',
          btnText:  '#000000',
        },
      },

      fontFamily: {
        sans:    ['Inter', 'Inter Placeholder', 'sans-serif'],
        display: ['Inter', 'Inter Placeholder', 'sans-serif'],
        system:  ['sans-serif'],
      },

      // NOTE: This REPLACES Tailwind's default spacing scale.
      // p-4 = 20px here (not Tailwind's default 16px). Matches Framer extraction.
      spacing: {
        'px':  '1px',   '0.5': '2px',   '1':  '5px',   '2':  '10px',
        '3':   '14px',  '3.5': '15px',  '4':  '20px',  '5':  '25px',
        '6':   '30px',  '8':   '40px',  '9':  '45px',  '12': '60px',
        '13':  '65px',  '24':  '120px', '26': '130px',
      },

      fontSize: {
        'display':   ['10rem',     { lineHeight: '1.10', letterSpacing: '-4.8px',  fontWeight: '700' }],
        'h1-bold':   ['4rem',      { lineHeight: '1.10', letterSpacing: '-1.92px', fontWeight: '700' }],
        'h1':        ['4rem',      { lineHeight: '1.10', letterSpacing: '-1.92px', fontWeight: '600' }],
        'h2':        ['3rem',      { lineHeight: '1.20', letterSpacing: '-1.44px', fontWeight: '600' }],
        'h3':        ['2.5rem',    { lineHeight: '1.10', letterSpacing: '-1.2px',  fontWeight: '600' }],
        'h4':        ['2rem',      { lineHeight: '1.30',                           fontWeight: '600' }],
        'h5':        ['1.625rem',  { lineHeight: '1.30',                           fontWeight: '600' }],
        'h6':        ['1.25rem',   { lineHeight: '1.50', letterSpacing: '-0.6px',  fontWeight: '600' }],
        'h6-upper':  ['1.25rem',   { lineHeight: '1.20', letterSpacing: '-0.6px',  fontWeight: '600' }],
        'h6-sm':     ['1.125rem',  { lineHeight: '1.20',                           fontWeight: '600' }],
        'body-lg':   ['1rem',      { lineHeight: '1.60',                           fontWeight: '500' }],
        'body':      ['1rem',      { lineHeight: '1.20' }],
        'body-sb':   ['1rem',      { lineHeight: '1.20',                           fontWeight: '600' }],
        'sm':        ['0.9375rem', { lineHeight: '1.20',                           fontWeight: '600' }],
        'label':     ['0.875rem',  { lineHeight: '1.70' }],
        'label-sb':  ['0.875rem',  { lineHeight: '1.30',                           fontWeight: '600' }],
        'label-cap': ['0.875rem',  { lineHeight: '1.20' }],
        'micro':     ['0.75rem',   { lineHeight: '1.20' }],
      },

      borderRadius: {
        'card': '10px',
        'pill': '100px',
      },

      boxShadow: {
        'sm': '0 1px 3px rgba(0,0,0,0.08)',
        'md': '0 4px 12px rgba(0,0,0,0.10)',
        'lg': '0 8px 24px rgba(0,0,0,0.12)',
        'xl': '0 16px 48px rgba(0,0,0,0.16)',
      },

      screens: {
        'sm':  '810px',
        'md':  '1000px',
        'lg':  '1199px',
      },
    },
  },
}
