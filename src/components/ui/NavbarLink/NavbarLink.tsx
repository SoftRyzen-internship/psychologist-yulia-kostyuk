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
    'cursor-pointer text-text hover:text-accent focus:text-accent transition-all duration-300 ease-out',
    {
      'hover:text-accent focus:text-accent': variant === 'mobile-menu',
    },
  );

  return (
    <li onClick={onClick} className={navlinkClasses}>
      <a href={href} onClick={e => href}>
        {title}
      </a>
    </li>
  );
};
