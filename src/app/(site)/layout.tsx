import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Tenor_Sans } from 'next/font/google';

import { classnames } from '@/utils/classnames';
import { Footer } from '@/layout/Footer';
import { Header } from '@/layout/Header';
// import meta from '@/data/meta.json';

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-montserrat',
});
const tenor = Tenor_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-tenor',
});

// export const metadata: Metadata = meta;

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;

export const metadata: Metadata = {
  title: 'Юлія Костюк – практикуючий психолог.',
  description:
    'Звертайтесь до нас для глибинного розуміння себе та вирішення особистих питань. Отримайте практичні поради та підтримку в своєму розвитку та самопізнанні.',
  icons: [
    {
      url: '/meta/favicon.ico',
    },
    {
      url: '/meta/favicon-16x16.png',
      rel: 'icon',
      type: 'image/png',
    },
    {
      url: '/meta/favicon-32x32.png',
      rel: 'icon',
      type: 'image/png',
    },
  ],
  manifest: '/meta/site.webmanifest',
  openGraph: {
    type: 'website',
    url: NEXT_PUBLIC_URL,
    title: 'Юлія Костюк',
    description:
      'Звертайтесь до нас для глибинного розуміння себе та вирішення особистих питань. Отримайте практичні поради та підтримку в своєму розвитку та самопізнанні.',
    siteName: 'Юлія Костюк',
    images: [
      {
        url: '/meta/ogpImage.png',
        width: 1200,
        height: 630,
        alt: 'Юлія Костюк - практикуючий психолог',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="!scroll-smooth">
      <body
        className={classnames(
          montserrat.variable,
          tenor.variable,
          'flex h-full min-h-screen flex-col bg-mainBcg',
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer name={''} href={''} ariaL={''} />
      </body>
    </html>
  );
}
