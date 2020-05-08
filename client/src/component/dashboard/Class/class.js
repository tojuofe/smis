import React, { Fragment, useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { createClass, getClasses } from '../../../action/class';
import { getStaff, filterStaff } from '../../../action/staff';

// Components
import NavSm from '../navs/nav-sm';
import Navlg from '../navs/nav-lg';
import tabControl from '../../js/main.js';
import Alert from '../../layout/Alert';
import Spinner from '../../layout/Spinner';
import ClassItem from './classItem';
import ClassAssign from './classAssign';
import CreateClass from './createClass';

const Class = ({
  staff: { staffs, loading, filtered },
  getStaff,
  getClasses,
  createClass,
  filterStaff,
}) => {
  const text = useRef('');

  const [formData, setFormData] = useState({
    class_admitted: '',
  });

  const { class_admitted } = formData;

  useEffect(() => {
    tabControl();
    getClasses();
    getStaff();
  }, [getClasses, getStaff]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createClass(formData);
    setFormData({ class_admitted: '' });
  };

  const getAllStaff =
    filtered !== null
      ? filtered.map((staff) => <ClassItem key={staff._id} staff={staff} />)
      : staffs.map((staff) => <ClassItem key={staff._id} staff={staff} />);

  return (
    <Fragment>
      <NavSm />
      <div id='dashboard-container'>
        <div className='dashboard'>
          <Navlg />
          <div className='dashboard-right bg-secondary'>
            <Alert />
            <div className='student'>
              <div className='student-btn'>
                <button className='btnclick active' data-id='newstu'>
                  CREATE CLASS
                </button>
                <button className='btnclick' data-id='retstu'>
                  ASSIGN CLASS
                </button>
                <button className='btnclick' data-id='createclass'>
                  CREATE CLASS
                </button>
              </div>

              <div className='staff'>
                <div className='staff-form active' id='newstu'>
                  <div className='display-card'>
                    <form onSubmit={onSubmit}>
                      <div className='form-group'>
                        <label htmlFor='nameofsubject'>Name of Class</label>
                        <input
                          type='text'
                          placeholder='Enter Class...'
                          name='class_admitted'
                          value={class_admitted}
                          onChange={onChange}
                          required
                        />
                      </div>
                      <input
                        type='submit'
                        value='Create Class'
                        className='btn mt-1'
                      />
                    </form>
                  </div>
                </div>
              </div>

              <div className='staff'>
                <div className='staff-form' id='retstu'>
                  <div className='display-card'>
                    <div className='dashboard-space pb-1'>
                      <div className='flex'>
                        <input
                          ref={text}
                          type='search'
                          placeholder='Search...'
                          className='search'
                          onChange={(e) => filterStaff(e.target.value)}
                        />
                      </div>
                      <ReactHTMLTableToExcel
                        className='btn'
                        table='staff'
                        filename='ParentExcel'
                        sheet='Sheet'
                        buttonText='Export to Excel'
                      />
                    </div>
                    {staffs !== null && !loading ? (
                      <table id='staff' className='table'>
                        <thead>
                          <tr>
                            <th>Names</th>
                            <th>Gender</th>
                            <th>Email Address</th>
                            <th>Qualification</th>
                            <th>Course of Study</th>
                            <th>Class Assigned To</th>
                            <th>Operation</th>
                          </tr>
                        </thead>
                        <tbody>{getAllStaff}</tbody>
                      </table>
                    ) : (
                      <Spinner />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <ClassAssign />
            <CreateClass />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Class.propTypes = {
  staff: PropTypes.object.isRequired,
  getClasses: PropTypes.func.isRequired,
  createClass: PropTypes.func.isRequired,
  getStaff: PropTypes.func.isRequired,
  filterStaff: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  staff: state.staff,
});

export default connect(mapStateToProps, {
  getClasses,
  createClass,
  getStaff,
  filterStaff,
})(Class);
