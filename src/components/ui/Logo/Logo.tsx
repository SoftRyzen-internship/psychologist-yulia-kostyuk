import React from 'react';
import Link from 'next/link';
import { classnames } from '@/utils/classnames';

import { LogoProps } from './types';

import data from '@/data/common.json';

export const Logo: React.FC<LogoProps> = ({ path, onClick, className }) => {
  const { logo } = data.layout;
  const logoSizes =
    path === 'header'
      ? 'text-2xl leading-7 tracking-[0.5px] xl:text-[32px] xl:leading-8'
      : 'text-2xl leading-7 tracking-[0.2px]';
  const logoClasses = classnames(
    'font-italic inline-block font-tenor font-normal text-accent hover:text-hover transition focus-visible:text-pressed hover:scale-110',
    logoSizes,
    className,
  );

  return (
    <Link
      href="/"
      aria-label={logo.ariaLabel}
      onClick={onClick}
      className={logoClasses}
    >
      {logo.label}
    </Link>
  );
};
