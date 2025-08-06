import { z } from 'zod'

export const formSchema = z.object({
  sender: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name must be max 50 characters long' }),

  email: z.string().email({ message: 'Invalid email format' }),

  content: z
    .string()
    .min(3, { message: 'Message must be at least 3 characters long' }),
})
