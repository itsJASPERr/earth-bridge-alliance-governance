import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

// `output: "hybrid"` was removed in Astro 5+. `output: "static"` now behaves
// identically — individual routes (e.g. Keystatic admin/API) opt into SSR via
// `prerender: false`. The Node adapter serves those on-demand routes.
export default defineConfig({
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    starlight({
      title: 'NGO Bylaws & Constitution',
      sidebar: [
        {
          label: 'Core Governance',
          items: [{ autogenerate: { directory: 'governance' } }],
        },
      ],
    }),
    react(),
    keystatic(),
  ],
});
