import { defineCollection, z } from 'astro:content';

export const collections = {
  works: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      libraries: z.array(z.string()),
      repository: z.string().regex(/.+\/.+/),
      url: z.string().url(),
    }),
  }),
} as const;
