import React from 'react';
import { Value } from './types';
import Lock from '@/../public/icons/lock.svg';
import Meeting from '@/../public/icons/meeting.svg';
import Flower from '@/../public/icons/flower.svg';

interface ValueItemProps {
  value: Value;
}

export const ValueItem: React.FC<ValueItemProps> = ({ value }) => {
  return (
    <div
      key={value.id}
      className="p-6 md:p-8 xl:p-10 flex flex-col bg-cardBcg md:flex-row xl:flex-col justify-center items-center"
    >
      <div className=''>
        {value.name === "lock" && <Lock className='h-[20px] w-[20px] md:w-[64px] md:h-[64px]' />}
        {value.name === "meeting" && <Meeting className='h-[20px] w-[20px] md:w-[64px] md:h-[64px]' />}
        {value.name === "flower" && <Flower className='h-[20px] w-[20px] md:w-[64px] md:h-[64px]' />}
      </div>


      <div className='flex flex-col justify-center items-center text-center'>
        <h3 className="mb-3 text-xl font-normal text-accent font-tenor tracking-[0.5px] md:mb-4 xl:mb-6">{value.subTitle}</h3>
        <p>{value.description}</p>
      </div>
    </div>
  );
};