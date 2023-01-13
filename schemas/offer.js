export default {
  name: "offer",
  title: "Erbjudande",
  type: "document",
  fields: [
    {
      name: "ends",
      title: "Slutar",
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
      title: "body",
    },
  },
};
