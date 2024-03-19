import Image from 'next/image';
import Link from 'next/link';

import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = ({ path, onClick }) => {
  const imgSizes =
    path === 'header'
      ? 'w-[167px] h-[28px] xl:w-[215px] xl:h-[32px]'
      : 'w-[164px] h-[28px]';

  return (
    <Link href="/" aria-label="logo" onClick={onClick} className="inline-block">
      <Image
        src={'/images/logo.webp'}
        alt="logo"
        width={164}
        height={28}
        priority
        className={imgSizes}
      />
    </Link>
  );
};
