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
  // Sub-path matching the repository name on GitHub Pages.
  base: isGitHubPages ? '/earth-bridge-alliance-governance' : '/',
  output: 'static',
  // Adapter is only needed for Keystatic's on-demand SSR routes (local dev).
  adapter: isGitHubPages ? undefined : node({ mode: 'standalone' }),
  integrations: [
    starlight({
      title: 'NGO Bylaws & Constitution',
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        fr: {
          label: "Français",
          lang: "fr",
        },
      },
      sidebar: [
        {
          label: '00-introduction',
          items: [{ autogenerate: { directory: '00-introduction' } }],
        },
        {
          label: '10-architecture',
          items: [{ autogenerate: { directory: '10-architecture' } }],
        },
        {
          label: '20  Legal Foundation',
          items: [{ autogenerate: { directory: '20-foundation' } }],
        },
        {
          label: '30-charter',
          items: [{ autogenerate: { directory: '30-charter' } }],
        },
        {
          label: '40-board',
          items: [{ autogenerate: { directory: '40-board' } }],
        },
        {
          label: '50-policies',
          items: [{ autogenerate: { directory: '50-policies' } }],
        },
        {
          label: '60-reference',
          items: [{ autogenerate: { directory: '60-reference' } }],
        },
      ],
    }),
    react(),
    // Keystatic injects routes with `prerender: false`; exclude it from the
    // fully-static GitHub Pages build where SSR is not available.
    ...(isGitHubPages ? [] : [keystatic()]),
  ],
});
