import { Hero } from '@/sections/Hero';
// import { Button } from '@/components/ui/Button';
// import common from '@/data/common.json';
import { Values } from '@/sections/Values';
import { Services } from '@/sections/Services';
import { Education } from '@/sections/Education';
import { Questions } from '@/sections/Questions';
import { About } from '@/sections/About';

import {
  ModalTestComponent,
  ModalTestERRORComponent,
  ModalTestSUCCESSComponent,
  ModalTestCONDITIONSComponents,
} from '@/components/ui/Modal';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Questions />
      <Values />
      <Services />
      <Education />
      {/* <Button tag="a" accent={true} className="font-semibold">
        {common.buttonsText.v1}
      </Button>
      <Button tag="a" accent={false} className="font-normal">
        {common.buttonsText.v2}
      </Button>
      <Button tag="a" accent={false} className="font-normal">
        {common.buttonsText.v1}
      </Button> */}
      <ModalTestComponent />
      <ModalTestERRORComponent />
      <ModalTestSUCCESSComponent />
      <ModalTestCONDITIONSComponents />
    </>
  );
}
