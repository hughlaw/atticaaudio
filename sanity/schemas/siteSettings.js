import { TiSpanner } from 'react-icons/ti';
export default {
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  icon: TiSpanner,
  fields: [
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email address',
      type: 'string',
    },
  ],
};
