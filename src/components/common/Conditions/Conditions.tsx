'use client';

import { PortableText } from '@portabletext/react';
import React, { useEffect, useState } from 'react';

import { Condition } from './types';

import { getConditions } from '@/../sanity/request/conditionsRequest';

export const Conditions = () => {
  const [conditions, setConditions] = useState<Condition[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const conditionsData = await getConditions();

      setConditions(conditionsData);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {conditions.map((condition, index) => (
        <React.Fragment key={index}>
          <h3 className="section-subtitle mb-6 font-tenor text-accent xl:mb-[60px] xl:tracking-[0.5px]">
            <PortableText value={condition.title} />
          </h3>
          <div className="prose font-montserrat text-[14px] font-normal not-italic leading-5 tracking-[0.2px] text-text xl:text-[16px] xl:leading-6">
            <PortableText key={index} value={condition.description} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
