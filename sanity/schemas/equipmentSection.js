export default {
  name: 'equipmentSection',
  title: 'Equipment section',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section title',
      type: 'string',
    },
    {
      name: 'consoleDescription',
      title: 'Console description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'consoleImage',
      title: 'Console image',
      type: 'attica_image',
    },
    {
      name: 'equipmentGroups',
      title: 'Equipment groups',
      type: 'array',
      of: [
        {
          type: 'equipment_group',
        },
      ],
    },
  ],
};
