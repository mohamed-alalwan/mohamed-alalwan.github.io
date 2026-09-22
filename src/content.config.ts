import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    kicker: z.string(),
    summary: z.string(),
    organization: z.string(),
    period: z.string(),
    focus: z.string(),
    tags: z.array(z.string()),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    featured: z.boolean().default(false),
    order: z.number(),
    color: z.enum(['teal', 'orange', 'blue']),
    disclosure: z.string(),
  }),
});

export const collections = { work };
