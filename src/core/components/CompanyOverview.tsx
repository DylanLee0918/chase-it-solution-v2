import React, { FunctionComponent } from "react";
import styles from "../../style";

const CompanyOverview: FunctionComponent = () => {
  return (
    <React.Fragment>
      <section className='w-full'>
        <div className='sm:flex sm:flex-row sm:justify-between flex flex-col'>
          <div className='sm:w-[30vw] flex flex-col justify-center my-16'>
            <h3 className='font-poppins font-semibold text-[32px] text-white'>
              <span className='text-gradient'>Established in 2023</span>
              <p className={`${styles.paragraph} mt-5 z-[5] font-normal`}>
                We are a young and vibrant company, driven by a passion for
                technology and a commitment to delivering exceptional IT
                solutions.
              </p>
            </h3>
          </div>
          <div className='sm:w-[30vw] flex flex-col justify-center'>
            <h3 className='font-poppins font-semibold text-[32px] text-white'>
              <span className='text-gradient'>Small-Scaled IT Services</span>
              <p className={`${styles.paragraph} mt-5 z-[5] font-normal`}>
                Despite being a small-scale company, we possess the agility and
                expertise to provide tailored IT services that cater to your
                unique business requirements.
              </p>
            </h3>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CompanyOverview;
