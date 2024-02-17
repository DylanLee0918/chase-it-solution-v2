import React, { FunctionComponent } from "react";
import styles from "../../style";
import Button from "../../shared/components/Button";

const CTAs: FunctionComponent = () => {
  return (
    <React.Fragment>
      <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      >
        <div className='flex-1 flex flex-col select-none'>
          <h2 className={`${styles.heading2}`}>Let's try our service now!</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <Button styles='mt-0' />
        </div>
      </section>
    </React.Fragment>
  );
};

export default CTAs;
