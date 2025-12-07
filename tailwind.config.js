/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            colors: {
                'cyber-black': '#0a0a0a',
                'cyber-dark': '#0f172a',
                'neon-blue': '#00f3ff',
                'neon-green': '#00ff9f',
                'neon-purple': '#bd00ff',
                'glass-white': 'rgba(255, 255, 255, 0.05)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'glow': 'glow 3s infinite',
                'typewriter': 'typewriter 4s steps(40) 1s 1 normal both',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 0 5px #00f3ff, 0 0 10px #00f3ff' },
                    '50%': { boxShadow: '0 0 20px #00f3ff, 0 0 30px #00f3ff' },
                },
                typewriter: {
                    'from': { width: '0' },
                    'to': { width: '100%' }
                }
            }
        },
    },
    plugins: [],
}
