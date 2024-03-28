import React from 'react';
import SoftRyzenIcon from '@/../public/icons/softryzen.svg';
import GoItIcon from '@/../public/icons/goit.svg';
import { FooterItemProps } from './types';

import common from '@/data/common.json';

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
        target={common.target}
        rel={common.rel}
        className="text-borderCheckbox transition hover:text-hover focus-visible:text-pressed"
      >
        {name === 'softryzen' && (
          <SoftRyzenIcon className="hover: h-5 w-[123px]" />
        )}
        {name === 'goit' && <GoItIcon className="h-6 w-[82px]" />}
      </a>
    </li>
  );
};
