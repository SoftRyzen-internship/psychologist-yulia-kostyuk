import React, { useState } from 'react';
import { classnames } from '@/utils/classnames';
import navLinks from '@/data/header.json';
import { NavbarLink } from '../NavbarLink';
import { NavbarProps } from '@/components/ui/Navbar/types';

export const Navbar: React.FC<NavbarProps> = ({
  variant,
  onClick,
  className,
}) => {
  const NavbarClasses = classnames(
    'flex',
    {
      'text-text font-montserrat text-sm flex-col gap-6':
        variant === 'mobile-menu',
      'text-text font-montserrat text-base gap-10': variant === 'header',
    },
    className,
  );

  return (
    <ul className={NavbarClasses}>
      {navLinks.map((link, id) => (
        <NavbarLink
          key={id}
          title={link.title}
          href={link.href}
          variant={variant}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};
