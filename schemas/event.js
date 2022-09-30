export default {
  name: "event",
  title: "Författar Besök",
  type: "document",
  fields: [
    {
      name: "author",
      title: "Författare",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "author",
        maxLength: 96,
      },
    },
    {
      name: "eventType",
      title: "Typ av event",
      type: "string",
      options: {
        list: [
          { title: "Författarkväll", value: "authorEvening" },
          { title: "Bokcirkel", value: "bookcircle" },
        ],
      },
      initalValue: "authorEvening",
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
