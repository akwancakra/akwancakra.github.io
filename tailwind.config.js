/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./public/**/*.{html,js}"],
    theme: {
        fontFamily: {
            space: ['"Space Grotesk"', "sans-serif"],
        },
        extend: {
            textColors: {
                black: "#333333",
            },
            borderRadius: {
                15: "15px",
                20: "20px",
            },
            keyframes: {
                increaseHeight: {
                    "0%": { height: "72px" },
                    "50%": { height: "120px" },
                    "100%": { height: "72px" },
                },
            },
            animation: {
                height: "increaseHeight 1.7s infinite",
            },
        },
    },
    plugins: [],
};
