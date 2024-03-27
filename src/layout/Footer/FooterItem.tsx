import React from 'react';
import SoftRyzenIcon from '@/../public/icons/softryzen.svg';
import GoItIcon from '@/../public/icons/goit.svg';
import { FooterItemProps } from './types';

export const FooterItem: React.FC<FooterItemProps> = ({
  name,
  href,
  ariaL,
}) => {
  return (
    <li key={name}>
      <a
        href={href}
        aria-label={ariaL}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        {name === 'softryzen' && <SoftRyzenIcon className="h-5 w-[123px]" />}
        {name === 'goit' && <GoItIcon className="h-6 w-[82px]" />}
      </a>
    </li>
  );
};
