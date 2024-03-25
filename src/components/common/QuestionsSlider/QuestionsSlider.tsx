import React from 'react';
import Image from 'next/image';

import { QuestionsSliderProps } from './types';

export const QuestionsSlider: React.FC<QuestionsSliderProps> = ({
  id,
  img,
  alt,
  label,
}) => {
  return (
    <li key={id} className="flex flex-col smOnly:mb-6 mdOnly:mb-3">
      <div className="mb-[38px] ml-auto mr-auto h-[412px] w-[280px] rounded-[50%] border border-solid border-white px-[36px] py-[52px]">
        <div className="overflow-hidden rounded-[50%]">
          <Image
            src={img}
            alt={alt}
            width={208}
            height={308}
            priority
            className="cursor-pointer transition hover:scale-[1.1]"
          />
        </div>
      </div>
      <p className="caption ml-auto mr-auto w-[200px] text-center font-tenor font-normal text-white xl:w-[250px] xl:text-[24px]">
        {label}
      </p>
    </li>
  );
};
