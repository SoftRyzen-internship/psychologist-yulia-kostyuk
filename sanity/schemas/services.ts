import { defineType, defineField } from 'sanity';

const services = defineType({
  name: 'services',
  title: 'Мої послуги',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Назва послуги',
      type: 'string',
      validation: (Rule: any) =>
        Rule.required()
          .error('This field is required')
          .max(20)
          .error('This field should be less than 20 characters'),
    }),
    defineField({
      name: 'location',
      title: 'Локація',
      type: 'string',
      validation: (Rule: any) =>
        Rule.required()
          .error('This field is required')
          .max(30)
          .error('This field should be less than 30 characters'),
    }),
    defineField({
      name: 'card',
      title: 'Картa послуг',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'subtitle',
              type: 'string',
              title: 'Підзаголовок',
              validation: (Rule: any) =>
                Rule.required().error('This field is required'),
            },
            {
              name: 'description',
              title: 'Опис послуги',
              type: 'text',
            },
          ],
        },
      ],
      validation: (Rule: any) =>
        Rule.min(3)
          .error('You need at least 3 items')
          .max(3)
          .error('You can only add up to 3 items'),
    }),
  ],
});

export default services;
