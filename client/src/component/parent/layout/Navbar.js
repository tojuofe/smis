import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { logout } from '../../../action/auth';
import PropTypes from 'prop-types';

import img from '../../dashboard/img/IMG.png';

const Navbar = ({ logout, user, isAuthenticated }) => {
  return (
    <Fragment>
      {isAuthenticated && user && (
        <div id='navbar'>
          <img src={img} alt='img' className='logo' />
          <ul>
            <li>
              <NavLink
                to={`/parent/profile/${user._id}`}
                activeclassname='active'
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/parent/payments/${user._id}`}
                activeclassname='active'
              >
                Payment
              </NavLink>
            </li>
            <li>
              <Link to='#!' onClick={logout}>
                LOGOUT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth: { user, isAuthenticated } }) => ({
  user,
  isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
