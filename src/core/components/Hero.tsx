import React, { FunctionComponent } from "react";
import styles from "../../style";

const Hero: FunctionComponent = () => {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
      </div>
    </>
  );
};

export default Hero;
