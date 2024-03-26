import React from 'react';
import { classnames } from '@/utils/classnames';

import { SocialsItem } from '@/components/ui/SocialsItem';

import { SocialsProps } from './types';

import data from '@/data/common.json';

export const Socials: React.FC<SocialsProps> = ({ className }) => {
  const { socials } = data;
  const socialsClasses = classnames('flex gap-4 text-accent', className);
  return (
    <ul className={socialsClasses}>
      {socials.map(item => (
        <SocialsItem
          key={item.name}
          name={item.name as 'telegram' | 'instagram' | 'facebook'}
          href={item.path}
          ariaL={item.ariaLabel}
        />
      ))}
    </ul>
  );
};
