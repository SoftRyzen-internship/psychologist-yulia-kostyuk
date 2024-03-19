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
      'text-accent font-montserrat text-center text-sm flex-col gap-6 xl:hidden':
        variant === 'mobile-menu',
      'text-accent font-montserrat text-base gap-10 flex-row smOnly:hidden':
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
