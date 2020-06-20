import React, { Fragment, useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { createStudent } from '../../../action/student';
import { getClasses } from '../../../action/class';
import PropTypes from 'prop-types';

// Component
import NavSm from '../navs/nav-sm';
import Navlg from '../navs/nav-lg';
import Alert from '../../layout/Alert';
import tabControl, { toggleNav, alertScroll } from '../../js/main.js';
import StudentView from './studentView';
import Promote from './promote';
import View from './view';
import StudentEdit from './studentEdit';

const Student = ({ classes, createStudent, getClasses }) => {
  const [image, setFile] = useState('');
  const [surName, setSurName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [date_of_birth, setDateofBirth] = useState('');
  const [house_address, setHouseAddress] = useState('');
  const [place_of_birth, setPlaceofBirth] = useState('');
  const [religion, setReligion] = useState('');
  const [nationality, setNationality] = useState('');
  const [state_of_origin, setStateofOrigin] = useState('');
  const [emergency_contact, setEmergencyContact] = useState('');
  const [class_admitted, setClassAdmitted] = useState('');
  const [date_of_registration, setDateofRegistration] = useState('');
  const [pgi_surName, setpgiSurName] = useState('');
  const [pgi_middleName, setpgiMiddleName] = useState('');
  const [pgi_lastName, setpgiLastName] = useState('');
  const [pgi_occupation, setpgiOccupation] = useState('');
  const [pgi_email, setpgiEmail] = useState('');
  const [pgi_phoneNumber1, setpgiPhoneNumber1] = useState('');
  const [pgi_phoneNumber2, setpgiPhoneNumber2] = useState('');
  const [pgi_house_address, setpgiHouseAddress] = useState('');
  const [pgi_work_address, setpgiWorkAddress] = useState('');

  useEffect(() => {
    getClasses();
    tabControl();
  }, [getClasses]);

  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    createStudent({
      image,
      surName,
      middleName,
      lastName,
      gender,
      date_of_birth,
      house_address,
      place_of_birth,
      religion,
      nationality,
      state_of_origin,
      emergency_contact,
      class_admitted,
      date_of_registration,
      pgi_surName,
      pgi_middleName,
      pgi_lastName,
      pgi_occupation,
      pgi_email,
      pgi_phoneNumber1,
      pgi_phoneNumber2,
      pgi_house_address,
      pgi_work_address,
    });

    inputRef.current.value = '';
    setFile(null);
    setSurName('');
    setMiddleName('');
    setLastName('');
    setGender('');
    setDateofBirth('');
    setHouseAddress('');
    setPlaceofBirth('');
    setReligion('');
    setNationality('');
    setStateofOrigin('');
    setEmergencyContact('');
    setClassAdmitted('');
    setDateofRegistration('');
    setpgiSurName('');
    setpgiMiddleName('');
    setpgiLastName('');
    setpgiOccupation('');
    setpgiEmail('');
    setpgiPhoneNumber1('');
    setpgiPhoneNumber2('');
    setpgiHouseAddress('');
    setpgiWorkAddress('');

    alertScroll();
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
            <div className='student'>
              <div className='student-btn lg-hide'>
                <button className='btnclick active' data-id='newstu'>
                  NEW STUDENT
                </button>
                <button className='btnclick' data-id='retstu'>
                  VIEW STUDENT
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
                          value={gender}
                          name='gender'
                          required
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value=''>* Select</option>
                          <option value='Male'>Male</option>
                          <option value='Female'>Female</option>
                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='date_of_birth'>Date of Birth</label>
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
                        <label htmlFor='placeofbirth'>Place of Birth</label>
                        <input
                          type='text'
                          placeholder='Place Of Birth'
                          name='place_of_birth'
                          value={place_of_birth}
                          required
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
                          onChange={(e) => setStateofOrigin(e.target.value)}
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='emergencycontact'>
                          Emergency Phone Number
                        </label>
                        <input
                          type='text'
                          placeholder='Emergency Phone Number'
                          name='emergency_contact'
                          value={emergency_contact}
                          onChange={(e) => setEmergencyContact(e.target.value)}
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='class_admitted'>
                          Class admitted into
                        </label>
                        <select
                          name='class_admitted'
                          value={class_admitted}
                          onChange={(e) => setClassAdmitted(e.target.value)}
                          required
                        >
                          <option value='0'>* Select</option>
                          {classes.map((c) => (
                            <option key={c._id} value={`${c.class_admitted}`}>
                              {c.class_admitted}
                            </option>
                          ))}
                        </select>
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
                          onChange={(e) =>
                            setDateofRegistration(e.target.value)
                          }
                          required
                        />
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
                    <h2 className='py-1'>Parent / Guardian Information</h2>
                    <div className='form-card'>
                      <div className='form-group'>
                        <label htmlFor='firstname'>Firstname</label>
                        <input
                          type='text'
                          placeholder='Firstname'
                          name='pgi_surName'
                          value={pgi_surName}
                          onChange={(e) => setpgiSurName(e.target.value)}
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='middlename'>Middlename</label>
                        <input
                          type='text'
                          placeholder='Middle name'
                          name='pgi_middleName'
                          value={pgi_middleName}
                          onChange={(e) => setpgiMiddleName(e.target.value)}
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='lastname'>Lastname</label>
                        <input
                          type='text'
                          placeholder='Lastname'
                          name='pgi_lastName'
                          value={pgi_lastName}
                          onChange={(e) => setpgiLastName(e.target.value)}
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='occupation'>Occupation</label>
                        <input
                          type='text'
                          placeholder='Occupation'
                          name='pgi_occupation'
                          value={pgi_occupation}
                          onChange={(e) => setpgiOccupation(e.target.value)}
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                          type='email'
                          placeholder='Email Address'
                          name='pgi_email'
                          value={pgi_email}
                          onChange={(e) => setpgiEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='phonenumber'>Phone Number 1</label>
                        <input
                          type='text'
                          placeholder='Phone Number 1'
                          name='pgi_phoneNumber1'
                          value={pgi_phoneNumber1}
                          onChange={(e) => setpgiPhoneNumber1(e.target.value)}
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='phonenumber'>Phone Number 2</label>
                        <input
                          type='text'
                          placeholder='Phone Number 2'
                          name='pgi_phoneNumber2'
                          value={pgi_phoneNumber2}
                          onChange={(e) => setpgiPhoneNumber2(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='houseaddress'>House Address</label>
                        <input
                          type='text'
                          placeholder='House Address'
                          name='pgi_house_address'
                          value={pgi_house_address}
                          onChange={(e) => setpgiHouseAddress(e.target.value)}
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='workaddress'>Work Address</label>
                        <input
                          type='text'
                          placeholder='Work Address'
                          name='pgi_work_address'
                          value={pgi_work_address}
                          onChange={(e) => setpgiWorkAddress(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <input type='submit' value='Submit' className='btn mt-1' />
                  </form>
                </div>
              </div>
              <StudentView />
            </div>
            <Promote />
            <View />
            <StudentEdit />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Student.propTypes = {
  classes: PropTypes.array,
  createStudent: PropTypes.func.isRequired,
  getClasses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  classes: state.class_.classes,
});

export default connect(mapStateToProps, { createStudent, getClasses })(Student);
