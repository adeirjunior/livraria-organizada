import { type Config } from "tailwindcss";
import daisyui from 'daisyui';

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  plugins: [
    // @ts-expect-error: Couldn't identify the reason for this error
    daisyui
  ]
} satisfies Config;
