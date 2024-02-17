import styles from "../../style";
import { star, mello } from "../../assets";
// import { GetStarted } from ".";

const Hero = () => {
  return (
    <section
      id='home'
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 z-[5]'>
          <img
            src={star}
            alt='star'
            className='w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]'
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white text-[14px] sm:text-[16px]'>
              Let's work together,
            </span>{" "}
            <span className='text-white text-[14px] sm:text-[16px]'>
              contact us now!
            </span>
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full z-[5]'>
          <h1 className='flex-1 font-poppins font-semibold ss:font-semibold ss:text-[68px] text-[44px] text-white ss:leading-[100.8px] leading-[75px]'>
            <span className='text-gradient'>Dynamic and Forward Thinking</span>{" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            {/* <GetStarted /> */}
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[44px] text-white ss:leading-[100.8px] leading-[75px] w-full z-[5]'>
          IT services provider.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 z-[5]`}>
          Committed to delivering innovative and reliable solutions to meet the
          IT needs of businesses of all sizes
        </p>

        {/* gradient start */}
        <div className='absolute z-[0] w-[10%] h-[25%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[25%] h-[25%] rounded-full white__gradient top-20' />
        <div className='absolute z-[0] w-[20%] h-[20%] left-25 top-20 blue__gradient' />
        {/* gradient end */}
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={mello}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />

        {/* gradient start */}
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        {/* <GetStarted /> */}
      </div>
    </section>
  );
};

export default Hero;
