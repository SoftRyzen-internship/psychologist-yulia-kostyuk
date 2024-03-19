'use client';

import React from 'react';
import classNames from 'classnames';
import { NavbarLinkProps } from '@/components/ui/NavbarLink/types';

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  title,
  href,
  variant,
  onClick,
}) => {
  const navlinkClasses = classNames(
    'cursor-pointer text-accent hover:text-text focus:text-text transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
    {
      'hover:text-text focus:text-text':
        variant === 'mobile-menu',
    },
  );

  return (
    <li onClick={onClick} className={navlinkClasses}>
      <a href={href} onClick={e => (href)} aria-label={title}>
        {title}
      </a>
    </li>
  );
};