/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "primary": "#FDE47F",
        "on-primary": "#413612",
        "primary-container": "#fef4ce",
        "on-primary-container": "#231b00",
        "primary-fixed": "#f6e1a2",
        "primary-fixed-dim": "#d9c689",
        "on-primary-fixed": "#231b00",
        "on-primary-fixed-variant": "#534616",

        "secondary": "#29A9E1",
        "on-secondary": "#ffffff",
        "secondary-container": "#bce3f6",
        "on-secondary-container": "#00344d",
        "secondary-fixed": "#c7e8f8",
        "secondary-fixed-dim": "#8dcff0",
        "on-secondary-fixed": "#001e30",
        "on-secondary-fixed-variant": "#004b73",

        "tertiary": "#76BC43",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#d9ecd1",
        "on-tertiary-container": "#1d3a0c",
        "tertiary-fixed": "#e3f2dc",
        "tertiary-fixed-dim": "#a2d47f",
        "on-tertiary-fixed": "#0d1f04",
        "on-tertiary-fixed-variant": "#2b5613",

        "error": "#C02418",
        "on-error": "#ffffff",
        "error-container": "#fadede",
        "on-error-container": "#410002",

        "surface-tint": "#B589D6",
        "outline": "#B589D6",
        "outline-variant": "#eadff0",

        "background": "#faf9fc",
        "on-background": "#1c1b1f",
        "surface": "#faf9fc",
        "on-surface": "#1c1b1f",
        "surface-variant": "#f0edf3",
        "on-surface-variant": "#49454f",
        "inverse-surface": "#313033",
        "inverse-on-surface": "#f4eff4",
        "inverse-primary": "#655931",

        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f4eff4",
        "surface-container": "#f0edf3",
        "surface-container-high": "#ebe7ee",
        "surface-container-highest": "#e6e2e9",
        "surface-bright": "#faf9fc",
        "surface-dim": "#e6e2e9",

        "joy": "#868242ff",
        "sadness": "#29A9E1",
        "disgust": "#76BC43",
        "fear": "#B589D6",
        "anger": "#C02418",

        "yellow": {
          "DEFAULT": "#d9cb00",
          "50": "#fdfced",
          "100": "#f8f2a3",
          "200": "#f4e96c",
          "300": "#eed600",
          "400": "#e6bb00",
          "500": "#d9cb00", // Base Joy
          "600": "#b3a600",
          "700": "#8a8000",
          "800": "#615900",
          "900": "#3d3800",
          "950": "#242100"
        },
        "blue": {
          "DEFAULT": "#29A9E1",
          "50": "#e0f2fb",
          "100": "#c2e6f7",
          "200": "#a3daf3",
          "300": "#65c2eb",
          "400": "#47b5e6",
          "500": "#29A9E1", // Base Sadness
          "600": "#2187b4",
          "700": "#196587",
          "800": "#10445a",
          "900": "#08222d",
          "950": "#041116"
        },
        "green": {
          "DEFAULT": "#76BC43",
          "50": "#eaf5e3",
          "100": "#d5eac7",
          "200": "#c1dfac",
          "300": "#98c977",
          "400": "#84c35d",
          "500": "#76BC43", // Base Disgust
          "600": "#5e9636",
          "700": "#477128",
          "800": "#2f4b1b",
          "900": "#18260d",
          "950": "#0c1307"
        },
        "purple": {
          "DEFAULT": "#B589D6",
          "50": "#f4eef9",
          "100": "#e9dcf4",
          "200": "#dfcbee",
          "300": "#cba8e3",
          "400": "#c098dd",
          "500": "#B589D6", // Base Fear
          "600": "#916eb0",
          "700": "#6d5282",
          "800": "#483756",
          "900": "#241b2b",
          "950": "#120e15"
        },
        "stone": {
          "50": "#f3f0f8",
          "100": "#e3dbf2",
          "200": "#cbbce6",
          "300": "#aa92d6",
          "400": "#8560c4",
          "500": "#663db0",
          "600": "#532c96",
          "700": "#43217d",
          "800": "#381c66",
          "900": "#2f1754",
          "950": "#1d0c38"
        },
        "red": {
          "DEFAULT": "#C02418",
          "50": "#fcecea",
          "100": "#fadad6",
          "200": "#f6b5ae",
          "300": "#f29187",
          "400": "#ee6c5f",
          "500": "#e94738",
          "600": "#C02418", // Base Anger
          "700": "#961c13",
          "800": "#64130d",
          "900": "#320906",
          "950": "#190503"
        }
      },
      "borderRadius": {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      "fontFamily": {
        "headline": ["Plus Jakarta Sans"],
        "body": ["Be Vietnam Pro"],
        "label": ["Inter"],
        "plus-jakarta": ["Plus Jakarta Sans"],
        "be-vietnam": ["Be Vietnam Pro"]
      }
    },
  },
  plugins: [],
}
