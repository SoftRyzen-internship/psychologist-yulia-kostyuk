'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ArrowDown from '@/../public/icons/arrow-down.svg';
import { Button } from '@/components/ui/Button';

import hero from '@/data/hero.json';
import common from '@/data/common.json';

import styles from './Hero.module.css';

export const Hero = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 1280;
      setIsTablet(isMobileView);
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      className={`relative w-full pb-[78px] pt-[78px] md:pb-[122px] md:pt-[122px] xl:relative xl:pb-[262px] xl:pt-[234px] ${styles.section_hero}`}
    >
      <div className="container xl:pt-[110px]">
        <p className="text mb-4 font-montserrat font-medium uppercase not-italic text-text">
          {hero.pretitle}
        </p>
        <h1 className="mb-12 font-tenor text-large/[48px] font-normal tracking-[0.5] text-accent md:mb-14 md:text-7xl/[84px] xl:mb-16 xl:w-[600px]">
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
      {isTablet ? (
        <Image
          className="mb-6 mt-[78px] h-[268px] w-full object-cover object-top sm:h-[480px] md:mb-10 md:mt-[122px]"
          src="/images/tablet/hero-1-tab@2x.webp"
          width={480}
          height={268}
          alt="alt"
        />
      ) : (
        <Image
          className="absolute right-0 top-[-11%] mt-[78px] h-[900px] w-[45%] object-cover"
          src="/images/desktop/hero-1-desk@2x.webp"
          width={600}
          height={900}
          alt="alt"
        />
      )}
      <ArrowDown
        aria-label={hero.ariaLabelIcon}
        className="ml-auto mr-auto h-[36px] w-[36px] md:h-[44px] md:w-[44px] xl:mt-[365px] xl:h-[52px] xl:w-[52px]"
      />
    </section>
  );
};
