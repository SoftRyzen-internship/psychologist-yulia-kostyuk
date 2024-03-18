const services = {
  name: 'services',
  title: 'Мої послуги',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Назва послуги',
      type: 'string',
      validation: (Rule: any) =>
        Rule.required()
          .error('This field is required')
          .max(20)
          .error('This field should be less than 20 characters'),
    },
    {
      name: 'location',
      title: 'Локація',
      type: 'string',
      validation: (Rule: any) =>
        Rule.required().error('This field is required'),
    },
    {
      name: 'card',
      title: 'Картa послуг',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'street',
              type: 'string',
              title: 'Підзаголовок',
              validation: (Rule: any) =>
                Rule.required().error('This field is required'),
            },
            { name: 'description', type: 'text', title: 'Опис послуги' },
          ],
        },
      ],
      validation: (Rule: any) =>
        Rule.max(3).error('You can only add up to 3 cards.'),
    },
  ],
};

// commit
export default services;
