import { z } from 'zod'

export const contactSchema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  email:   z.string().email('Please enter a valid email'),
  phone:   z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const quoteSchema = z.object({
  name:        z.string().min(2, 'Name required'),
  email:       z.string().email('Valid email required'),
  phone:       z.string().min(10, 'Valid phone number required'),
  service:     z.string().min(1, 'Please select a service'),
  description: z.string().min(20, 'Please describe your project in more detail'),
  budget:      z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>
export type QuoteFormData   = z.infer<typeof quoteSchema>
