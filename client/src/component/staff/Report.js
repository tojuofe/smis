import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStudents } from '../../action/student';
import { getClasses, getSubject } from '../../action/class';
import { createReport } from '../../action/report';

import Navbar from './layout/Navbar';
import Alert from '../layout/Alert';

const Report = ({
  class_: { classes, subjects },
  student: { students },
  user,
  getStudents,
  getClasses,
  getSubject,
  createReport,
}) => {
  const [formData, setFormData] = useState({
    term: '',
    total: '',
    subject: '',
    gender: '',
    teacher_remark: '',
    class_admitted: '',
    head_teacher_remark: '',
  });

  const {
    term,
    name,
    subject,
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
      subject: '',
      gender: '',
      teacher_remark: '',
      class_admitted: '',
      head_teacher_remark: '',
    });
  };

  useEffect(() => {
    getClasses();
    getStudents();
    getSubject();
  }, [getClasses, getStudents, getSubject]);

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
                <select name='term' value={term} onChange={onChange}>
                  <option>-- Select --</option>
                  <option value='1st'>1st</option>
                  <option value='2nd'>2nd</option>
                  <option value='3rd'>3rd</option>
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='total'>Subject</label>
                <select
                  name='subject'
                  value={subject}
                  className='form-input'
                  onChange={onChange}
                >
                  <option>-- Select --</option>
                  {subjects.map((s) => (
                    <option key={s._id} value={s.subject}>
                      {s.subject}
                    </option>
                  ))}
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <select name='name' value={name} onChange={onChange} required>
                  <option value=''>Select</option>
                  {students
                    .filter(
                      (student) =>
                        user && user.class_assigned === student.class_admitted
                    )
                    .map((student) => (
                      <option
                        key={student._id}
                        value={
                          user &&
                          user.class_assigned === student.class_admitted &&
                          `${student.surName} ${student.lastName}`
                        }
                      >
                        {user &&
                          user.class_assigned === student.class_admitted &&
                          `${student.surName} ${student.lastName}`}
                      </option>
                    ))}
                </select>
              </div>
              <div className='form-group'></div>
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
  getSubject: PropTypes.func,
};

const mapStateToProps = ({ class_, student, auth: { user } }) => ({
  class_,
  student,
  user,
});

export default connect(mapStateToProps, {
  getClasses,
  getStudents,
  createReport,
  getSubject,
})(Report);
