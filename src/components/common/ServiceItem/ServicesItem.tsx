import React from 'react';
import { ServiceCardProps } from './types';

const ServiceItem: React.FC<ServiceCardProps> = ({ card }) => {
  return (
    <li className="relative ml-[45px] flex flex-col font-semibold before:absolute  before:left-[-43px] before:top-0 before:h-6 before:w-6 before:content-arrow md:ml-11 xl:w-[592px]">
      <p className="text font-montserrat">{card.subtitle}</p>
      {card.description && (
        <p className="text font-montserrat font-normal">{card.description}</p>
      )}
    </li>
  );
};

export default ServiceItem;
