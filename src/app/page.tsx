'use client';

import { Hero } from '@/sections/Hero';
import { Button } from '@/components/ui/Button';
import { Socials } from '@/components/ui/Socials';
import { Logo } from '@/components/ui/Logo';
import { MyValues } from '@/components/common/MyValues';

import common from '@/data/common.json';

import Services from '@/components/common/Services/Services';
import { Conditions } from '@/components/common/Conditions';
import { ModalTestComponent } from '@/components/ui/Modal/ModalTestComponent';

export default function Home() {
  const onLogoClick = () => {
    console.log('click logo');
  };

  return (
    <>
      <Hero />
      <MyValues />
      <Services />
      <Conditions />
      <Button tag="a" accent={true} className="font-semibold">
        {common.buttonsText.v1}
      </Button>
      <Button tag="a" accent={false} className="font-normal">
        {common.buttonsText.v2}
      </Button>
      <Button tag="a" accent={false} className="font-normal">
        {common.buttonsText.v1}
      </Button>
      <Logo path="footer" onClick={onLogoClick} className="ml-7" />
      <Socials className="mt-5" />
      <ModalTestComponent />
    </>
  );
}
