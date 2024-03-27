import React from 'react';
import { AboutServiceProps, AboutService } from './types';

export const AboutList: React.FC<AboutServiceProps> = ({ aboutServices }) => {
  return (
    <ul className="flex flex-col gap-5 xl:gap-7">
      {aboutServices.map((service: AboutService) => {
        return (
          <li
            key={service.id}
            className="relative ml-[45px] flex  max-w-full flex-col before:absolute before:left-[-43px] before:top-0 before:h-6 before:w-6 before:content-arrow md:ml-11 md:max-w-[396px] xl:max-w-[488px]"
          >
            <p className="text font-montserrat font-normal">
              <span className="font-semibold">{service.description1}</span>
              {service.description2}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
