/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,vue,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey-darker': '#505050',
        'grey-dark': '#757575',
        'grey': '#bebebe',
        'grey-light': '#dedede',
        'grey-lighter': '#efefef',
        'grey-dark-alpha': 'rgba(0, 0, 0, 0.55)',
        'grey-lighter-alpha': 'rgba(0, 0, 0, 0.06)',
        'alert-error-light': '#ffefef',
        'alert-error': '#d8343d',
        'alert-warning-light': '#fff5e3',
        'alert-warning': '#ffbd40',
        'alert-success-light': '#efe',
        'alert-success': '#448644',
        'alert-success-dark': '#2d6a2d',
        'alert-informational-light': '#e9f8ff',
        'alert-informational': '#3484ab',
        'intrepid-red': '#ff2828',
        'intrepid-red-lighter': '#ffc2c2',
        'intrepid-red-light': '#ff7d7d',
        'intrepid-red-dark': '#eb0000',
        'intrepid-red-darker': '#c80000',
        'sand': '#f6f4f0',
        'plum': '#a71f50',
        'midnight': '#222',
        'midnight-light': '#42576a',
        'midnight-dark': '#151f28',
        'okavango': '#0a6e50'
      },
      fontFamily: {
        base: ['Montserrat', 'Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
        impact: ['Moderat', 'Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      },
      fontWeight: {
        h1: '600',
        h2: '400',
        h3: '600',
        h4: '600',
        h5: '600',
        h6: '600'
      }
    }
  },
  plugins: [],
}

