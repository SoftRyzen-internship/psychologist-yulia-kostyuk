'use client';

import React, { useEffect, useState } from 'react';
import { getServices } from '@/../sanity/request/servicesRequest';
import common from '@/data/common.json';
import { Button } from '@/components/ui/Button';
import { Service } from './types';
import ServiceItem from './ServicesItem';

export function MyServices() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const servicesData = await getServices();
      console.log(servicesData);

      setServices(servicesData);
    };

    fetchData();
  }, []);

  return (
    <div className="xl:pt[68px] flex flex-col gap-6 xl:gap-[60px]">
      {services.map(service => (
        <div
          className="flex flex-col bg-cardBcg p-6 md:p-0  xl:flex-row xl:justify-between "
          key={service._id}
        >
          <div className="flex flex-col border-b-[1px] border-solid border-accent/20 pb-8 md:flex-row md:items-center md:justify-between md:px-8 md:pt-8 xl:flex-col  xl:items-start xl:border-none xl:pb-[52px] xl:pl-[80px] xl:pt-[68px] notXL:mb-8">
            <div className="flex flex-col items-center pb-8 md:items-start md:justify-between md:pb-0 xl:max-w-[303px] xl:items-start">
              <h3 className="section-subtitle mb-4 font-tenor text-accent">
                {service.title}
              </h3>
              <p className="text font-montserrat text-text opacity-80">
                {service.location}
              </p>
            </div>
            <Button
              tag="a"
              accent={false}
              className="flex max-w-full justify-center font-normal md:max-w-[135px] md:items-center md:justify-center xl:max-w-[147px]"
            >
              {common.buttonsText.v1}
            </Button>
          </div>

          <ul className="flex flex-col gap-5 border-none md:px-8 md:pb-8 xl:border-l-[1px] xl:border-solid xl:border-accent/20 xl:pb-[52px] xl:pl-10 xl:pr-[80px] xl:pt-[68px]">
            {service.card.map((card, index) => (
              <ServiceItem key={index} card={card} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
