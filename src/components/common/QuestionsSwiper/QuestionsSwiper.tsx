import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';

import { QuestionsSlider } from '@/components/common/QuestionsSlider';
import { SliderButtonNext } from '@/components/ui/SliderButtonNext';

import dataImages from '@/data/questions.json';

import 'swiper/css';

export const QuestionsSwiper = () => {
  return (
    <Swiper
      className="relative"
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
          spaceBetween: 40,
        },
      }}
    >
      {dataImages.map(({ id, img, alt, label }) => (
        <SwiperSlide key={id}>
          <QuestionsSlider key={id} id={id} img={img} alt={alt} label={label} />
        </SwiperSlide>
      ))}
      <SliderButtonNext />
    </Swiper>
  );
};
