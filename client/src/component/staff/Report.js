import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStudents } from '../../action/student';
import { getClasses } from '../../action/class';
import { createReport } from '../../action/report';

import Navbar from './layout/Navbar';
import Alert from '../layout/Alert';

const Report = ({
  class_: { classes },
  student: { students },
  getStudents,
  getClasses,
  createReport,
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

  useEffect(() => {
    getClasses();
    getStudents();
  }, [getClasses, getStudents]);

  return (
    <Fragment>
      <Navbar />
      <div className='profile'>
        <div className='profile-card'>
          <Alert />
          <h2 className='py-1 text-center'>Create Student Report Details</h2>
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
                <label htmlFor='name'>Name</label>
                <select name='name' value={name} onChange={onChange} required>
                  <option value=''>Select</option>
                  {students.map((student) => (
                    <option
                      key={student._id}
                      value={`${student.surName} ${student.lastName}`}
                    >{`${student.surName} ${student.lastName}`}</option>
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
                  <option value=''>Select</option>
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
                  <option value=''>Select</option>
                  {classes.map((c) => (
                    <option key={c._id} value={c.class_admitted}>
                      {c.class_admitted}
                    </option>
                  ))}
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='headteacherremark'>Head Teacher Remark</label>
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
            <input type='submit' value='Create Report' className='btn mt-1' />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Report.propTypes = {
  class_: PropTypes.object.isRequired,
  student: PropTypes.object.isRequired,
  getStudents: PropTypes.func,
  getClasses: PropTypes.func,
  createReport: PropTypes.func,
};

const mapStateToProps = (state) => ({
  class_: state.class_,
  student: state.student,
});

export default connect(mapStateToProps, {
  getClasses,
  getStudents,
  createReport,
})(Report);
