const services = {
  name: 'services',
  title: 'Мої послуги',
  type: 'document',
  // validation: (Rule: any) => [
  //   Rule.required().error('This collection is required'),
  //   Rule.custom((review: any) =>
  //     review.length < 3 ? 'You need at least 3 reviews' : true,
  //   ),
  // ],
  fields: [
    {
      name: 'title',
      title: 'Назва послуги',
      type: 'string',
      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
        Rule.max(20).error('This field should be less than 30 characters'),
      ],
    },
    {
      name: 'location',
      title: 'Локація',
      type: 'string',
      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
      ],
    },
    {
      name: 'card',
      title: 'Опис картки',
      type: 'object',
      fields: [
        {
          name: 'subtitle',
          title: 'Підзаголовок',
          type: 'string',
          validation: (Rule: any) => [
            Rule.required().error('This field is required'),
          ],
        },
        {
          name: 'description',
          title: 'Опис послуги',
          type: 'array',
          of: [
            {
              type: 'text',
              name: 'subtitle',
              title: 'Підзаголовок',
              validation: (Rule: any) => [
                Rule.required().error('This field is required'),
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default services;
