'use client';

import React from 'react';
import { classnames } from '@/utils/classnames';
import { NavbarLinkProps } from '@/components/ui/NavbarLink/types';

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  title,
  href,
  variant,
  onClick,
}) => {
  const navlinkClasses = classnames(
    'cursor-pointer text-text hover:text-accent focus:text-accent transition',
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
