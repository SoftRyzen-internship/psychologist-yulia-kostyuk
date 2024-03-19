import Link from 'next/link';

import { LogoProps } from './types';

import data from '@/data/common.json';

export const Logo: React.FC<LogoProps> = ({ path, onClick, stylesLogo }) => {
  const { logo } = data.layout;
  const imgSizes =
    path === 'header'
      ? 'text-2xl leading-7 tracking-[0.5px] xl:text-[32px] xl:leading-8'
      : 'text-2xl leading-7 tracking-[0.2px]';

  return (
    <Link
      href="/"
      aria-label={logo.ariaLabel}
      onClick={onClick}
      className={`font-italic inline-block font-tenor font-normal text-accent hover:text-hover hover:transition-all focus-visible:text-pressed ${stylesLogo}  ${imgSizes}`}
    >
      {logo.label}
    </Link>
  );
};
