'use client';

import Image from 'next/image';
import ArrowDown from '@/../public/icons/arrow-down.svg';
import { Button } from '@/components/ui/Button';
import hero from '@/data/hero.json';
import common from '@/data/common.json';

export const Hero = () => {
  return (
    <>
      <section className="w-full pb-[78px] pt-[78px] md:pb-[122px] md:pt-[122px] xl:pb-[262px] xl:pt-[155px]">
        <div className="container">
          <div className="">
            <p className="text mb-4 font-medium uppercase not-italic text-text">
              {hero.pretitle}
            </p>
            <h1 className="mb-12 font-tenor text-large/[48px] font-normal tracking-[0.5] text-accent md:mb-14 md:text-7xl/[84px] xl:w-[600px] xl:pb-16">
              {hero.title}
            </h1>
            <Button
              tag="a"
              accent={true}
              className="w-full font-semibold md:w-[198px]"
            >
              {common.buttonsText.v1}
            </Button>
          </div>

          <Image
            src={'/images/desktop/hero-1-desk@2x.webp'}
            alt={hero.altPhoto}
            width={600}
            height={900}
            priority
            className="right-0 top-0 xl:absolute notXL:hidden"
          />
        </div>
      </section>

      <div className="relative xl:mt-[60px]">
        <div className="absolute left-0 top-[-11.5%] h-[2px] w-[100%] bg-accent notXL:hidden"></div>
        <div className="h-[268px] w-full bg-[url('/images/mobile/hero-1-mob@2x.webp')] bg-cover bg-center bg-no-repeat sm:h-[480px] sm:bg-[url('/images/tablet/hero-1-tab@2x.webp')] xl:hidden"></div>
        <ArrowDown
          aria-label={hero.ariaLabelIcon}
          className="ml-auto mr-auto h-[36px] w-[36px] md:h-[44px] md:w-[44px] xl:mb-12 xl:h-[52px] xl:w-[52px] mdOnly:mb-9 mdOnly:mt-10 notXL:mb-5 notXL:mt-6"
        />
        <div className="center h-[248px] w-full bg-[url('/images/mobile/hero-2-mob@2x.webp')] bg-cover bg-no-repeat sm:h-[440px] sm:bg-[url('/images/tablet/hero-2-tab@2x.webp')] xl:bg-[url('/images/desktop/hero-2-desk@2x.webp')]"></div>
      </div>
    </>
  );
};
