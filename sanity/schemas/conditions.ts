import { defineType, defineField } from 'sanity';

const conditions = defineType({
  name: 'conditions',
  title: 'Політика конфіденційності та захисту персональних даних',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'назва',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'description',
      title: 'опис',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});

export default conditions;
