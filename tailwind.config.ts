import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Kaisei Decol", ...fontFamily.serif],
        sans: ["InterVariable", "Inter", ...fontFamily.sans],
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
} satisfies Config;
