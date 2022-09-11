/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        color: {
            primary: {
                100: '#ED5959',
                200: '#78d27f',
                300: '#F6F9FF'
            }
        },
        extend: {
            fontFamily: {
                'display': ['Poppins', ],
                'body': ['Poppins', ],
                'sans': ['Poppins', ],
                'serif': ['Poppins', ],
            }
        },
    },
    plugins: [],
}