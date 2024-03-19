'use client';

import { Hero } from '@/sections/Hero';
import { Socials } from '@/components/ui/Socials';
import { Logo } from '@/components/ui/Logo';

export default function Home() {
  const onLogoClick = () => {
    console.log('click logo');
  };

  return (
    <>
      <Hero />
      <Logo path="footer" onClick={onLogoClick} />
      <Socials />
    </>
  );
}
