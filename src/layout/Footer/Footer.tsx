'use client';

import React from 'react';

import { Logo } from '@/components/ui/Logo';
import { ModalPolicy } from '@/components/ui/ModalPolicy';
import data from '@/data/common.json';
import { FooterItemProps } from './types';
import { FooterItem } from './FooterItem';

const { footer } = data;

export const Footer: React.FC<FooterItemProps> = () => {
  return (
    <footer className="relative w-full border-t-[1px] border-solid border-accent/80 pb-[19px] pt-6 md:border-none md:pb-6 xl:border-t-[1px] xl:border-solid xl:border-accent/80 xl:pt-8">
      <div className="container ">
        <div className="flex flex-col xl:flex-row ">
          <Logo
            path="footer"
            className="xl:flex-auto smOnly:mb-6 smOnly:text-center mdOnly:pb-12"
          />
          <div className="flex flex-col items-center md:flex-row-reverse md:justify-between xl:flex-row mdOnly:before:absolute mdOnly:before:left-0 mdOnly:before:top-[74px] mdOnly:before:h-[1px] mdOnly:before:w-full mdOnly:before:bg-accent/80 mdOnly:before:content-['']">
            <ModalPolicy />
            <div className="flex items-center gap-3 border-[#91897F]/40 xl:ml-6 xl:border-l-[1px] xl:border-solid xl:pl-6 xl:pt-0">
              <p className="text font-montserrat">Website by</p>
              <ul className="flex items-center gap-3 xl:gap-6">
                {footer.map(item => (
                  <FooterItem
                    key={item.name}
                    name={item.name}
                    href={item.path}
                    ariaL={item.ariaLabel}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
