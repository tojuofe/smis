import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import img from '../img/IMG.png';

const Nav = () => {
  return (
    <Fragment>
      <nav className='sm-hide'>
        <div className='logo'>
          <h2>Dashboard</h2>
          <img src={img} className='img-round' alt='img' />
        </div>
        <ul>
          <li>
            <NavLink to='/' activeClassName='active' exact>
              <i className='fas fa-tachometer-alt'> </i> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/staff' activeClassName='active' exact>
              <i className='fas fa-chalkboard-teacher'> </i> Staff
            </NavLink>
          </li>
          <li>
            <NavLink to='/student' activeClassName='active' exact>
              <i className='fas fa-users'> </i> Student
            </NavLink>
          </li>
          <li>
            <NavLink to='/report' activeClassName='active' exact>
              <i className='fab fa-readme'> </i> Report
            </NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Nav;
