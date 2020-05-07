import React, { Fragment, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { filterParent, getParent } from '../../../action/parent';
import PropTypes from 'prop-types';

// Component
import Spinner from '../../layout/Spinner';

const ProfileParent = ({
  filterParent,
  parent: { parents, filtered, loading },
  getParent,
}) => {
  const text = useRef('');

  useEffect(() => {
    getParent();
  }, [getParent]);

  const onChange = (e) => {
    filterParent(e.target.value);
  };

  const getAllParent =
    filtered !== null
      ? filtered.map((p) => (
          <tr key={p._id}>
            <td data-label='Full Name'>{`${p.parent_guardian_info.pgi_surName} ${p.parent_guardian_info.pgi_middleName} ${p.parent_guardian_info.pgi_lastName}`}</td>
            <td data-label='Occupation'>
              {p.parent_guardian_info.pgi_occupation}
            </td>
            <td data-label='Email'>{p.parent_guardian_info.pgi_email}</td>
            <td data-label='Phone Number1'>
              {p.parent_guardian_info.pgi_phoneNumber1}
            </td>
            <td data-label='Phonoe Number2'>
              {p.parent_guardian_info.pgi_phoneNumber2}
            </td>
            <td data-label='House Address'>
              {p.parent_guardian_info.pgi_house_address}
            </td>
            <td data-label='Work Address'>
              {p.parent_guardian_info.pgi_work_address}
            </td>
          </tr>
        ))
      : parents.map((p) => (
          <tr key={p._id}>
            <td data-label='Full Name'>{`${p.parent_guardian_info.pgi_surName} ${p.parent_guardian_info.pgi_middleName} ${p.parent_guardian_info.pgi_lastName}`}</td>
            <td data-label='Occupation'>
              {p.parent_guardian_info.pgi_occupation}
            </td>
            <td data-label='Email'>{p.parent_guardian_info.pgi_email}</td>
            <td data-label='Phone Number1'>
              {p.parent_guardian_info.pgi_phoneNumber1}
            </td>
            <td data-label='Phonoe Number2'>
              {p.parent_guardian_info.pgi_phoneNumber2}
            </td>
            <td data-label='House Address'>
              {p.parent_guardian_info.pgi_house_address}
            </td>
            <td data-label='Work Address'>
              {p.parent_guardian_info.pgi_work_address}
            </td>
          </tr>
        ));

  return (
    <Fragment>
      <div className='staff'>
        <div className='staff-form active' id='newstu'>
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
                table='parent'
                filename='ParentExcel'
                sheet='Sheet'
                buttonText='Export to Excel'
              />
            </div>
            {parents !== null && !loading ? (
              <table id='parent' className='table'>
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Occupation</th>
                    <th>Email</th>
                    <th>Phone One</th>
                    <th>Phone Two</th>
                    <th>Home Address</th>
                    <th>Work Address</th>
                  </tr>
                </thead>
                <tbody>{getAllParent}</tbody>
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

ProfileParent.propTypes = {
  parent: PropTypes.object.isRequired,
  filterParent: PropTypes.func.isRequired,
  getParent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  parent: state.parent,
});

export default connect(mapStateToProps, { filterParent, getParent })(
  ProfileParent
);
