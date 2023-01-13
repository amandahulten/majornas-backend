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
        .title("Erbjudande")
        .child(S.document().schemaType("offer").documentId("offer")),
      ...S.documentTypeListItems()
        .filter((listItem) => !["siteSettings"].includes(listItem.getId()))
        .filter((listItem) => !["offer"].includes(listItem.getId())),
    ]);
