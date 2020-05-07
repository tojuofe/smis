import React, { Fragment } from 'react';

// Nav Component
import NavSm from './navs/nav-sm';
import Navlg from './navs/nav-lg';

const Navbar = (props) => {
  return (
    <Fragment>
      <NavSm />
      <div id='dashboard-container'>
        <div className='dashboard'>
          <Navlg />
          {props.children}
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
