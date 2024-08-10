/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hankenGrotesk: ["HankenGrotesk", "sans-serif"],
      },
      colors: {
        Light_red: {
          100: "hsl(0, 100%, 67%)",
        },
        Orangey_yellow: {
          100: "hsl(39, 100%, 56%)",
        },
        Green_teal: {
          100: "hsl(166, 100%, 37%)",
        },
        Cobalt_blue: {
          100: "hsl(234, 85%, 45%)",
        },
        Light_slate_blue: {
          100: "hsl(252, 100%, 67%)",
        },
        Light_royal_blue: {
          100: "hsl(241, 81%, 54%)",
        },
        Pale_blue: {
          100: "hsl(221, 100%, 96%)",
        },
        Light_lavender: {
          100: "hsl(241, 100%, 89%)",
        },
        Dark_gray_blue: {
          100: "hsl(224, 30%, 27%)",
        },
        Violet_blue: {
          100: "hsla(256, 72%, 46%, 1)",
        },
        Persian_blue: {
          100: "hsla(241, 72%, 46%, 0)",
        },
      },
    },
  },
  plugins: [],
}

// ## Colors

// ### Primary

// - Light red: hsl(0, 100%, 67%)
// - Orangey yellow: hsl(39, 100%, 56%)
// - Green teal: hsl(166, 100%, 37%)
// - Cobalt blue: hsl(234, 85%, 45%)

// ## Gradients

// - Light slate blue (background): hsl(252, 100%, 67%)
// - Light royal blue (background): hsl(241, 81%, 54%)

// - Violet blue (circle): hsla(256, 72%, 46%, 1)
// - Persian blue (circle): hsla(241, 72%, 46%, 0)



// ### Neutral

// - White: hsl(0, 0%, 100%)
// - Pale blue: hsl(221, 100%, 96%)
// - Light lavender: hsl(241, 100%, 89%)
// - Dark gray blue: hsl(224, 30%, 27%)

