'use client';

import React, { useEffect, useState } from 'react';
import { getServices } from '@/../sanity/request/servicesRequest';
import { Service } from './types';
import ServiceItem from './ServicesItem';

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const servicesData = await getServices();
      setServices(servicesData);
    };

    fetchData();
  }, []);

  return (
    <div className=" container border-solid border-red-400">
      <h2 className="title">Мої послуги</h2>
      <div className="cards-container">
        {services.map(service => (
          <div className="" key={service._id}>
            <h2>{service.title}</h2>
            <h3>{service.location}</h3>
            <ul>
              {service.card.map((card, index) => (
                <ServiceItem key={index} card={card} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
