import React, { FunctionComponent } from "react";
import { Navbar, Hero, Introduction } from "./core/components";
import styles from "./style";

const App: FunctionComponent = () => {
  return (
    <React.Fragment>
      <div className='bg-primary w-full overflow-hidden'>
        {/* Navigation Bar */}
        <div className={`${styles.flexStart}`}>
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
        {/* Introduction Section */}
        <Introduction />
      </div>
    </React.Fragment>
  );
};

export default App;
