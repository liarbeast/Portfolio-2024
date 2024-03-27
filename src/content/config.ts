// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      description: z.string(),
      summary: z.string(),
      cover: image(),
      alt: z.string(),
      tags: z.array(z.string()),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection,
};