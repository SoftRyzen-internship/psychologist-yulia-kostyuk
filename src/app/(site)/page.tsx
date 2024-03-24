'use client';

import { Hero } from '@/sections/Hero';
import { Button } from '@/components/ui/Button';
import { Socials } from '@/components/ui/Socials';
import { Logo } from '@/components/ui/Logo';
import { Values } from '@/sections/Values';
import { Services } from '@/sections/Services';

import common from '@/data/common.json';
import educationData from '@/data/education.json';
import { Education } from '@/sections/Education';

import { Conditions } from '@/components/common/Conditions';
import { ModalTestComponent } from '@/components/ui/Modal/ModalTestComponent';
// import { Modal } from '@/components/ui/Modal';

export default function Home() {
  const onLogoClick = () => {
    console.log('click logo');
  };

  return (
    <>
      <Hero />
      <Education educationData={educationData} />
      <Values />
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
