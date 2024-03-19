import Telegram from '@/../public/icons/telegram.svg';
import Instagram from '@/../public/icons/instagram.svg';
import Facebook from '@/../public/icons/facebook.svg';

export const Socials = () => {
  return (
    <ul className="flex gap-4 text-accent">
      <li>
        <a
          href="https://t.me/kostiuk_ulia"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="hover:text-hover focus-visible:text-pressed"
        >
          <Telegram className="h-8 w-8" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/kostiuk_ulia_psy/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="hover:text-hover focus-visible:text-pressed"
        >
          <Instagram className="h-8 w-8" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/profile.php?id=61553456342276"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="hover:text-hover focus-visible:text-pressed"
        >
          <Facebook className="h-8 w-8" />
        </a>
      </li>
    </ul>
  );
};
