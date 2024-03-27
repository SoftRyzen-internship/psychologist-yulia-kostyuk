'use client';

import React from 'react';
import { classnames } from '@/utils/classnames';

import { Logo } from '@/components/ui/Logo';
import { ModalTestCONDITIONSComponents } from '@/components/ui/Modal';
import data from '@/data/common.json';
import { FooterItemProps } from './types';
import { FooterItem } from './FooterItem';

const { footer } = data;
const footerClasses = classnames('flex gap-3');

const onLogoClick = () => {
  console.log('click logo');
};

export const Footer: React.FC<FooterItemProps> = () => {
  return (
    <footer className="w-full xl:border-t xl:border-solid xl:border-accent smOnly:border-t smOnly:border-solid smOnly:border-accent">
      <div className="container smOnly:text-center">
        <div className="flex flex-col pb-6 pt-6 tracking-wide md:items-center md:justify-between">
          <div className="flex items-end gap-5 py-0.5 md:w-full md:justify-between smOnly:flex-wrap smOnly:gap-8 smOnly:self-center ">
            <Logo
              path="footer"
              onClick={onLogoClick}
              className="xl:flex-auto"
            />

            <ModalTestCONDITIONSComponents />

            <div className="mt-3 flex gap-3 md:flex-wrap md:self-start md:pt-12">
              <span className="text-[#91897F] notXL:hidden">|</span>
              <p className="text font-montserrat">Website by</p>
              <ul className={footerClasses}>
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

      {/* <div className="container">  *Tablet*
        <div className="flex flex-col justify-between items-center tracking-wide">
          <div className="flex w-full justify-between ">
            <Logo path="footer" onClick={onLogoClick} />
            <ModalTestCONDITIONSComponents />
          </div>
          <div className="flex flex-wrap gap-3 pt-12 self-start ">
            <p className="font-montserrat text text-center ">
              Website by 
            </p>
            <ul className={footerClasses}>
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
        </div> */}

      {/* <div className="container">    *Mobile*
        <div className="flex flex-col pt-7 pb-6 tracking-wide">
          <div className="flex flex-col md:flex-row items-center gap-8 py-0.5 w-full max-w-[1440px]">
            <div className="flex justify-center">
              <Logo path="footer" onClick={onLogoClick} />
            </div>
            <div className="md:flex-1 flex flex-col md:flex-row justify-between items-center gap-3 md:mt-0">
              <ModalTestCONDITIONSComponents />
              <p className="font-montserrat text">Website by</p>
              <ul className={footerClasses}>
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
      </div> */}
    </footer>
  );
};
