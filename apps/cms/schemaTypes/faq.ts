import { defineType, defineField } from 'sanity'
export const faq = defineType({
  name: 'faq', title: 'FAQ', type: 'document',
  fields: [
    defineField({ name: 'question', type: 'string', title: 'Question', validation: r => r.required() }),
    defineField({ name: 'answer',   type: 'text',   title: 'Answer',   validation: r => r.required() }),
    defineField({ name: 'order',    type: 'number', title: 'Display order' }),
  ],
})
