import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    fontFamily: {
      "sans": ["Montserrat", "sans-serif"],
      "serif": ["Gilda Display", "Georgia"],
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      colors: {
        "theme-green": "#324028",
        "theme-dark-brown": "#402D16",
        "theme-light-brown": "#735C3F",
        "theme-dark-beige": "#A6774E",
        "theme-light-beige": "#D9B384",
        "theme-gray": "#D9CDBF",
        "theme-offwhite": "#FBF4ED",
        "theme-white": '#FFFAF4',
        "theme-easel-border": "#634B3D",
        "theme-deco-green": "#02F67C",
        "theme-transparent-black": "rgba(0, 0, 0, 0.4)"
      },
    },
  },
};
