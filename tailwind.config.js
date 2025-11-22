/** @type {import('tailwindcss').Config} */
module.exports = {
  // PENTING: Tentukan path ke SEMUA file yang berisi kelas Tailwind
  content: [
    "./index.html", // Menambahkan file utama portofolio Anda
    // Anda bisa menambahkan path lain di sini jika ada file JS terpisah
    // misalnya: "./js/**/*.js"
  ],

  // Mengaktifkan Dark Mode berdasarkan class="dark" pada elemen HTML
  darkMode: "class",

  theme: {
    extend: {},
  },
  plugins: [],
};
