module.exports = {
    content: ['./public/**/*.html', './src/**/*.{ts,tsx}'],
    theme: {
        fontFamily: {
            sans: 'Righteous, Hind-Gutur, Helvetica, Arial, sans-serif',
        },
        extend: {
            colors: {
                'black-netflix': '#141414',
                'primary-color': '#bf9629',
                'secondary-color': '#151516',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
