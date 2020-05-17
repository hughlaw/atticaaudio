export default {
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'section_text',
      title: 'Section text',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
