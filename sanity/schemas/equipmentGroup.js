export default {
  name: 'equipment_group',
  title: 'Equipment Group',
  type: 'object',
  description: 'Used to hold a category of equipment items',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'open_by_default',
      title: 'Expanded',
      description: 'Is this group expanded by default?',
      type: 'boolean',
    },
    {
      name: 'equipmentItems',
      title: 'Items',
      type: 'array',
      of: [{ type: 'equipment_item' }],
    },
  ],
};
