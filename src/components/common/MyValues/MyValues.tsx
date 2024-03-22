import React from 'react'
import myValues from '@/data/myValues.json'
import { Value } from './types';
import Lock from '@/../public/icons/lock.svg'
import Meeting from '@/../public/icons/meeting.svg'
import Flower from '@/../public/icons/flower.svg'


const MyValues: React.FC = () => {

  return (
    <div className='container'>
      <h2>{myValues.title}</h2>
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-8'>
        {myValues.values.map((value: Value) => (
          <div key={value.id} className="value p-4 border border-gray-300 rounded">
            {value.id === 1 && <Lock className="w-16 h-16 mx-auto mb-4" />}
            {value.id === 2 && <Meeting className="w-16 h-16 mx-auto mb-4" />}
            {value.id === 3 && <Flower className="w-16 h-16 mx-auto mb-4" />}
            <h3 className="text-xl font-bold mb-2">{value.subTitle}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyValues;
