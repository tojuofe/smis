import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { createReport } from '../../../action/report';
import { getStudents } from '../../../action/student';
import { getClasses, getSubject } from '../../../action/class';
import PropTypes from 'prop-types';

// Component
import NavSm from '../navs/nav-sm';
import Navlg from '../navs/nav-lg';
import Alert from '../../layout/Alert';
import tabControl from '../../js/main';
import { toggleNav } from '../../js/main';
import ResultSubject from './result-subject';
import ResultView from './result-View';
import ResultForm from './result-form';
import ResultDelete from './result-delete';
import View from './view';

import './result.style.css';

const Report = ({ getClasses, getStudents, getSubject }) => {
  useEffect(() => {
    getStudents();
    getClasses();
    getSubject();
    tabControl();
  }, [getClasses, getStudents, getSubject]);

  return (
    <Fragment>
      <NavSm />
      <div id='dashboard-container'>
        <div className='dashboard'>
          <Navlg />
          <div className='dashboard-right bg-secondary'>
            <Alert />
            <button id='toggle' className='toggle sm-hide' onClick={toggleNav}>
              <i className='fas fa-bars fa-2x'></i>
            </button>

            <div className='student'>
              <div className='student-btn lg-hide'>
                <button className='btnclick active' data-id='newstu'>
                  VIEW RESULT
                </button>
                <button className='btnclick' data-id='retstu'>
                  CREATE SUBJECT
                </button>
              </div>
              <ResultView />
              <ResultForm />
              <ResultDelete />
            </div>
            <ResultSubject />
            <View />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Report.propTypes = {
  students: PropTypes.array,
  getClasses: PropTypes.func.isRequired,
  getStudents: PropTypes.func.isRequired,
  getSubject: PropTypes.func.isRequired,
};

export default connect(null, {
  createReport,
  getStudents,
  getClasses,
  getSubject,
})(Report);
