'use client';

import Image from 'next/image';
import Meeting from '@/../public/icons/meeting.svg';
import common from '@/data/common.json';
import { Button } from '@/components/ui/TestUI/Button';

export const Hero = () => {
  return (
    <section>
      <div className="container">
        <h1 className="py-20 text-center text-5xl">Hello developers!</h1>
        <Image
          className="mx-auto rounded-full"
          src={'/images/oops.jpg'}
          width={500}
          height={500}
          alt="Котик с ножичком))"
        />
        <Button tag="a" accent={true} className="font-montserrat font-semibold">
        {common.buttonsText.v1}
          </Button>
        <Meeting />
      </div>
    </section>
  );
};
