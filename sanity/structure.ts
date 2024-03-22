export const myStructure = (S: any) =>
  S.list()
    .title('Контент')
    .items([
      S.listItem()
        .title('Політика конфіденційності')
        .child(S.document().schemaType('conditions').documentId('conditions')),
      ...S.documentTypeListItems().filter(
        (listItem: any) => !['conditions'].includes(listItem.getId()),
      ),
    ]);
