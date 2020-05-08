import React, { Fragment, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { filterStudent, getStudents } from '../../../action/student';

// Component
import Spinner from '../../layout/Spinner';
import ProfileStudentItem from './profile.studentItem';

const ProfileStudent = ({
  filterStudent,
  getStudents,
  student: { students, filtered, loading },
}) => {
  const text = useRef('');

  useEffect(() => {
    getStudents();
  }, [getStudents]);

  const onChange = (e) => {
    filterStudent(e.target.value);
  };

  const getAllStudent =
    filtered !== null
      ? filtered.map((student) => (
          <ProfileStudentItem key={student._id} student={student} />
        ))
      : students.map((student) => (
          <ProfileStudentItem key={student._id} student={student} />
        ));
  return (
    <Fragment>
      <div className='staff'>
        <div className='staff-form' id='retstu'>
          <div className='display-card'>
            <div className='dashboard-space pb-1'>
              <div className='flex'>
                <input
                  type='search'
                  placeholder='Search...'
                  className='search'
                  ref={text}
                  onChange={onChange}
                />
              </div>
              <ReactHTMLTableToExcel
                className='btn'
                table='student'
                filename='ParentExcel'
                sheet='Sheet'
                buttonText='Export to Excel'
              />
            </div>
            {students !== null && !loading ? (
              <table id='student' className='table'>
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Gender</th>
                    <th>Date Of Birth</th>
                    <th>Class</th>
                    <th>Home Address</th>
                    <th>Emergency Phone No</th>
                    <th>Date of Registration</th>
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

ProfileStudent.propTypes = {
  student: PropTypes.object.isRequired,
  getStudents: PropTypes.func.isRequired,
  filterStudent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps, {
  filterStudent,
  getStudents,
})(ProfileStudent);
