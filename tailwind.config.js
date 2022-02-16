// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Catamaran", ...fontFamily.sans],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: withOpacityValue("--tw-color-primary-50"),
          100: withOpacityValue("--tw-color-primary-100"),
          200: withOpacityValue("--tw-color-primary-200"),
          300: withOpacityValue("--tw-color-primary-300"),
          400: withOpacityValue("--tw-color-primary-400"),
          500: withOpacityValue("--tw-color-primary-500"),
          600: withOpacityValue("--tw-color-primary-600"),
          700: withOpacityValue("--tw-color-primary-700"),
          800: withOpacityValue("--tw-color-primary-800"),
          900: withOpacityValue("--tw-color-primary-900"),
        },
        dark: "#222222",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
