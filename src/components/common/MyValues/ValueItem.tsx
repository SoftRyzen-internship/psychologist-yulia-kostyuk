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
    <div key={value.id} className="value rounded border border-gray-300 p-4">
      {value.name === 'lock' && <Lock className="mx-auto mb-4 h-16 w-16" />}
      {value.name === 'meeting' && (
        <Meeting className="mx-auto mb-4 h-16 w-16" />
      )}
      {value.name === 'flower' && <Flower className="mx-auto mb-4 h-16 w-16" />}
      <h3 className="mb-2 text-xl font-bold">{value.subTitle}</h3>
      <p>{value.description}</p>
    </div>
  );
};
