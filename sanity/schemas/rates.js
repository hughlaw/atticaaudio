export default {
  name: 'rates',
  title: 'Rates / Bookings',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'rates',
      type: 'array',
      of: [{ type: 'rate' }],
    },
    {
      name: 'ratesConditions',
      title: 'Rates & bookings conditions',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
