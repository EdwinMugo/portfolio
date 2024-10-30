/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      margin:{
        '170': "170px",
      },
      padding: {
        '75': "75px",
      },
      gap: {
        '15': '60px',
      },
      borderRadius:{
        '50': "50px",
      },
      backgroundImage:{
        'custom-gradient': 'linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.06%)',
        'hero-gradient': 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
        'button-gradient': 'linear-gradient(264deg, #DF8908 -5.09%, #B415FF 100%)',
        'line-gradient': 'linear-gradient(264deg, #DF8908 -5.09%, #B415FF 106.28%)',
        'services-gradient': 'linear-gradient(270deg, #DF8908 50%, #B415FF 100%)',
        'service-format-gradient': 'linear-gradient(45deg, #3f0028, #582300)',
      }, 
      fontSize: {
        'large': "22px",
        'extra-large': "60px",
      }, 
      spacing: {
        '65': "65px",  // adds a custom value of 150px
      },
      colors: {
        "custom-purple": "#B415FF",
        "custom-white": "#d4d4d4",
      },
      zIndex: {
        'n1': '-1',
      },
      fontFamily:{
        'Outfit': ["Outfit", "Sans-serif"],
      },
    },
  },
  plugins: [],
}

