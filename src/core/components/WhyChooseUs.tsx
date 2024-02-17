import React, { FunctionComponent } from "react";
import styles, { layout } from "../../style";
import Button from "../../shared/components/Button";
import { features } from "../../constants";

interface featureProps {
  icon: string;
  title: string;
  content: string;
  index: number;
}

const FeatureCard: FunctionComponent<featureProps> = ({
  icon,
  title,
  content,
  index,
}) => (
  <div
    className={`flex md:flex-row flex-col justify-center items-center md:p-6 p-4 rounded-[20px] select-none z-30 ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] sm:mb-0 mb-4 rounded-full ${styles.flexCenter} bg-dimBlue mr-4`}
    >
      <img src={icon} alt='star' className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
);

const WhyChooseUs: FunctionComponent = () => {
  return (
    <React.Fragment>
      <section className={`w-full h-auto ${layout.section} my-28`}>
        <div className={`${layout.sectionInfo}`}>
          <h2 className={`${styles.heading2}`}>
            Why Choose C.H.A.S.E <br /> IT Solutions:
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </p>

          <Button styles='mt-10' />
        </div>

        <div className={`${layout.sectionImg} flex-col relative`}>
          {features.map((feature, index) => (
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              content={feature.content}
              index={index}
            />
          ))}

          <div className='sm:block hidden'>
            {/* gradient start */}
            <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
            <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-10' />
            <div className='absolute z-[0] w-[50%] h-[50%] right-60 bottom-56 blue__gradient' />
            {/* gradient end */}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default WhyChooseUs;
