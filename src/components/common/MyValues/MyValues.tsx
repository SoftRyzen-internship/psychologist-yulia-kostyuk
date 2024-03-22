import React from 'react';
import myValues from '@/data/myValues.json';
import { Value } from './types';
import Lock from '@/../public/icons/lock.svg';
import Meeting from '@/../public/icons/meeting.svg';
import Flower from '@/../public/icons/flower.svg';

const MyValues: React.FC = () => {
  return (
    <div className="container">
      <div>
        <h2 className='section-title text-accent mb-10 md:mb-12 xl:mb-[60px] font-tenor'>{myValues.title}</h2>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 ">
          {myValues.values.map((value: Value) => (
            <div
              key={value.id}
              className="p-6 md:p-8 xl:p-10 flex flex-col bg-cardBcg md:flex-row xl:flex-col justify-center items-center"
            >
              <div className='h-12 w-12 md:h-16 md:w-16 mb-6 md:mb-0 '>
                {value.id === 1 && <Lock className="h-12 w-12 icon" />}
                {value.id === 2 && <Meeting className="" />}
                {value.id === 3 && <Flower className="" />}
              </div>
              <div className='flex flex-col justify-center items-center text-center'>
                <h3 className="mb-3 text-xl font-normal text-accent font-tenor tracking-[0.5px] md:mb-4 xl:mb-6">{value.subTitle}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MyValues;
