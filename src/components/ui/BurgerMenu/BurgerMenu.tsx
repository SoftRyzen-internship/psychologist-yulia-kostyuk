import Image from 'next/image';
import { Logo } from '../Logo';
import { IBurgerMenuProps } from './types';

export const BurgerMenu = ({ isOpen, onClose }: IBurgerMenuProps) => {
  return (
    <>
      <div className="bg-backdrop and fixed bottom-0 right-0 z-10 h-full w-full backdrop-blur-xl">
        <div className="mx-auto h-[600px] w-[360px] bg-mainBcg px-5 py-[22px]">
          <div className="flex">
            <Logo path="header" onClick={onClose} />
            <button aria-label="menu button close" onClick={onClose}>
              <Image
                src="/icons/close-icon.svg"
                alt="menu open button"
                priority={true}
                width={20}
                height={20}
              />
            </button>
          </div>
          <nav>
            <ul>
              <li>Про мене</li>
              <li>Пщслуги</li>
              <li>Контакти</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
