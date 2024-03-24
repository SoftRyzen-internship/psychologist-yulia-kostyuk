import React from 'react';
import EducationData from './types';
import { classnames } from '@/utils/classnames';

interface Props {
  educationData: EducationData;
}

export const EducationItem: React.FC<Props> = ({ educationData }) => {
  return (
    <ul>
      {educationData.education.map((item, index) => (
        <li
          key={item.id}
          className={classnames(
            'flex items-center justify-start border-t-[1px] border-solid border-border py-6 md:py-[38px] xl:py-[42px] smOnly:flex-col',
            {
              'border-b-[1px] border-solid border-border':
                index === educationData.education.length - 1,
            },
          )}
        >
          <h3 className="flex flex-1 font-tenor text-xl font-normal tracking-[0.5px] text-accent">
            {item.subTitle}
          </h3>
          <p className="text flex flex-1 font-montserrat">{item.description}</p>
        </li>
      ))}
    </ul>
  );
};
