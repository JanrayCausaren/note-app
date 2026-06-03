import {z} from 'zod'

export const createNoteSchema = z.object({
    title: z.string().min(3),
    content: z.string().min(3), 
})

export const updateNoteSchema = z.object({
    title: z.string().min(3),
    content: z.string().min(3), 
}).partial()

export type CreateNoteReq = z.infer<typeof createNoteSchema>
export type UpdateNoteReq = z.infer<typeof updateNoteSchema>