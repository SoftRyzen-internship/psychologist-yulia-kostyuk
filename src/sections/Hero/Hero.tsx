'use client';

import Image from 'next/image';
import Meeting from '@/../public/icons/meeting.svg';

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
        <Meeting />
      </div>
    </section>
  );
};
