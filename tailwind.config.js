/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./code_files/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '72': '18rem', // add your custom spacing beyond the default scale
        '80': '20rem',
        // ...
      },
      colors: {
        whitesmoke: {
          "100": "#f4f4f4",
          "200": "#f3f3f3",
          "300": "#ebeff3",
        },
        gray: {
          "100": "#7f7f7f",
          "200": "#161616",
          "300": "rgba(0, 0, 0, 0.3)",
        },
        tomato: "#ea4335",
        white: "#fff",
        gainsboro: {
          "100": "#dbdbdb",
          "200": "#dadada",
        },
        black: "#000",
        darkgray: "#9d9d9d",
        aliceblue: "#e7ecf3",
        mediumseagreen: "#34a853",
        lightgoldenrodyellow: "#d5ffd4",
        dodgerblue: "#4285f4",
        darkslategray: "#434343",
        lightcoral: "#ff9d9d",
      },
      spacing: {},
      fontFamily: {
        "roboto-mono": "'Roboto Mono'",
        inter: "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        "2xs": "11px",
      },
    },
    fontSize: {
      smi: "13px",
      "6xs": "7px",
      xs: "12px",
      xl: "20px",
      "29xl": "48px",
      "3xs": "10px",
      base: "16px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  
    
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

const btn = document.querySelector('button.search-button');
const show = document.querySelector('.search-bar');

btn.addEventListener('click', () => {
  show.classList.toggle("hidden");
 
});