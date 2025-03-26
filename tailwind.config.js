/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      colors: {
        ab: "#006F4C",
        ba: "#047857",
        db: "#ECFDF5",
        bd: "#9BA7AD",
        cd: "#F4F4F4",
        dc: "#FFC66B",
        ac: "#FFFBEE",
        ad: "#EBEBEB",
        aa: "#262A2C",
        bb: "#4C5151",
        cc: "#FF002B",
        ff: "#ecfdf5",
        gg: "#64748b",
        hh: "#186749",
        ll: "#72dfbd",
        uu: "#828282",
        di: "#defaed",
        pp: "#9095a2",
        qq: "#d4d4d4",
      },
    },
  },
  plugins: [],
};
