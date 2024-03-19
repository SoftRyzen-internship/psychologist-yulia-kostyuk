'use client';

import React, { useEffect, useState } from 'react';
import { getServices } from '../../../../sanity/request/servicesRequest';

type Service = {
  _id: string;
  title: string;
  location: string;
  card: Cards[];
};

type Cards = {
  _key: string;
  subtitle: string;
  description?: {
    children: {
      text: string;
    }[];
  }[];
};

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const servicesData = await getServices();
      // console.log(servicesData);
      // console.log(servicesData[0].location);
      // console.log(servicesData[0].card[0]);
      // console.log(servicesData[0].card[0].subtitle);
      // console.log(servicesData[0].card[0].description[0].children[0].text);

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
                <li key={index}>
                  <h4>{card.subtitle}</h4>
                  {card.description && (
                    <p>
                      {card.description.map((desc, idx) => (
                        <span key={idx}>{desc.children[0].text}</span>
                      ))}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
