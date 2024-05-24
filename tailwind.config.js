import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        contrast: 'rgb(var(--color-contrast) / <alpha-value>)',
        accent: 'var(--color-accent)',
        accentDark: 'var(--color-accentDark)',
        black: 'rgba(var(--color-black) / <alpha-value>)',
        darkGray: 'rgba(var(--color-darkGray) / <alpha-value>)',
        gray: 'rgba(var(--color-gray) / <alpha-value>)',
        lightGray: 'rgba(var(--color-lightGray) / <alpha-value>)',
        lighterGray: 'rgba(var(--color-lighterGray) / <alpha-value>)',
        offWhite: 'rgba(var(--color-offWhite) / <alpha-value>)',
        white: 'rgba(var(--color-white) / <alpha-value>)',
      },
      borderRadius: {
        card: 'var(--card-radius)',
        button: 'var(--button-radius)',
      },
      screens: {
        sm: '32em',
        md: '48em',
        lg: '64em',
        xl: '80em',
        '2xl': '96em',
        'sm-max': {max: '48em'},
        'sm-only': {min: '32em', max: '48em'},
        'md-only': {min: '48em', max: '64em'},
        'lg-only': {min: '64em', max: '80em'},
        'xl-only': {min: '80em', max: '96em'},
        '2xl-only': {min: '96em'},
      },
      spacing: {
        nav: 'var(--height-nav)',
        screen: 'var(--screen-height, 100vh)',
      },
      height: {
        screen: 'var(--screen-height, 100vh)',
        'screen-no-nav':
          'calc(var(--screen-height, 100vh) - var(--height-nav))',
        'screen-dynamic': 'var(--screen-height-dynamic, 100vh)',
      },
      minHeight: {
        inherit: 'inherit',
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"IBMPlexSerif"', 'Palatino', 'ui-serif'],
      },
      fontSize: {
        display: ['var(--font-size-display)', '1.1'],
        heading: ['var(--font-size-heading)', '1.25'],
        lead: ['var(--font-size-lead)', '1.333'],
        copy: ['var(--font-size-copy)', '1.5'],
        fine: ['var(--font-size-fine)', '1.333'],
      },
      maxWidth: {
        'prose-narrow': '45ch',
        'prose-wide': '80ch',
      },
      boxShadow: {
        border: 'inset 0px 0px 0px 1px rgb(var(--color-primary) / 0.08)',
        darkHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.4)',
        lightHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.05)',
        card: '0px 4px 72.8px 0px rgba(0, 0, 0, 0.20)',
        badge:
          '0px 1px 2px rgba(0, 0, 0, 0.05), 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 4px 8px rgba(0, 0, 0, 0.05), 0px 8px 12px rgba(0, 0, 0, 0.05), 0px 12px 16px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [formsPlugin, typographyPlugin],
};
