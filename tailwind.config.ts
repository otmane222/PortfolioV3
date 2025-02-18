
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        animation: {
          shimmer: "shimmer 2s linear infinite",
        },
        keyframes: {
          shimmer: {
            from: {
              backgroundPosition: "0 0",
            },
            to: {
              backgroundPosition: "-200% 0",
            },
          },
        },
      },
      screens: {
        'xs': '645px',
        'ms': '796px',
        'hb1':'354px',
        'hb2':'649px',
        '0': '0px',
        '425': '425px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
        '900': '900px',
        '1024': '1024px',
        '1100': '1100px',
        '1200': '1200px',
        '1300': '1300px',

      },
    },
  },
  plugins: [],
} satisfies Config;

// '601': '601px',
// '602': '602px',
// '603': '603px',
// '604': '604px',
// '605': '605px',
// '606': '606px',
// '607': '607px',
// '608': '608px',
// '609': '609px',
// '610': '610px',
// '611': '611px',
// '612': '612px',
// '613': '613px',
// '614': '614px',
// '615': '615px',
// '616': '616px',
// '617': '617px',
// '618': '618px',
// '619': '619px',
// '620': '620px',