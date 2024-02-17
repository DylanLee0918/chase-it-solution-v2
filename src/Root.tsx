import React, { FunctionComponent } from "react";
import {
  Navbar,
  Hero,
  Stats,
  Introduction,
  CompanyOverview,
  Services,
} from "./core/components";
import styles from "./style";

const App: FunctionComponent = () => {
  return (
    <React.Fragment>
      <div className='bg-primary w-full overflow-hidden'>
        {/* Navigation Bar */}
        <div className={` ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        {/* Hero Section */}
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Introduction />
            <CompanyOverview />
            <Services />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
