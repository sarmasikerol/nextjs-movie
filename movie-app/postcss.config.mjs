/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class", // ← Karanlık modu class ile kontrol etmek için
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // app dizinindeki tüm bileşenler
    "./src/components/**/*.{js,ts,jsx,tsx}", // src/components içindekiler (alias kullandıysan)
    "./src/app/**/*.{js,ts,jsx,tsx}"     // eğer src/app yapısı varsa
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
