import { TiHome } from 'react-icons/ti';

export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: TiHome,
  fields: [
    {
      name: 'pageName',
      type: 'string',
      hidden: true,
    },
    {
      name: 'dividerImage1',
      title: 'First divider image',
      type: 'attica_image',
    },
    {
      name: 'section1',
      title: 'Section 1',
      type: 'section',
    },
    {
      name: 'dividerImage2',
      title: 'Second divider image',
      type: 'attica_image',
    },
    {
      name: 'tour',
      type: 'gallery',
    },
    {
      name: 'dividerImage3',
      title: 'Third divider image',
      type: 'attica_image',
    },
    {
      name: 'equipmentSection',
      title: 'Equipment section',
      type: 'equipmentSection',
    },
    {
      name: 'dividerImage4',
      title: 'Fourth divider image',
      type: 'attica_image',
    },
    {
      name: 'rates',
      title: 'Rates / Bookings',
      type: 'rates',
    },
    {
      name: 'dividerImage5',
      title: 'Fifth divider image',
      type: 'attica_image',
    },
  ],
};
