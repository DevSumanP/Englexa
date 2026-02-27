import { defineType, defineField } from 'sanity'
export const project = defineType({
  name: 'project', title: 'Project', type: 'document',
  fields: [
    defineField({ name: 'title',       type: 'string', title: 'Title',    validation: r => r.required() }),
    defineField({ name: 'slug',        type: 'slug',   title: 'Slug',     options: { source: 'title' } }),
    defineField({ name: 'category',    type: 'string', title: 'Category',
      options: { list: ['Veterinary','Education','Research','Clinical','Wellness'] } }),
    defineField({ name: 'duration',    type: 'string', title: 'Duration' }),
    defineField({ name: 'description', type: 'text',   title: 'Description' }),
    defineField({ name: 'image',       type: 'image',  title: 'Main image', options: { hotspot: true } }),
    defineField({ name: 'completedAt', type: 'date',   title: 'Completion date' }),
    defineField({ name: 'testimonial', type: 'object', title: 'Client testimonial', fields: [
      defineField({ name: 'review', type: 'text',   title: 'Review' }),
      defineField({ name: 'author', type: 'string', title: 'Client name' }),
      defineField({ name: 'avatar', type: 'image',  title: 'Client photo', options: { hotspot: true } }),
    ]}),
  ],
})
