'use client';

import React from 'react';
import { EducationItem } from '@/components/common/EducationItem';
import { Button } from '@/components/ui/Button';
import common from '@/data/common.json';
import educationData from '@/data/education.json';

export const Education = () => {
  return (
    <section className="w-full pb-[60px] pt-10 md:pb-[120px] md:pt-[60px] xl:pb-[140px] xl:pt-20">
      <div className="container">
        <div className="flex flex-col xl:flex-row">
          <div className="mb-10 flex flex-col md:mb-12 xl:mb-0 xl:mr-[153px] xl:max-w-[265px]">
            <h2 className="section-title mb-6 font-tenor text-accent md:text-start xl:mb-10">
              {educationData.title}
            </h2>
            <Button
              tag="a"
              href={educationData.link}
              accent={false}
              className="flex max-w-full justify-center text-sm font-normal md:max-w-[170px] md:items-center md:justify-center xl:max-w-[187px] xl:text-base"
            >
              {common.buttonsText.v2}
            </Button>
          </div>
          <ul>
            {educationData.education.map((item, index) => (
              <EducationItem
                key={item.id}
                item={item}
                index={index}
                isLast={index === educationData.education.length - 1}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
