import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { logout } from '../../../action/auth';
import PropTypes from 'prop-types';

import img from '../../dashboard/img/IMG.png';

const Navbar = ({ logout }) => {
  return (
    <Fragment>
      <div id='navbar'>
        <img src={img} alt='img' className='logo' />
        <ul>
          <li>
            <NavLink to='/profile' activeclassname='active'>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to='/views' activeclassname='active'>
              Views
            </NavLink>
          </li>
          <li>
            <NavLink to='/reports' activeclassname='active'>
              Report
            </NavLink>
          </li>
          <li>
            <Link to='#!' onClick={logout}>
              LOGOUT
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Navbar);
