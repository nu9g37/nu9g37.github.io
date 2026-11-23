import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nu9g37.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
