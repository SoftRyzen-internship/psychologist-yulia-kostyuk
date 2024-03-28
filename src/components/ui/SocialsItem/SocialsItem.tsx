import React from 'react';

import Telegram from '@/../public/icons/telegram.svg';
import Instagram from '@/../public/icons/instagram.svg';
import Facebook from '@/../public/icons/facebook.svg';

import { SocialsItemProps } from './types';

import common from '@/data/common.json';

export const SocialsItem: React.FC<SocialsItemProps> = ({
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
        className="transition hover:text-hover focus-visible:text-pressed"
      >
        {name === 'telegram' && <Telegram className="h-8 w-8" />}
        {name === 'instagram' && <Instagram className="h-8 w-8" />}
        {name === 'facebook' && <Facebook className="h-8 w-8" />}
      </a>
    </li>
  );
};
