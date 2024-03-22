import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';

import { QuestionsSliderProps } from './types';

import 'swiper/css';

export const QuestionsSlider: React.FC<QuestionsSliderProps> = ({
  sectionQuestion,
}) => {
  return (
    <Swiper
      modules={[A11y]}
      initialSlide={1}
      direction={'horizontal'}
      loop={true}
      a11y={{ enabled: true }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        1280: {
          slidesPerView: 3,
        },
      }}
    >
      {sectionQuestion.map(({ id, img, img2, alt, label }) => (
        <SwiperSlide
          key={id}
          className="caption flex flex-col text-center font-normal text-white xl:text-[24px]"
        >
          <div className="mb-[38px] ml-auto mr-auto h-[412px] w-[280px] rounded-[50%] border border-solid border-white px-[36px] py-[52px]">
            <Image src={img} alt={alt} width={208} height={308} />
            <source
              srcSet={img2}
              //   media="(min-width: 768px)"
            />
          </div>
          {label}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
