import React from 'react';
import myValues from '@/data/myValues.json';
import { Value } from './types';
import Lock from '@/../public/icons/lock.svg';
import Meeting from '@/../public/icons/meeting.svg';
import Flower from '@/../public/icons/flower.svg';

const MyValues: React.FC = () => {
  return (
    <div className="container">
      <h2>{myValues.title}</h2>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        {myValues.values.map((value: Value) => (
          <div
            key={value.id}
            className="value rounded border border-gray-300 p-4"
          >
            {value.id === 1 && <Lock className="mx-auto mb-4 h-16 w-16" />}
            {value.id === 2 && <Meeting className="mx-auto mb-4 h-16 w-16" />}
            {value.id === 3 && <Flower className="mx-auto mb-4 h-16 w-16" />}
            <h3 className="mb-2 text-xl font-bold">{value.subTitle}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyValues;
