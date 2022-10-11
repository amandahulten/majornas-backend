// deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.listItem()
        .title("Boktips")
        .child(S.document().schemaType("boktips").documentId("boktips")),
      ...S.documentTypeListItems()
        .filter((listItem) => !["siteSettings"].includes(listItem.getId()))
        .filter((listItem) => !["boktips"].includes(listItem.getId())),
    ]);
