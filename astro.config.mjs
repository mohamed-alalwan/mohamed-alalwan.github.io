import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mohamedalalwan.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => new URL(page).pathname !== '/404/' })],
});
