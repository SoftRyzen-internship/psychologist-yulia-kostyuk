'use client';

import { Hero } from '@/sections/Hero';
import { Button } from '@/components/ui/Button';
import common from '@/data/common.json';
import Services from '@/components/common/Services/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Button tag="a" accent={true} className="font-semibold">
        {common.buttonsText.v1}
      </Button>
      <Button tag="a" accent={false} className="font-normal">
        {common.buttonsText.v2}
      </Button>
      <Button tag="a" accent={false} className="font-normal">
        {common.buttonsText.v1}
      </Button>
    </>
  );
}
