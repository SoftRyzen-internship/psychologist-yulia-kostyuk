import { useSwiper } from 'swiper/react';

import IconSliderNext from '@/../public/icons/arrow.svg';

import data from '@/data/common.json';

export const SliderButtonNext = () => {
  const swiper = useSwiper();
  const { ariaLabel } = data.questionsSection;

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="ml-auto mr-0 block xl:mt-[58px]"
      onClick={() => swiper.slideNext()}
    >
      <IconSliderNext
        width={32}
        height={32}
        className="transition hover:stroke-2 focus:stroke-2"
      />
    </button>
  );
};
