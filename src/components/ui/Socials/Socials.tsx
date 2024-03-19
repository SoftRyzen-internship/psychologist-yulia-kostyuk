import Telegram from '@/../public/icons/telegram.svg';
import Instagram from '@/../public/icons/instagram.svg';
import Facebook from '@/../public/icons/facebook.svg';

import { SocialsProps } from './types';

import data from '@/data/common.json';

export const Socials: React.FC<SocialsProps> = ({ stylesSocials }) => {
  const { socials } = data;
  return (
    <ul className={`flex gap-4 text-accent ${stylesSocials}`}>
      <li>
        <a
          href={socials.telegram.path}
          aria-label={socials.telegram.ariaLabelLink}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="hover:text-hover hover:transition-all focus-visible:text-pressed"
        >
          <Telegram
            className="h-8 w-8"
            aria-label={socials.telegram.ariaLabelIcon}
          />
        </a>
      </li>
      <li>
        <a
          href={socials.instagram.path}
          aria-label={socials.instagram.ariaLabelLink}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="hover:text-hover hover:transition-all focus-visible:text-pressed"
        >
          <Instagram
            className="h-8 w-8"
            aria-label={socials.instagram.ariaLabelIcon}
          />
        </a>
      </li>
      <li>
        <a
          href={socials.facebook.path}
          aria-label={socials.facebook.ariaLabelLink}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="hover:text-hover hover:transition-all focus-visible:text-pressed"
        >
          <Facebook
            className="h-8 w-8"
            aria-label={socials.facebook.ariaLabelIcon}
          />
        </a>
      </li>
    </ul>
  );
};
