import { defineType, defineField } from 'sanity'
export const testimonial = defineType({
  name: 'testimonial', title: 'Testimonial', type: 'document',
  fields: [
    defineField({ name: 'name',    type: 'string',  title: 'Client name',  validation: r => r.required() }),
    defineField({ name: 'review',  type: 'text',    title: 'Review text',  validation: r => r.required() }),
    defineField({ name: 'avatar',  type: 'image',   title: 'Photo',        options: { hotspot: true } }),
    defineField({ name: 'service', type: 'string',  title: 'Service used' }),
    defineField({ name: 'rating',  type: 'number',  title: 'Rating (1-5)', validation: r => r.min(1).max(5) }),
    defineField({ name: 'approved',type: 'boolean', title: 'Show on site?', initialValue: false }),
  ],
})
