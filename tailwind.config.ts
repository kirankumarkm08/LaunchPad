
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    backdropBlur: {
      sm: "6px",
    },
    fontWeight: {
      light: "200",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    extend: {
      borderRadius: {
        "4xl": "1.75rem",
      },
      colors: {
        dark: {
          50: "#141110",
          100: "#1C1917",
          900: "#0C0A09",
          primary: "#FFD24B",
          "primary-dark": "#FFF8E3",

          "black-05": "rgba(250,250,249,0.05)",
          "black-10": "rgba(250,250,249,0.10)",
          "black-20": "rgba(250,250,249,0.20)",
          "black-30": "rgba(250,250,249,0.30)",
          "black-40": "rgba(250,250,249,0.40)",
          "black-50": "rgba(250,250,249,0.50)",
          "black-60": "rgba(250,250,249,0.60)",
          "black-70": "rgba(250,250,249,0.70)",
          "black-80": "rgba(250,250,249,0.80)",
          "black-90": "rgba(250,250,249,0.90)",

          "transparent-white-05": "rgba(248, 250, 252, 0.05)",
          "white-05": "rgba(12,10,9,0.05)",
          "white-10": "rgba(12,10,9,0.10)",
          "white-20": "rgba(12,10,9,0.20)",
          "white-30": "rgba(12,10,9,0.30)",
          "white-40": "rgba(12,10,9,0.40)",
          "white-50": "rgba(12,10,9,0.50)",
          "white-60": "rgba(12,10,9,0.60)",
          "white-70": "rgba(12,10,9,0.70)",
          "white-80": "rgba(12,10,9,0.80)",
          "white-90": "rgba(12,10,9,0.90)",

          "red-50": "#450A0A",
          "red-200": "#991B1B",
          "red-500": "#F87171",
          "red-900": "#FEE2E2",

          "green-50": "#052E16",
          "green-200": "#166534",
          "green-500": "#4ADE80",
          "green-900": "#DCFCE7",

          "blue-50": "#172554",
          "blue-200": "#1E40AF",
          "blue-500": "#60A5FA",
          "blue-900": "#DBEAFE",

          text: {
            50: "#0C0A09",
            400: "#57534E",
            500: "#78716C",
            700: "#D6D3D1",
            950: "#FAFAF9",
          },
          mustard: {
            50: "#1D1A11",
            100: "#433A20",
            200: "#5F5126",
            300: "#7E6929",
            400: "#C09000",
            500: "#F1B500",
            600: "#FFD24B",
            700: "#D6D3D1",
            800: "#E7E5E4",
            900: "#FFF8E3",
            950: "#FFFDF7",
          },
          graystone: {
            50: "#0C0A09",
            100: "#1C1917",
            200: "#292524",
            300: "#44403C",
            400: "#57534E",
            500: "#78716C",
            600: "#A8A29E",
            700: "#D6D3D1",
            800: "#E7E5E4",
            900: "#F5F5F4",
            950: "#FAFAF9",
          },
        },
        light: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          900: "#FFFFFF",
          primary: "#C09000",
          "primary-dark": "#503C00",
          "black-05": "rgba(12,10,9,0.05)",
          "black-10": "rgba(12,10,9,0.10)",
          "black-20": "rgba(12,10,9,0.20)",
          "black-30": "rgba(12,10,9,0.30)",
          "black-40": "rgba(12,10,9,0.40)",
          "black-50": "rgba(12,10,9,0.50)",
          "black-60": "rgba(12,10,9,0.60)",
          "black-70": "rgba(12,10,9,0.70)",
          "black-80": "rgba(12,10,9,0.80)",
          "black-90": "rgba(12,10,9,0.90)",

          "white-05": "rgba(250,250,249,0.05)",
          "white-10": "rgba(250,250,249,0.10)",
          "white-20": "rgba(250,250,249,0.20)",
          "white-30": "rgba(250,250,249,0.30)",
          "white-40": "rgba(250,250,249,0.40)",
          "white-50": "rgba(250,250,249,0.50)",
          "white-60": "rgba(250,250,249,0.60)",
          "white-70": "rgba(250,250,249,0.70)",
          "white-80": "rgba(250,250,249,0.80)",
          "white-90": "rgba(250,250,249,0.90)",

          "red-50": "#FEF2F2",
          "red-200": "#FECACA",
          "red-500": "#EF4444",
          "red-900": "#7F1D1D",

          "green-50": "#F0FDF4",
          "green-200": "#BBF7D0",
          "green-500": "#22C55E",
          "green-900": "#14532D",

          "blue-50": "#EFF6FF",
          "blue-200": "#BFDBFE",
          "blue-500": "#3B82F6",
          "blue-900": "#1E3A8A",

          text: {
            50: "#FAFAF9",
            400: "#A8A29E",
            500: "#78716C",
            700: "#44403C",
            950: "#0C0A09",
          },
          mustard: {
            50: "#FFFDF7",
            100: "#FFF8E3",
            200: "#FFF3CF",
            300: "#FFE38F",
            400: "#FFD24B",
            500: "#F1B500",
            600: "#C09000",
            700: "#9A7300",
            800: "#755800",
            900: "#503C00",
            950: "#241B00",
          },
          graystone: {
            50: "#FAFAF9",
            100: "#F5F5F4",
            200: "#E7E5E4",
            300: "#D6D3D1",
            400: "#A8A29E",
            500: "#78716C",
            600: "#57534E",
            700: "#44403C",
            800: "#292524",
            900: "#1C1917",
            950: "#0C0A09",
          },
        },
        "accent-blue": "#1DA1F2",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
      },
      backgroundImage: {
        "hero-banner-start-dark": "url('/assets/icons/banner-stars-dark.svg')",
        "hero-banner-start-light":
          "url('/assets/images/banner-stars-light.png')",
        chains: "url('/assets/images/zenpad-chains.png')",
        "zenpad-rings-light": "url('/assets/icons/zenpad-rings.svg')",
        "zenpad-rings-dark": "url('/assets/icons/zepad-rings-dark.svg')",
        "chains-dark": "url('/assets/images/chains-dark.png')",
        "steps-grid-line-dark": "url('/assets/icons/steps-grid-line-dark.svg')",
        "steps-grid-line-light":
          "url('/assets/icons/steps-grid-line-light.svg')",

        "primary-gradient":
          "linear-gradient(96deg, #F1B500 -8.94%, #F19100 -8.93%, #FFD24B 101.94%)",
        "fade-light-gradient":
          "linear-gradient(0, #FFF 0%, rgba(250, 250, 250, 0.00) 100%)",
        "fade-dark-gradient":
          "linear-gradient(180deg, rgba(12, 10, 9, 0.00) 0%, #0C0A09 100%)",
        "dark-bottom-to-top-gradient":
          "linear-gradient(0, #1C1917 0%, #0C0A09 100%)",
        "dark-top-to-bottom-gradient":
          "linear-gradient(180deg, #1C1917 0%, #0C0A09 100%)",
        "light-bottom-to-top-gradient":
          "linear-gradient(180deg, #FFF 0%, rgba(242, 242, 242, 0.00) 100%)",
        "light-top-to-bottom-gradient":
          "linear-gradient(0, #FFF 0%, rgba(242, 242, 242, 0.00) 100%)",
      },
      transitionDuration: {
        "850": ".85s",
      },
      backgroundPosition: {
        "right-top-4": "right top -5.5rem",
      },
      screens: {
        xs: "420px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scale: {
          "0%, 100%": {
            transform: "scale(1.05)",
            opacity: 0,
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scale: "scale 1s ease-out",
        fadeIn: "fadeIn 1s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
