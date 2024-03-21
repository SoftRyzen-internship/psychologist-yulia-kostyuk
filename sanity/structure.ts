export const myStructure = (S: any) =>
  S.list()
    .title('Контент')
    .items([
      // S.listItem()
      //   .title('Переваги')
      //   .child(
      //     S.document().schemaType('achievements').documentId('achievements'),
      //   ),
      S.listItem()
        .title('Політика конфіденційності')
        .child(S.document().schemaType('policy').documentId('policy')),
      ...S.documentTypeListItems()
        // .filter((listItem: any) => !['achievements'].includes(listItem.getId()))
        .filter((listItem: any) => !['policy'].includes(listItem.getId())),
    ]);
