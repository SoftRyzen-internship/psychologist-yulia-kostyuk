import React from 'react';
import classNames from 'classnames';
import { navLinks } from '@/data/header';
import { NavbarLink } from '../NavbarLink';
import { NavbarProps } from '@/components/ui/Navbar/types';

export const Navbar: React.FC<NavbarProps> = ({
  variant,
  onClick,
  className,
}) => {
  const NavbarClasses = classNames(
    'flex',
    {
      'text-text font-montserrat text-center text-sm tracking-[0.2px] flex-col gap-6 xl:hidden':
        variant === 'mobile-menu',
      'text-text font-montserrat text-base tracking-[0.2px] mt-2 gap-10 flex-row mdOnly:hidden':
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
