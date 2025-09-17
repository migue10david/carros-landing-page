import { defineCollection, z } from 'astro:content';

const travels = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        images: z.array(z.string()),
    }),
})

const rusian = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        images: z.array(z.string()),
    }),
})

export const collections = { travels, rusian };
