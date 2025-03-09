
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			'dark-bg': '#0b0b0d',
			'light-bg': '#fff',
			'primary': '#',
			'secondary': '#',
			'': '#',
			'': '#',
  			animation: {
  				shimmer: 'shimmer 2s linear infinite'
  			},
  			keyframes: {
  				shimmer: {
  					from: {
  						backgroundPosition: '0 0'
  					},
  					to: {
  						backgroundPosition: '-200% 0'
  					}
  				}
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		screens: {
  			'0': '0px',
  			'400': '400px',
  			'425': '425px',
  			'500': '500px',
			'550':'550px',
  			'600': '600px',
  			'700': '700px',
  			'800': '800px',
  			'900': '900px',
  			'1024': '1024px',
  			'1100': '1100px',
  			'1200': '1200px',
  			'1300': '1300px',
  			xs: '645px',
  			ms: '796px',
  			hb1: '354px',
  			hb2: '649px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
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