import { defineType, defineField } from 'sanity'
export const service = defineType({
  name: 'service', title: 'Service', type: 'document',
  fields: [
    defineField({ name: 'title',       type: 'string', title: 'Title',       validation: r => r.required() }),
    defineField({ name: 'slug',        type: 'slug',   title: 'Slug',        options: { source: 'title' } }),
    defineField({ name: 'description', type: 'text',   title: 'Description', validation: r => r.required() }),
    defineField({ name: 'icon',        type: 'string', title: 'Icon (lucide-react)' }),
    defineField({ name: 'image',       type: 'image',  title: 'Image',       options: { hotspot: true } }),
    defineField({ name: 'order',       type: 'number', title: 'Display order' }),
  ],
})
