import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterClass, getStudents } from '../../../action/student';
import { getStaff, getStaffName } from '../../../action/staff';
import CreateClassItem from './createClassItem';
import Spinner from '../../layout/Spinner';

const CreateClass = ({
  getStudents,
  student: { students, filtered, loading },
  staff: { name },
  class_: { classes },
  filterClass,
  getStaff,
  getStaffName,
}) => {
  const staffName =
    name !== null &&
    name.map((staff) => (
      <Fragment key={staff._id}>
        {`${staff.surName} ${staff.lastName}`}
      </Fragment>
    ));

  const onChangeFilter = (e) => {
    filterClass(e.target.value);

    getStaffName(e.target.value);
  };

  const getAllStudent =
    filtered !== null
      ? filtered.map((student) => (
          <CreateClassItem key={student._id} student={student} />
        ))
      : students.map((student) => (
          <CreateClassItem key={student._id} student={student} />
        ));

  useEffect(() => {
    getStudents();
    getStaff();
  }, [getStudents, getStaff]);

  return (
    <Fragment>
      <div className='staff'>
        <div className='staff-form' id='createclass'>
          <div className='display-card'>
            <div className='dropdown pb-1'>
              <select onChange={onChangeFilter}>
                <option value=''>All</option>
                {classes.map((c) => (
                  <option key={c._id} value={c.class_admitted}>
                    {c.class_admitted}
                  </option>
                ))}
              </select>
            </div>
            <div className='details'>
              <label htmlFor=''>Teacher's Name: </label>
              <p>{staffName}</p>
            </div>

            {students !== null && !loading ? (
              <table id='student' className='table'>
                <thead>
                  <tr>
                    <th>Surname</th>
                    <th>Middlename</th>
                    <th>Lastname</th>
                    <th>Gender</th>
                    <th>Date Of Birth</th>
                    <th>Class</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>{getAllStudent}</tbody>
              </table>
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

CreateClass.propTypes = {
  student: PropTypes.object.isRequired,
  staff: PropTypes.object.isRequired,
  class_: PropTypes.object.isRequired,
  getStudents: PropTypes.func.isRequired,
  filterClass: PropTypes.func.isRequired,
  getStaff: PropTypes.func.isRequired,
};

const mapToStateToProps = (state) => ({
  student: state.student,
  staff: state.staff,
  class_: state.class_,
});

export default connect(mapToStateToProps, {
  filterClass,
  getStudents,
  getStaff,
  getStaffName,
})(CreateClass);
