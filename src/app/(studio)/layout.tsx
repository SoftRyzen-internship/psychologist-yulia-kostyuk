import React from 'react';
import data from '@/data/common.json';

export const metadata = {
  title: `${data.metadataAdmin.title}`,
  description: `${data.metadataAdmin.description}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
