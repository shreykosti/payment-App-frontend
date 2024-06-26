/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        vsm: { raw: "(min-height: 640px)" },
        vmd: { raw: "(min-height: 768px)" },
        vlg: { raw: "(min-height: 1024px)" },
        vxl: { raw: "(min-height: 1280px)" },
        v2xl: { raw: "(min-height: 1536px)" },
      },
    },
  },
  plugins: [],
};
