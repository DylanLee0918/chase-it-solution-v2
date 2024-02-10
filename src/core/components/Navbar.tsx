import React, { FunctionComponent } from "react";
import styles from "../../style";

const Navbar: FunctionComponent = () => {
  return (
    <>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>Navbar</div>
      </div>
    </>
  );
};

export default Navbar;
