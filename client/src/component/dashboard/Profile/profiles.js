import React, { Fragment, useEffect } from 'react';

// Component
import NavSm from '../navs/nav-sm';
import Navlg from '../navs/nav-lg';

import ProfileParent from './profile.parent';
import ProfileStudent from './profile.student';
import ProfileStudentView from './profile.studentView';
import tabControl from '../../js/main';

const Profiles = () => {
  useEffect(() => {
    tabControl();
  });

  return (
    <Fragment>
      <NavSm />
      <div id='dashboard-container'>
        <div className='dashboard'>
          <Navlg />
          <div className='dashboard-right bg-secondary'>
            <div className='student'>
              <div className='student-btn'>
                <button className='btnclick active' data-id='newstu'>
                  VIEW PARENT
                </button>
                <button className='btnclick' data-id='retstu'>
                  VIEW STUDENT
                </button>
              </div>
              <ProfileParent />
              <ProfileStudent />
            </div>
            <ProfileStudentView />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profiles;
