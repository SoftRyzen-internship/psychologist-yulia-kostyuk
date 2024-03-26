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
    <footer className="w-full border-t border-solid border-accent">
      <div className="container">
        <div className="flex flex-col px-16 pb-6 pt-7 tracking-wide">
          <div className="flex w-full max-w-[1440px] items-end gap-5 py-0.5">
            <Logo path="footer" onClick={onLogoClick} className="flex-auto" />
            <div className="flex justify-between gap-5">
              <ModalTestCONDITIONSComponents />
              <div className="text-[#91897F] notXL:hidden">|</div>
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
    </footer>
  );
};
