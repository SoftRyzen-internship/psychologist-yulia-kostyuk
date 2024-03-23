'use client';

import { PortableText } from '@portabletext/react';
import React, { useEffect, useState } from 'react';

import { classnames } from '@/utils/classnames';

import { Condition } from './types';

import { getConditions } from '@/../sanity/request/conditionsRequest';

import styles from './Conditions.module.css';

export const Conditions = () => {
  const [conditions, setConditions] = useState<Condition[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const conditionsData = await getConditions();

      setConditions(conditionsData);
    };

    fetchData();
  }, []);

  const conditionsClasses = classnames(
    `prose max-w-full font-montserrat text-[14px] font-normal not-italic leading-5 tracking-[0.2px] text-text xl:text-[16px] xl:leading-6 ${styles.list}`,
  );

  return (
    <div className="h-[576px] overflow-y-auto overflow-x-hidden md:h-[952px] xl:h-[864px]">
      {conditions.map((condition, index) => (
        <React.Fragment key={index}>
          <h3 className="section-subtitle mb-6 ml-auto mr-auto text-center font-tenor text-accent md:w-[450px] xl:mb-[60px] xl:w-[639px] xl:tracking-[0.5px]">
            <PortableText value={condition.title} />
          </h3>
          <div className={conditionsClasses}>
            <PortableText key={index} value={condition.description} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
