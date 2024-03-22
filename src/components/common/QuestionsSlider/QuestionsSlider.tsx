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
      // centeredSlides={true}
      // grabCursor={true}
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
      {sectionQuestion.map(({ id, img, alt, label }) => (
        <SwiperSlide key={id}>
          <div className="h-[412px] w-[280px] rounded-[50%] border border-solid border-white px-[36px] py-[52px]">
            <Image
              src={img}
              alt={alt}
              priority
              width={208}
              height={308}
              className=""
            />
          </div>
          {label}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
