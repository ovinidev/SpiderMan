import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		red: {
			dark: '#AB0E12',
			normal: '#E42B2F',
			light: '#FA3C41',
		},
	},
	breakpoints: {
		small: '36rem', // 576px
		medium: '45rem', // 720px
		large: '60rem', // 960px
		xlarge: '75rem', // 1200px
	},
	fonts: {
		body: 'mukta, system-ui, sans-serif',
		heading: 'mukta, system-ui, sans-serif',
	},
	fontSizes: {
		'1xs': '0.625rem', // 10px
		'2xs': '0.75rem', // 12px
		sm: '0.875rem', // 14px
		md: '1rem', // 16px
		lg: '1.125rem', // 18px
		xl: '1.25rem', // 20px
		'2xl': '1.375rem', // 22px
		'3xl': '1.5rem', // 24px
		'4xl': '1.625rem', // 26px
		'5xl': '1.75', // 28px
		'6xl': '1.875rem', // 30px
		'7xl': '2rem', // 32px
		'8xl': '2.125rem', // 34px
		'9xl': '2.25rem', // 36px
	},
	fontWeights: {
		hairline: 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900,
	},
	radii: {
		none: '0',
		sm: '0.125rem',
		base: '0.25rem',
		md: '0.375rem',
		lg: '0.5rem',
		xl: '0.75rem',
		'2xl': '1rem',
		'3xl': '1.5rem',
		full: '9999px',
	},

	styles: {
		global: {
			body: {
				bg: '#0A0C10',
				color: '#FFFFFF',
			},
		},
	},
});
