import React, { FunctionComponent } from "react";
// import styles from "../../style";
import { logo } from "../../assets";
// import { navLinks } from "../../constants";

const Navbar: FunctionComponent = () => {
  return (
    <React.Fragment>
      <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo} alt='hoobank' />
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
