/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'ptmono': ['PT Mono', 'sans-serif'],
            }
        },
    },
    plugins: [
        require("daisyui")
    ],
}