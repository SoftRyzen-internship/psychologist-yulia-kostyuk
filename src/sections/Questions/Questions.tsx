import { QuestionsSwiper } from '@/components/common/QuestionsSwiper';

import data from '@/data/common.json';

export const Questions = () => {
  const { title, description } = data.questionsSection;

  return (
    <section className="w-full bg-bgQuestions pb-6 pt-[80px] md:pb-[40px] md:pt-[120px] xl:pb-[80px] xl:pt-40">
      <div className="container xl:flex xl:items-start xl:gap-10">
        <div className="md:flex md:items-center md:justify-between xl:h-[300px] xl:flex-col xl:gap-[190px] notXL:mb-[60px]">
          <div className="section-title flex flex-col items-start font-tenor text-white smOnly:mb-8">
            <h2>{title.label1}</h2>
            <h2>{title.label2}</h2>
          </div>
          <p className="text font-montserrat text-white md:w-[224px] smOnly:mb-10">
            {description}
          </p>
        </div>
        <QuestionsSwiper />
      </div>
    </section>
  );
};
