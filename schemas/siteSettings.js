// schemas/siteSettings.js
export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    {
      title: "startsida",
      name: "startpage",
    },
    {
      title: "om",
      name: "about",
    },
    {
      title: "öppettider",
      name: "openTimes",
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
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
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
  ],
};
