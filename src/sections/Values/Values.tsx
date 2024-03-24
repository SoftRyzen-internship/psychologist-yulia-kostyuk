import React from 'react';
import myValues from '@/data/myValues.json';
import { Value } from '@/components/common/MyValues/types';
import { ValueItem } from '@/components/common/MyValues/ValueItem';

export const Values: React.FC = () => {
  return (
    <section className="mp-20 w-full pb-10 md:pb-[60px] md:pt-[120px] xl:pb-20 xl:pt-40">
      <div className="container">
        <div>
          <h2 className="section-title mb-10  font-tenor text-accent md:mb-12 xl:mb-[60px] ">
            {myValues.title}
          </h2>
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 ">
            {myValues.values.map((value: Value) => (
              <ValueItem key={value.id} value={value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
