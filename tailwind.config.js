/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2196f3',
        secondary: '#1976d2',
      },
    },
  },
  plugins: [],
  // aspectRatio: {
  //       'w-16': '16',
  //       'h-9': '9',
  //     },
  //   },
  // },
  // plugins: [
  //   require('@tailwindcss/aspect-ratio'),
  // ],
  
}

// module.exports = {
//   theme: {
//     extend: {
//       aspectRatio: {
//         'w-16': '16',
//         'h-9': '9',
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/aspect-ratio'),
//   ],
// }