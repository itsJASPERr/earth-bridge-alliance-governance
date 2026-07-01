import { config, collection, fields } from '@keystatic/core';

export default config({
  storage:
    process.env.NODE_ENV === 'production'
      ? {
          kind: 'github',
          repo: {
            owner: 'itsJASPERr',
            name: 'earth-bridge-alliance-governance',
          },
        }
      : { kind: 'local' },

  collections: {
    governance: collection({
      label: 'Governance',
      slugField: 'title',
      path: 'src/content/docs/governance/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          links: true,
          tables: true,
        }),
      },
    }),
  },
});
