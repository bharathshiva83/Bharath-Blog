import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()),
    coverImage: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};
