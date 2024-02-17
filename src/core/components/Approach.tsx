import React, { FunctionComponent } from "react";
import { ourApproachData } from "../../constants";
import styles from "../../style";

const Approach: FunctionComponent = () => {
  return (
    <React.Fragment>
      <section
        id='approach'
        className={`w-full sm:${styles.marginY} my-24 mt-10 flex flex-col justify-center sm:items-center`}
      >
        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-poppins font-semibold text-[36px]'>
            <span className='text-gradient'>Our Approach</span>
          </h2>
          <p
            className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] md:text-[24px] mt-6`}
          >
            At C.H.A.S.E IT Solutions, we prioritize:
          </p>
        </div>

        <div className='w-full h-auto flex flex-row justify-center items-center mt-12'>
          <div className='grid md:grid-cols-2 sm:gap-8 gap-6'>
            {ourApproachData.map((data) => (
              <div className='py-8 px-8 bg-discount-gradient rounded-[10px] mb-2 z-[5]'>
                <p className={`${styles.paragraph}`}>
                  <span className='text-gradient font-semibold select-none text-[16px] sm:text-[20px]'>
                    {data.title}
                  </span>
                </p>
                <div>
                  <p
                    className={`font-poppins font-normal text-dimWhite sm:text-[18px] sm:leading-[30.8px] select-none mt-2 z-[5] text-[14px]`}
                  >
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Approach;
