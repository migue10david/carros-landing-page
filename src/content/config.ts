import { defineCollection, z } from 'astro:content';

const travels = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        images: z.array(z.string()),
        order: z.number().optional(),
    }),
})

const rusian = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        images: z.array(z.string()),
        order: z.number().optional(),
    }),
})

export const collections = { travels, rusian };
