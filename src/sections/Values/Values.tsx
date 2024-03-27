import React from 'react';
import myValues from '@/data/myValues.json';
import { ValueProps } from '@/components/common/ValueItem/types';
import { ValueItem } from '@/components/common/ValueItem/ValueItem';

export const Values: React.FC = () => {
  return (
    <section className="mp-20 w-full pb-10 md:pb-[60px] md:pt-[120px] xl:pb-20 xl:pt-40">
      <div className="container">
        <div>
          <h2 className="section-title mb-10  font-tenor text-accent md:mb-12 xl:mb-[60px] ">
            {myValues.title}
          </h2>
          <ul className="grid grid-cols-1 gap-8 xl:grid-cols-3 ">
            {myValues.values.map((value: ValueProps) => (
              <ValueItem key={value.id} value={value} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
