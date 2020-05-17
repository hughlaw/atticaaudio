export default {
  name: 'gallery',
  title: 'Gallery',
  description: 'Specifies the images used in the studio gallery',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'introText',
      title: 'Intro text',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'galleryImages',
      title: 'Gallery images',
      type: 'array',
      of: [{ type: 'attica_image' }],
    },
  ],
};
