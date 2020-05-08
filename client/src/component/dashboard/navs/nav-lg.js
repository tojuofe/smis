import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import img from '../img/IMG.png';

const NavLg = () => {
  return (
    <Fragment>
      <div className='dashboard-left bg-dark'>
        <div className='center'>
          <h2>SMIS Dashboard</h2>
          <img src={img} className='img-round' alt='img' />
        </div>
        <ul>
          <li>
            <NavLink to='/' activeClassName='current' exact>
              <i className='fas fa-tachometer-alt'></i> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/staff' activeClassName='current' exact>
              <i className='fas fa-chalkboard-teacher'></i> Staff
            </NavLink>
          </li>
          <li>
            <NavLink to='/student' activeClassName='current' exact>
              <i className='fas fa-users'></i> Student
            </NavLink>
          </li>
          <li>
            <NavLink to='/profiles' activeClassName='current' exact>
              <i className='fas fa-user-tie'></i> &nbsp;Parent
            </NavLink>
          </li>
          <li>
            <NavLink to='/class' activeClassName='current' exact>
              <i className='fas fa-calendar-week'></i> &nbsp;Class
            </NavLink>
          </li>
          <li>
            <NavLink to='/payment' activeClassName='current' exact>
              <i className='fas fa-money-bill-alt'></i> Payment
            </NavLink>
          </li>
          <li>
            <NavLink to='/report' activeClassName='current' exact>
              <i className='fas fa-users'></i> Report
            </NavLink>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default NavLg;
