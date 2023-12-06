export default {
  name: 'testomonial',
  title: 'testomonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'company',
      type: 'string',
      title: 'Company',
    },
    {
      name: 'imgurl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'feedback',
      type: 'string',
      title: 'Feedback',
    },
  ],
}
