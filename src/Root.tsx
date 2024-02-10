import React, { FunctionComponent } from "react";
import { Navbar, Hero, Introduction } from "./core/components";

const App: FunctionComponent = () => {
  return (
    <React.Fragment>
      <div className='bg-primary w-full overflow-hidden'>
        {/* Navigation Bar */}
        <Navbar />
        {/* Hero Section */}
        <Hero />
        {/* Introduction Section */}
        <Introduction />
      </div>
    </React.Fragment>
  );
};

export default App;
