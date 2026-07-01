import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

// When building for GitHub Pages (GITHUB_PAGES=true) we produce a fully static
// site: the Node adapter and Keystatic's SSR admin routes are omitted because
// GitHub Pages only serves static files. Locally, the Node adapter enables the
// Keystatic admin dashboard at /keystatic.
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  // Canonical URL for the GitHub Pages deployment.
  site: 'https://itsJASPERr.github.io',
  // Use repo sub-path on GitHub Pages; use root path locally for DX.
  base: isGitHubPages ? '/earth-bridge-alliance-governance' : '/',
  output: 'static',
  // Adapter is only needed for Keystatic's on-demand SSR routes (local dev).
  adapter: isGitHubPages ? undefined : node({ mode: 'standalone' }),
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
    // Keystatic injects routes with `prerender: false`; exclude it from the
    // fully-static GitHub Pages build where SSR is not available.
    ...(isGitHubPages ? [] : [keystatic()]),
  ],
});
