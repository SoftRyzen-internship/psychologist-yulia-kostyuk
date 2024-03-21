'use client';

import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';
import React, { useEffect, useState } from 'react';

import { getConditions } from '@/../sanity/request/conditionsRequest';

type Condition = {
  _id: string;
  _type: string;
  description: PortableTextBlock[];
};

export const Conditions = () => {
  const [conditions, setConditions] = useState<Condition[]>([]);

  //   conditions.map((condition: any) =>
  //     condition.description.map((desc: any) => {
  //       desc.children.map((children: any) => console.log(children.text));
  //     }),
  //   );

  useEffect(() => {
    const fetchData = async () => {
      const conditionsData = await getConditions();

      setConditions(conditionsData);
    };

    fetchData();
  }, []);

  return (
    <>
      {conditions.map(condition => (
        <div
          key={condition._id}
          className="container font-montserrat text-[16px] font-normal not-italic leading-6 tracking-[0.2px] text-text"
        >
          <PortableText key={condition._id} value={condition.description} />
        </div>
      ))}
    </>
  );
};
