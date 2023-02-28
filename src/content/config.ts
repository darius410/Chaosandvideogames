
import { z, defineCollection } from 'astro:content';

const blogs = defineCollection({
  
  schema: z.object({
    title: z.string(),
    subtitle:z.string(),
    publishDate: z.string().transform(str => new Date(str)),
    tags: z.array(z.string()),
    image: z.object({
        src: z.string(),
        alt: z.string()
      }),
      author: z.string().default('Darius D Hansley'),

  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blogs': blogs,
};