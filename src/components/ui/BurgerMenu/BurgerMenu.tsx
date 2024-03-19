import Image from 'next/image';
import { Logo } from '../Logo';
import { IBurgerMenuProps } from './types';
import { menuItems } from '../../../data/header.json';

export const BurgerMenu = ({ isOpen, onClose }: IBurgerMenuProps) => {
  return (
    <>
      <div className="bg-backdrop and fixed bottom-0 right-0 z-10 h-full w-full backdrop-blur-xl">
        <div className="mx-auto h-[640px] w-[360px] bg-mainBcg pb-12 pl-5 pr-[25px] pt-[22px]">
          <div className="mb-[62px] flex justify-between">
            <Logo path="header" onClick={onClose} />
            <button aria-label="menu button close" onClick={onClose}>
              <Image
                src="/icons/close-icon.svg"
                alt="menu open button"
                priority={true}
                width={14}
                height={14}
              />
            </button>
          </div>
          <nav className="mb-[340px] ml-3">
            <ul>
              {menuItems.map(item => (
                <li key={item} className="mb-6 last:mb-0">
                  {item}
                </li>
              ))}
            </ul>
          </nav>
          <div>Socials</div>
        </div>
      </div>
    </>
  );
};
