import React, { FunctionComponent } from "react";
import styles from "../../style";

const Introduction: FunctionComponent = () => {
  return (
    <>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Stats Business Billing CardDeal Testimonial Clients CTA Footer
        </div>
      </div>
    </>
  );
};

export default Introduction;
