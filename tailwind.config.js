module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'btn-primary': '0px 9px 20px -5px',
        'card-shadow': '0 4px 10px rgba(39, 83, 123, 0.12)',
      },
    },
    colors: {
      main: '#343D48', // body color and primary color
      'main-secondary': '#02073E', // secondary body color
      heading: '#0F2137', // primary heading color
      'heading-secondary': '#0F2137', // heading color
      'white-ff': '#FFFFFF', // body background color
      'background-secondary': '#F9FBFD', // secondary background color
      border: '#E5ECF4', // border color
      'yellow-ff': '#FFA740',
      primary: '#EA3A60', // primary button and link color
      secondary: '#2563FF', // secondary color - can be used for hover states
      muted: '#E4E4E4', // muted color
      accent: '#609', // a contrast color for emphasizing UI
      'shadown-primary': 'rgba(233, 76, 84, 0.57)',
    },
    screens: {
      sm: '480px',
      md: '640px',
      '2md': '768px',
      lg: '1024px',
      xl: '1220px',
      '3xl': '1366px',
      '4xl': '1620px',
    },
    fontFamily: {
      logo: 'Dancing Script, cursive',
    },
  },
  plugins: [],
};
