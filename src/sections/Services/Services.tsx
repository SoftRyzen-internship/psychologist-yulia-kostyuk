import React from 'react';
import common from '@/data/common.json';
import { ServicesList } from '@/components/common/ServicesList';

export const Services = () => {
  const servicesTitle = common.layout.titles.services;

  return (
    <section className="w-full py-10 md:py-[60px] xl:py-20">
      <div className="container">
        <h2 className="section-title mb-10 font-tenor text-accent md:mb-12 xl:mb-[60px]">
          {servicesTitle}
        </h2>
        <ServicesList />
      </div>
    </section>
  );
};
