'use client';

import Image from 'next/image';
import ArrowDown from '@/../public/icons/arrow-down.svg';
import { Button } from '@/components/ui/Button';
import hero from '@/data/hero.json';
import common from '@/data/common.json';

export const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="container">
        <div className="border-b-2 border-solid border-accent">
          <div className="flex gap-5 notXL:flex-col notXL:gap-0">
            <div className="flex w-[55%] flex-col notXL:ml-0 notXL:w-full">
              <div className="z-10 flex flex-col notXL:max-w-full">
                <p className="tracking-5 mb-4 text-base font-medium uppercase leading-6 text-text sm:mt-[78px] md:mt-[122px] xl:mt-[230px] ">
                  {hero.pretitle}
                </p>
                <h1 className="font-tenor font-normal text-accent sm:pb-12 sm:text-large/[48px] md:pb-14 md:text-7xl/[84px] xl:pb-16">
                  {hero.title}
                </h1>
                <div>
                  <Button
                    tag="a"
                    accent={true}
                    className="w-full font-semibold sm:mb-20 md:mb-[122px] md:w-auto"
                  >
                    {common.buttonsText.v1}
                  </Button>
                </div>
              </div>
            </div>
            <div className="ml-auto flex w-[45%] notXL:ml-0 notXL:w-full">
              <Image
                className="w-full md:self-stretch notXL:max-w-full"
                loading="lazy"
                src="/images/desktop/hero-1-desk@2x.webp"
                width={600}
                height={900}
                alt="main photo"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-center self-center sm:mt-6 md:mt-10 xl:mt-14">
            <ArrowDown className="sm:h-9 sm:w-9 md:h-11 md:w-11 xl:h-16 xl:w-16" />
          </div>
          <Image
            className="mt-14 h-auto w-full sm:mt-5 md:mt-9 xl:mt-14 xl:max-w-full"
            loading="lazy"
            src="/images/desktop/hero-2-desk@2x.webp"
            width={440}
            height={1440}
            alt="background image"
          />
        </div>
      </div>
    </section>
  );
};
