import React, { Fragment, useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { createStaff, getStaff, filterStaff } from '../../../action/staff';
import PropTypes from 'prop-types';

// Component
import NavSm from '../navs/nav-sm';
import Navlg from '../navs/nav-lg';
import Alert from '../../layout/Alert';
import tabControl from '../../js/main';
import { toggleNav, alertScroll } from '../../js/main';
import Spinner from '../../layout/Spinner';
import StaffEdit from './staffEdit';
import StaffView from './staffView';
import StaffItem from './staffItem';

const Staff = ({
  createStaff,
  getStaff,
  filterStaff,
  staff: { staffs, loading, filtered },
}) => {
  const [file, setFile] = useState('');
  const [surName, setSurName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [date_of_birth, setDateofBirth] = useState('');
  const [house_address, setHouseAddress] = useState('');
  const [phoneNumber1, setPhoneNumber1] = useState('');
  const [phoneNumber2, setPhoneNumber2] = useState('');
  const [email, setEmail] = useState('');
  const [place_of_birth, setPlaceofBirth] = useState('');
  const [religion, setReligion] = useState('');
  const [nationality, setNationality] = useState('');
  const [state_of_origin, setStateofOrigin] = useState('');
  const [date_of_employment, setDateofEmployment] = useState('');
  const [date_of_registration, setDateofRegistration] = useState('');
  const [qualification, setQualification] = useState('');
  const [course_of_study, setCourseofStudy] = useState('');
  const [staff_type, setStaffType] = useState('');
  const [nok_surName, setnokSurName] = useState('');
  const [nok_middleName, setnokMiddleName] = useState('');
  const [nok_lastName, setnokLastName] = useState('');
  const [nok_gender, setnokGender] = useState('');
  const [nok_email, setnokEmail] = useState('');
  const [nok_phonenumber1, setnokPhonenumber1] = useState('');
  const [nok_phonenumber2, setnokPhonenumber2] = useState('');
  const [nok_houseaddress, setnokHouseAddress] = useState('');
  const [nok_relationship, setnokRelationship] = useState('');

  const text = useRef('');
  const inputRef = useRef();

  const onChangeFilter = (e) => {
    filterStaff(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createStaff({
      file,
      surName,
      middleName,
      lastName,
      gender,
      date_of_birth,
      house_address,
      phoneNumber1,
      phoneNumber2,
      email,
      place_of_birth,
      religion,
      nationality,
      state_of_origin,
      date_of_employment,
      date_of_registration,
      qualification,
      course_of_study,
      staff_type,
      class_assigned: '',
      nok_surName,
      nok_middleName,
      nok_lastName,
      nok_gender,
      nok_email,
      nok_phonenumber1,
      nok_phonenumber2,
      nok_houseaddress,
      nok_relationship,
    });

    inputRef.current.value = '';
    setFile(null);
    setSurName('');
    setMiddleName('');
    setLastName('');
    setGender('');
    setDateofBirth('');
    setHouseAddress('');
    setPhoneNumber1('');
    setPhoneNumber2('');
    setEmail('');
    setPlaceofBirth('');
    setReligion('');
    setNationality('');
    setStateofOrigin('');
    setDateofEmployment('');
    setDateofRegistration('');
    setQualification('');
    setCourseofStudy('');
    setStaffType('');
    setnokSurName('');
    setnokMiddleName('');
    setnokLastName('');
    setnokGender('');
    setnokEmail('');
    setnokPhonenumber1('');
    setnokPhonenumber2('');
    setnokHouseAddress('');
    setnokRelationship('');

    alertScroll();
  };

  useEffect(() => {
    tabControl();
    getStaff();
  }, [getStaff]);

  const getAllStaff =
    filtered !== null
      ? filtered.map((staff) => <StaffItem key={staff._id} staff={staff} />)
      : staffs.map((staff) => <StaffItem key={staff._id} staff={staff} />);

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
                  NEW STAFF
                </button>
                <button className='btnclick' data-id='retstu'>
                  VIEW STAFF
                </button>
              </div>
              <div className='staff'>
                <div className='staff-form active' id='newstu'>
                  <form onSubmit={onSubmit}>
                    <div className='form-card'>
                      <div className='form-group'>
                        <label htmlFor='firstname'>Firstname</label>
                        <input
                          type='text'
                          placeholder='Firstname'
                          name='surName'
                          value={surName}
                          required
                          onChange={(e) => setSurName(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='middlename'>Middlename</label>
                        <input
                          type='text'
                          placeholder='Middlename'
                          name='middleName'
                          value={middleName}
                          required
                          onChange={(e) => setMiddleName(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='lastname'>Lastname</label>
                        <input
                          type='text'
                          placeholder='Lastname'
                          name='lastName'
                          value={lastName}
                          required
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='gender'>Gender</label>
                        <select
                          name='gender'
                          value={gender}
                          required
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value='0'>* Select</option>
                          <option value='Male'>Male</option>
                          <option value='Female'>Female</option>
                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='dateofbirth'>Date of Birth</label>
                        <input
                          type='date'
                          name='date_of_birth'
                          value={date_of_birth}
                          onChange={(e) => setDateofBirth(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='houseaddress'>House Address</label>
                        <input
                          type='text'
                          placeholder='House Address'
                          name='house_address'
                          value={house_address}
                          required
                          onChange={(e) => setHouseAddress(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='phonenumber'>Phone Number 1</label>
                        <input
                          type='number'
                          placeholder='Phone Number 1'
                          name='phoneNumber1'
                          value={phoneNumber1}
                          required
                          onChange={(e) => setPhoneNumber1(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='phonenumber'>Phone Number 2</label>
                        <input
                          type='number'
                          placeholder='Phone Number 2'
                          name='phoneNumber2'
                          value={phoneNumber2}
                          onChange={(e) => setPhoneNumber2(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='email'>Email </label>
                        <input
                          type='email'
                          placeholder='Email Address'
                          name='email'
                          value={email}
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='placeofbirth'>Place of Birth</label>
                        <input
                          type='text'
                          placeholder='Place Of Birth'
                          name='place_of_birth'
                          value={place_of_birth}
                          onChange={(e) => setPlaceofBirth(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='religion'>Religion</label>
                        <input
                          type='text'
                          placeholder='Religion'
                          name='religion'
                          value={religion}
                          onChange={(e) => setReligion(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='nationality'>Nationality</label>
                        <input
                          type='text'
                          placeholder='Nationality'
                          name='nationality'
                          value={nationality}
                          required
                          onChange={(e) => setNationality(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='stateoforigin'>State of Origin</label>
                        <input
                          type='text'
                          placeholder='State of Origin'
                          name='state_of_origin'
                          value={state_of_origin}
                          required
                          onChange={(e) => setStateofOrigin(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='dateofemployment'>
                          Date of Employment
                        </label>
                        <input
                          type='date'
                          placeholder='Date of Employment'
                          name='date_of_employment'
                          value={date_of_employment}
                          required
                          onChange={(e) => setDateofEmployment(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='dateofregistration'>
                          Date of Registration
                        </label>
                        <input
                          type='date'
                          placeholder='Date of Registration'
                          name='date_of_registration'
                          value={date_of_registration}
                          required
                          onChange={(e) =>
                            setDateofRegistration(e.target.value)
                          }
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='qualification'>Qualification</label>
                        <input
                          type='text'
                          placeholder='Qualification'
                          name='qualification'
                          value={qualification}
                          required
                          onChange={(e) => setQualification(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Course of Study'>Course of Study</label>
                        <input
                          type='text'
                          placeholder='Course of Study'
                          name='course_of_study'
                          value={course_of_study}
                          required
                          onChange={(e) => setCourseofStudy(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='staff type'>Staff Type</label>
                        <select
                          name='staff_type'
                          value={staff_type}
                          required
                          onChange={(e) => setStaffType(e.target.value)}
                        >
                          <option value=''>* Select</option>
                          <option value='Teaching'>Teaching</option>
                          <option value='Non-Teaching'>Non-Teaching</option>
                          <option value='Both'>Both</option>
                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='choose image'>Choose Image</label>
                        <input
                          type='file'
                          name='image'
                          onChange={(e) => setFile(e.target.files[0])}
                          ref={inputRef}
                          required
                        />
                        <small>Image should be less than 500kb</small>
                      </div>
                    </div>
                    <h2 className='py-1'>Next of Kin</h2>
                    <div className='form-card'>
                      <div className='form-group'>
                        <label htmlFor='firstname'>Firstname</label>
                        <input
                          type='text'
                          placeholder='Firstname'
                          name='nok_surName'
                          value={nok_surName}
                          required
                          onChange={(e) => setnokSurName(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='middlename'>Middlename</label>
                        <input
                          type='text'
                          placeholder='Middlename'
                          name='nok_middleName'
                          value={nok_middleName}
                          required
                          onChange={(e) => setnokMiddleName(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='lastname'>Lastname</label>
                        <input
                          type='text'
                          placeholder='Lastname'
                          name='nok_lastName'
                          value={nok_lastName}
                          required
                          onChange={(e) => setnokLastName(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='gender'>Gender</label>
                        <select
                          name='nok_gender'
                          value={nok_gender}
                          required
                          onChange={(e) => setnokGender(e.target.value)}
                        >
                          <option value='0'>* Select</option>
                          <option value='Male'>Male</option>
                          <option value='Female'>Female</option>
                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                          type='email'
                          placeholder='Email Address'
                          name='nok_email'
                          value={nok_email}
                          required
                          onChange={(e) => setnokEmail(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='phonenumber'>Phone Number 1</label>
                        <input
                          type='number'
                          placeholder='Phone Number 1'
                          name='nok_phonenumber1'
                          value={nok_phonenumber1}
                          required
                          onChange={(e) => setnokPhonenumber1(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='phonenumber'>Phone Number 2</label>
                        <input
                          type='number'
                          placeholder='Phone Number 2'
                          name='nok_phonenumber2'
                          value={nok_phonenumber2}
                          onChange={(e) => setnokPhonenumber2(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='houseaddress'>House Address</label>
                        <input
                          type='text'
                          placeholder='House Address'
                          name='nok_houseaddress'
                          value={nok_houseaddress}
                          required
                          onChange={(e) => setnokHouseAddress(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='relationship'>Relationship</label>
                        <input
                          type='text'
                          placeholder='Relationship'
                          name='nok_relationship'
                          value={nok_relationship}
                          required
                          onChange={(e) => setnokRelationship(e.target.value)}
                        />
                      </div>
                    </div>
                    <input
                      type='submit'
                      value='Create Staff'
                      className='btn mt-1'
                    />
                  </form>
                </div>
              </div>

              <div className='staff'>
                <div className='staff-form' id='retstu'>
                  <div className='display card'>
                    <div className='dashboard-space pb-1'>
                      <div className='flex'>
                        <input
                          type='search'
                          ref={text}
                          placeholder='Search...'
                          className='search'
                          onChange={onChangeFilter}
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
                            <th>Full Name</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Phone No</th>
                            <th>Email</th>
                            <th>Date of Registration</th>
                            <th>Date of Employment</th>
                            <th>Qualification</th>
                            <th>Course of Study</th>
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
            <StaffView />
            <StaffEdit />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Staff.propTypes = {
  staff: PropTypes.object.isRequired,
  createStaff: PropTypes.func.isRequired,
  getStaff: PropTypes.func.isRequired,
  filterStaff: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  staff: state.staff,
});

export default connect(mapStateToProps, { createStaff, getStaff, filterStaff })(
  Staff
);
