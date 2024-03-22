import React from 'react';
import myValues from '@/data/myValues.json';
import { Value } from './types';
import Lock from '@/../public/icons/lock.svg';
import Meeting from '@/../public/icons/meeting.svg';
import Flower from '@/../public/icons/flower.svg';

interface ValueItemProps {
  value: Value;
}

export const ValueItem: React.FC<ValueItemProps> = ({ value }) => {
  return (

    <div className="p-6 md:p-8 xl:p-10 flex flex-col bg-cardBcg md:flex-row xl:flex-col justify-center items-center">
      <div className=' mb-6 md:mb-0 '>
        {value.name === "lock" && <Lock className="h-12 w-12 md:h-16 md:w-16" width={48} height={48} />}
        {value.name === "meeting" && <Meeting className="h-12 w-12 md:h-16 md:w-16" width={48} height={48} />}
        {value.name === "flower" && <Flower className="h-12 w-12 md:h-16 md:w-16" width={48} height={48} />}
      </div>
      <div className='flex flex-col justify-center items-center text-center'>
        <h3 className="mb-3 text-xl font-normal text-accent font-tenor tracking-[0.5px] md:mb-4 xl:mb-6">{value.subTitle}</h3>
        <p>{value.description}</p>
      </div>
    </div>


  )
}