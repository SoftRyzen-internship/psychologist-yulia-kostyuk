'use client';

import { Hero } from '@/sections/Hero';
import { Button } from '@/components/ui/TestUI/Button';
import common from '@/data/common.json';

export default function Home() {
  return (
    <>
      <Hero />
      <Button tag="a" accent={true} className="font-montserrat font-semibold">
        {common.buttonsText.v1}
      </Button>
    </>
  );
}
