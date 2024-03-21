import React, { useState } from 'react';
import { classnames } from '@/utils/classnames';
import { navLinks } from '@/data/header';
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
      'text-text font-montserrat text-sm tracking-[0.2px] flex-col gap-6':
        variant === 'mobile-menu',
      'text-text font-montserrat text-base tracking-[0.2px] ml-[90px] mt-2 gap-10 smOnly:hidden mdOnly:hidden':
        variant === 'header',
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
