export default {
  name: "event",
  title: "Nyhet",
  type: "document",
  fields: [
    {
      name: "author",
      title: "Rubrik",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Glöm inte att trycka på 'Generate'",
      options: {
        source: "author",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "eventType",
      title: "Typ av nyhet",
      type: "string",
      options: {
        list: [
          { title: "Författarkväll", value: "authorEvening" },
          { title: "Bokcirkel", value: "bookcircle" },
        ],
      },
    },
    {
      name: "mainImage",
      title: "Bild",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Datum",
      type: "datetime",
    },
    {
      name: "body",
      title: "Om",
      type: "text",
    },
  ],

  preview: {
    select: {
      title: "author",
      media: "mainImage",
    },
  },
};
