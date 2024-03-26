import React from 'react';
import Image from 'next/image';
import about from '@/data/about.json';
import { AboutList } from '@/components/AboutList';

export const About = () => {
  return (
    <section className="w-full py-20 md:py-[120px] xl:py-40">
      <div className="container">
        <div className="flex flex-col md:flex-row mdOnly:gap-8">
          <div className="mr-0 block h-[360px] self-stretch overflow-hidden md:h-full md:w-[240px] xl:mr-[136px] xl:w-[488px] smOnly:mb-10">
            <Image
              className="w-full object-cover object-center md:h-[552px] md:object-left xl:h-[648px]"
              src={about.image}
              width={360}
              height={648}
              alt={about.alt}
            />
          </div>
          <div className="flex max-w-full flex-col md:max-w-[432px] xl:max-w-[592px] xl:justify-between">
            <h2 className="section-subtitle mb-10 font-tenor text-accent md:mb-12 xl:mb-0">
              {about.titleText}
            </h2>
            <AboutList services={about.services} />
          </div>
        </div>
      </div>
    </section>
  );
};
