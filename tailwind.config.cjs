/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: '#1F3A5F',
                    dark: '#152945',
                    light: '#2a4d7a',
                },
                red: {
                    brand: '#B3202A',
                    dark: '#8f1921',
                    light: '#c93038',
                },
                bluegrey: '#EEF3F8',
            },
            fontFamily: {
                display: ['"Alumni Sans"', 'sans-serif'],
                body: ['"Inter"', 'sans-serif'],
            },
            backgroundImage: {
                'diagonal-navy': 'linear-gradient(135deg, #1F3A5F 0%, #152945 100%)',
                'diagonal-red': 'linear-gradient(135deg, #B3202A 0%, #8f1921 100%)',
            },
            clipPath: {
                diagonal: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                'diagonal-rev': 'polygon(0 0, 100% 15%, 100% 100%, 0 100%)',
            },
            animation: {
                'fade-up': 'fadeUp 0.6s ease forwards',
                'fade-in': 'fadeIn 0.5s ease forwards',
                'count-down': 'pulse 1s ease-in-out infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(24px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};
