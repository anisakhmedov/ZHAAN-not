import type { Config } from 'tailwindcss';
import sharedPreset from '@zhaan/config/tailwind/preset';

const config: Config = {
  presets: [sharedPreset],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
