module.exports = {
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js,ts}'],
  theme: {
    container: ({theme}) => ({
      center: true,
      padding: theme('custom.spacing.gutter'),
    }),
    custom: {
      spacing: {
        gutter: '0.75rem',
      },
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      xs: ['10px', '15px'],
      sm: ['14px', '16px'],
      base: ['16px', '20px'],
      md: ['20px', '24px'],
      lg: ['22px', '24px'],
      xl: ['24px', '28px'],
      '2xl': ['28px', '32px'],
      '3xl': ['32px', '36px'],
      '4xl': ['48px', '56px'],
      '5xl': ['56px', '64px'],
    },

    extend: {
      colors: {
        primary: '#E65C4F',
        white: '#E9EEF2',
        blueDark: '#326789',
        blueLight: '#78A6C8'
      },
      boxShadow: ({theme}) => ({
        'glow-primary': `0 0 20px 3px ${theme('colors.primary')}`,
        'glow-primary-full': `0 0 10px 3px ${theme('colors.primary')}, 0 0 10px 3px ${theme('colors.primary')} inset`
      }),
      margin: {
        'container-boxed': 'var(--container-boxed-margin)'
      },
      padding: {
        'container-boxed': 'var(--container-boxed-margin)'
      },

    },
  },
  plugins: [],
};
