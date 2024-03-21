import Telegram from '@/../public/icons/telegram.svg';
import Instagram from '@/../public/icons/instagram.svg';
import Facebook from '@/../public/icons/facebook.svg';

import { SocialsItemProps } from './types';

export const SocialsItem: React.FC<SocialsItemProps> = ({
  id,
  href,
  ariaL,
}) => {
  return (
    <li key={id}>
      <a
        href={href}
        aria-label={ariaL}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="transition hover:text-hover focus-visible:text-pressed"
      >
        {id === 1 && <Telegram className="h-8 w-8" />}
        {id === 2 && <Instagram className="h-8 w-8" />}
        {id === 3 && <Facebook className="h-8 w-8" />}
      </a>
    </li>
  );
};
