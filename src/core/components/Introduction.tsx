import React, { FunctionComponent } from "react";
import styles from "../../style";

const Introduction: FunctionComponent = () => {
  return (
    <React.Fragment>
      <section className='w-full sm:mt-26 mt-24 flex flex-col justify-center sm:items-center'>
        <h3 className='font-poppins font-semibold text-[32px] text-white'>
          <span className='text-gradient'>Introduction</span>
        </h3>
        <p className={`${styles.paragraph} mt-5 z-[5] font-normal text-center`}>
          C.H.A.S.E IT Solutions is a dynamic and forward-thinking IT service
          provider founded in 2023. We are committed to delivering innovative
          and reliable solutions to meet the IT needs of businesses of all
          sizes. Our core focus is on IT hardware procurement, and we complement
          this primary service with IT consultancy and software development
          services.
        </p>
      </section>
    </React.Fragment>
  );
};

export default Introduction;
