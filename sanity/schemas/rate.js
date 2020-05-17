export default {
  name: 'rate',
  title: 'Rate',
  type: 'object',
  description: 'Used to hold a rate line item',
  fields: [
    {
      name: 'title',
      title: 'Rate title',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      description: 'The price of this item (you should include the € symbol)',
      type: 'string',
    },
    {
      name: 'subtext',
      title: 'Subtext',
      description: 'Use this to provide a bit more information',
      type: 'string',
    },
  ],
};
