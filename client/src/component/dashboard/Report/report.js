import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createReport } from '../../../action/report';
import { getStudents } from '../../../action/student';
import { getClasses } from '../../../action/class';
import PropTypes from 'prop-types';

// Component
import NavSm from '../navs/nav-sm';
import Navlg from '../navs/nav-lg';
import Alert from '../../layout/Alert';
import { toggleNav } from '../../js/main';

const Report = ({
  createReport,
  students,
  classes,
  getClasses,
  getStudents,
}) => {
  const [formData, setFormData] = useState({
    term: '',
    total: '',
    name: '',
    position_or_grade: '',
    gender: '',
    teacher_remark: '',
    class_admitted: '',
    head_teacher_remark: '',
  });

  const {
    term,
    total,
    name,
    position_or_grade,
    gender,
    teacher_remark,
    class_admitted,
    head_teacher_remark,
  } = formData;

  useEffect(() => {
    getStudents();
    getClasses();
  }, [getClasses, getStudents]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createReport(formData);
    setFormData({
      term: '',
      total: '',
      name: '',
      position_or_grade: '',
      gender: '',
      teacher_remark: '',
      class_admitted: '',
      head_teacher_remark: '',
    });
  };

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
            <h2>Create Student Report Details</h2>
            <div className='staff'>
              <div className='staff-form active'>
                <form onSubmit={onSubmit}>
                  <div className='form-card'>
                    <div className='form-group'>
                      <label htmlFor='term'>Term</label>
                      <input
                        type='text'
                        placeholder='Term'
                        name='term'
                        value={term}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='total'>Total</label>
                      <input
                        type='text'
                        placeholder='Total'
                        name='total'
                        value={total}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='surname'>Name</label>
                      <select
                        name='name'
                        value={name}
                        onChange={onChange}
                        required
                      >
                        <option value='0'>* Select</option>
                        {students.map((student) => (
                          <option
                            key={student._id}
                            value={`${student.surName} ${student.lastName}`}
                          >
                            {`${student.surName} ${student.lastName}`}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='positionorgrade'>Position or Grade</label>
                      <input
                        type='text'
                        placeholder='Total'
                        name='position_or_grade'
                        value={position_or_grade}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='middlename'>Gender</label>
                      <select
                        name='gender'
                        value={gender}
                        onChange={onChange}
                        required
                      >
                        <option value='0'>* Select</option>
                        <option value='male'>Male</option>
                        <option value='Female'>Female</option>
                      </select>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='teacherremark'>Teacher Remark</label>
                      <input
                        type='text'
                        placeholder='Teacher Remark'
                        name='teacher_remark'
                        value={teacher_remark}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='className'>Class</label>
                      <select
                        name='class_admitted'
                        value={class_admitted}
                        onChange={onChange}
                        required
                      >
                        <option value='0'>* Select</option>
                        {classes.map((c) => (
                          <option key={c._id} value={c.class_admitted}>
                            {c.class_admitted}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='headteacherremark'>
                        Head Teacher Remark
                      </label>
                      <input
                        type='text'
                        placeholder='Head Teacher Remark'
                        name='head_teacher_remark'
                        value={head_teacher_remark}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                  <input
                    type='submit'
                    value='Create Report'
                    className='btn mt-1'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Report.propTypes = {
  students: PropTypes.array,
  classes: PropTypes.array,
  getClasses: PropTypes.func.isRequired,
  getStudents: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  classes: state.class_.classes,
  students: state.student.students,
});

export default connect(mapStateToProps, {
  createReport,
  getStudents,
  getClasses,
})(Report);
