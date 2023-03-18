/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}', 'index.html'],
    mode: 'jit',
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            colors: {
                primary: '#14b8a6',
                secondary: '#64748b',
                dark: '#0f172a',
            },
            screens: {
                '2xl': '1320px',
            },
            lineClamp: {
                8: '8',
            },
            aspectRatio: {
                '4/5': '4 / 5',
                '16/9': '16 / 9',
            },
        },
        variants: {
            lineClamp: ['hover'],
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
