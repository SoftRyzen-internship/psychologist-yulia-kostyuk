import React from 'react';
import EducationData from '@/components/common/Education/types';
import { EducationItem } from '@/components/common/Education';
import { Button } from '@/components/ui/Button';
import common from '@/data/common.json';

interface Props {
  educationData: EducationData;
}

export const Education: React.FC<Props> = ({ educationData }) => {
  return (
    <div className="container">
      <div className="flex flex-col xl:flex-row">
        <div className="flex flex-col xl:mr-[153px] xl:max-w-[265px]">
          <h2 className="section-title mb-6 font-tenor text-accent md:text-start xl:mb-10">
            {educationData.title}
          </h2>
          <Button
            tag="a"
            accent={false}
            className="flex max-w-full justify-center text-sm font-normal md:max-w-[170px] md:items-center md:justify-center xl:max-w-[187px] xl:text-base"
          >
            {common.buttonsText.v2}
          </Button>
        </div>
        <EducationItem educationData={educationData} />
      </div>
    </div>
  );
};
