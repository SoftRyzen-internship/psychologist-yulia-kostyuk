import React from 'react';
import myValues from '@/data/myValues.json';
import { Value } from './types';
import { ValueItem } from './ValueItem';

export const MyValues: React.FC = () => {
  return (
    <div className="container">
      <div>
        <h2 className='section-title text-accent mb-10 md:mb-12 xl:mb-[60px] font-tenor'>{myValues.title}</h2>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 ">
          {myValues.values.map((value: Value) => (
            <ValueItem key={value.id} value={value} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default MyValues;
