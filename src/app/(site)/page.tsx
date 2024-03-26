import { Hero } from '@/sections/Hero';
import { Values } from '@/sections/Values';
import { Services } from '@/sections/Services';
import { Education } from '@/sections/Education';
import { Questions } from '@/sections/Questions';
import { About } from '@/sections/About';
import { Preloader } from '@/components/ui/Preloader';
import { Form } from '@/components/ui/Form';

import {
  ModalTestComponent,
  ModalTestERRORComponent,
  ModalTestSUCCESSComponent,
  ModalTestCONDITIONSComponents,
} from '@/components/ui/Modal';

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <About />
      <Questions />
      <Values />
      <Services />
      <Education />
      <ModalTestComponent />
      <ModalTestERRORComponent />
      <ModalTestSUCCESSComponent />
      <ModalTestCONDITIONSComponents />
      <Form />
    </>
  );
}
