'use client';
import { Navbar } from '@/components/ui/Navbar';
import { Hero } from '@/sections/Hero';
import { Button } from '@/components/ui/Button';
import { Socials } from '@/components/ui/Socials';
import { Logo } from '@/components/ui/Logo';

import common from '@/data/common.json';
import BurgerMenuEmulator from '@/components/ui/BurgerMenu/BurgerMenuEmulator';
import Services from '@/components/common/Services/Services';
import { Conditions } from '@/components/common/Conditions';

export default function Home() {
  const onLogoClick = () => {
    console.log('click logo');
  };

  return (
    <>
      <div className="container relative flex items-center">
        <Logo
          path="header"
          onClick={onLogoClick}
          stylesLogo="mr-[90px] xl:ml-[102px]"
        />
        <Navbar variant="header" />
      </div>
      <Hero />
      {/* <Services /> */}
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
      <BurgerMenuEmulator />
      <Logo path="footer" onClick={onLogoClick} stylesLogo="ml-7" />
      <Socials stylesSocials="mt-5" />
    </>
  );
}
