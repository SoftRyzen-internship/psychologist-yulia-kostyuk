import React from 'react';
import { classnames } from '@/utils/classnames';
import { EducationItemProps } from './types';

export const EducationItem: React.FC<EducationItemProps> = ({
  item,
  isLast,
}) => {
  return (
    <li
      key={item.id}
      className={classnames(
        'flex items-start justify-start border-t-[1px] border-solid border-border py-6 md:items-center md:py-[38px] xl:py-[42px] smOnly:flex-col',
        {
          'border-b-[1px] border-solid border-border': isLast,
        },
      )}
    >
      <h3 className="flex flex-1 font-tenor text-xl font-normal tracking-[0.5px] text-accent smOnly:mb-4">
        {item.subTitle}
      </h3>
      <p className="text flex flex-1 font-montserrat">{item.description}</p>
    </li>
  );
};

export default EducationItem;
