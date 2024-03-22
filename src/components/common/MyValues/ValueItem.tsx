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
    <div className="flex flex-col items-center justify-center bg-cardBcg p-6 md:flex-row md:p-8 xl:flex-col xl:p-10">
      <div className=" mb-6 md:mb-0 ">
        {value.name === 'lock' && (
          <Lock className="h-12 w-12 md:h-16 md:w-16" width={48} height={48} />
        )}
        {value.name === 'meeting' && (
          <Meeting
            className="h-12 w-12 md:h-16 md:w-16"
            width={48}
            height={48}
          />
        )}
        {value.name === 'flower' && (
          <Flower
            className="h-12 w-12 md:h-16 md:w-16"
            width={48}
            height={48}
          />
        )}
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="mb-3 font-tenor text-xl font-normal tracking-[0.5px] text-accent md:mb-4 xl:mb-6">
          {value.subTitle}
        </h3>
        <p>{value.description}</p>
      </div>
    </div>
  );
};
