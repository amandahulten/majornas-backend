export default {
  name: "boktips",
  title: "Boktips",
  type: "document",
  fields: [
    {
      name: "author",
      title: "Titel",
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
