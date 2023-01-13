// schemas/siteSettings.js
export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    {
      title: "options",
      name: "options",
    },
    {
      title: "om",
      name: "about",
    },
    {
      title: "öppettider",
      name: "openings",
    },
    {
      title: "kontakt",
      name: "contact",
    },
  ],
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
      group: "options",
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
      group: "options",
    },

    //kontakt
    {
      name: "address",
      title: "Adress",
      type: "string",
      group: "contact",
    },
    {
      name: "email",
      title: "epost",
      type: "string",
      group: "contact",
    },
    {
      name: "phone",
      title: "telefonnummer",
      type: "string",
      group: "contact",
    },

    //om
    {
      name: "about",
      title: "om",
      type: "text",
      group: "about",
    },

    //öppettider
    {
      name: "opening_w",
      title: "Tisdag - Fredag",
      type: "string",
      group: "openings",
    },
    {
      name: "opening_s",
      title: "Lördag",
      type: "string",
      group: "openings",
    },
    {
      name: "opening_ms",
      title: "Söndag - Måndag",
      type: "string",
      group: "openings",
    },
  ],
};
