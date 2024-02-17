import React, { FunctionComponent } from "react";
import styles from "../../style";
import { contacts } from "../../constants";

const ContactUs: FunctionComponent = () => {
  return (
    <React.Fragment>
      <section
        id='contact-us'
        className={`w-full sm:mb-44 sm:my-28 my-12 flex flex-col justify-center sm:items-center`}
      >
        <div className='flex flex-col justify-center sm:items-center'>
          <h2 className='font-poppins font-semibold text-[36px]'>
            <span className='text-gradient'>Contact Us</span>
          </h2>
          <p
            className={`${styles.paragraph} sm:text-center text-[16px] sm:leading-[42.8px] md:text-[20px] mt-6`}
          >
            Let C.H.A.S.E IT Solutions be your trusted IT partner, propelling
            your business to greater heights through technology. For inquiries,
            consultations, or to explore our services, please get in touch with
            us at:
          </p>
        </div>

        <div className='w-full h-auto flex flex-row justify-center items-center mt-12'>
          <div className='grid md:grid-cols-3 sm:gap-8 gap-6'>
            {contacts.map((contact) => (
              <div className='py-8 px-8 bg-discount-gradient rounded-[10px] mb-2 z-[5]'>
                <p className='font-semibold text-gradient text-[19px]'>
                  {contact.title}
                </p>
                <p className={`${styles.paragraph} sm:mt-4 mt-2`}>
                  {contact.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactUs;
