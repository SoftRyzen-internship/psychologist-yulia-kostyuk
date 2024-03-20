import React from 'react';
import { Cards } from './types';

interface ServiceCardProps {
  card: Cards;
}

const ServiceItem: React.FC<ServiceCardProps> = ({ card }) => {
  return (
    <li className="relative flex flex-col font-semibold  before:absolute before:left-[-35px] before:top-[-2px] before:h-[24px] before:w-[24px] before:content-arrow">
      <p className="text">{card.subtitle}</p>
      {card.description && (
        <p className="text font-normal">{card.description}</p>
      )}
    </li>
  );
};

export default ServiceItem;
