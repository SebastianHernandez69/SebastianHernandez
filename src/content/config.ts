import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        nombre: z.string(),
        img: z.string().optional(),
        descripcion: z.string(),
        tools: z.array(z.string())
    })
})

export const collections = { projects };