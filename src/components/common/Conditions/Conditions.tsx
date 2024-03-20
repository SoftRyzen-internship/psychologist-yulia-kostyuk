'use client';

import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';
import React, { useEffect, useState } from 'react';

import { getConditions } from '../../../../sanity/request/conditionsRequest';

type Condition = {
  _id: string;
  _type: string;
  description: PortableTextBlock[];
};

export const Conditions = () => {
  const [conditions, setConditions] = useState<Condition[]>([]);
  console.log(conditions);

  useEffect(() => {
    const fetchData = async () => {
      const conditionsData = await getConditions();
      console.log(conditionsData[0].title);
      console.log(conditionsData[0].description[0].children[0].text);

      setConditions(conditionsData);
    };

    fetchData();
  }, []);

  return (
    <div className="container font-montserrat text-[16px] font-normal not-italic leading-6 tracking-[0.2px] text-text">
      {conditions.map(condition => (
        <div key={condition._id} className="prose-red">
          <PortableText value={condition.description} />
        </div>
      ))}
    </div>
  );
};
