import {
  CREATE_STAFF,
  GET_STAFF,
  GET_STAFFNAME,
  UPDATE_STAFF,
  SET_CURRENT,
  FILTER_STAFF,
  STAFF_ERROR,
} from './types';
import axios from 'axios';
import { setAlert } from './alert';

export const getStaff = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/staff');

    dispatch({
      type: GET_STAFF,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: STAFF_ERROR,
    });
  }
};

export const createStaff = ({
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
  class_assigned,
  nok_surName,
  nok_middleName,
  nok_lastName,
  nok_gender,
  nok_email,
  nok_phonenumber1,
  nok_phonenumber2,
  nok_houseaddress,
  nok_relationship,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  let formData = new FormData();
  formData.append('image', file);
  formData.append('surName', surName);
  formData.append('middleName', middleName);
  formData.append('lastName', lastName);
  formData.append('gender', gender);
  formData.append('date_of_birth', date_of_birth);
  formData.append('house_address', house_address);
  formData.append('phoneNumber1', phoneNumber1);
  formData.append('phoneNumber2', phoneNumber2);
  formData.append('email', email);
  formData.append('place_of_birth', place_of_birth);
  formData.append('religion', religion);
  formData.append('nationality', nationality);
  formData.append('state_of_origin', state_of_origin);
  formData.append('date_of_employment', date_of_employment);
  formData.append('date_of_registration', date_of_registration);
  formData.append('qualification', qualification);
  formData.append('course_of_study', course_of_study);
  formData.append('staff_type', staff_type);
  formData.append('class_assigned', class_assigned);
  formData.append('nok_surName', nok_surName);
  formData.append('nok_middleName', nok_middleName);
  formData.append('nok_lastName', nok_lastName);
  formData.append('nok_gender', nok_gender);
  formData.append('nok_email', nok_email);
  formData.append('nok_phonenumber1', nok_phonenumber1);
  formData.append('nok_phonenumber2', nok_phonenumber2);
  formData.append('nok_houseaddress', nok_houseaddress);
  formData.append('nok_relationship', nok_relationship);

  try {
    const res = await axios.post('/api/staff', formData, config);

    dispatch({
      type: CREATE_STAFF,
      payload: res.data.data,
    });

    dispatch(setAlert('Staff Created Successfully', 'success'));
  } catch (err) {
    const errors = err.response.data.msg;

    if (errors === 'File too large') {
      dispatch(setAlert(errors, 'danger'));
    } else {
      dispatch(setAlert(errors, 'danger'));
    }

    dispatch({
      type: STAFF_ERROR,
      payload: err.response.data.msg,
    });
  }
};

export const updateStaff = (staff) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(`/api/staff/${staff.id}`, staff, config);

    dispatch({
      type: UPDATE_STAFF,
      payload: res.data.data,
    });

    dispatch(setAlert('Record Updated Successfully', 'success'));
  } catch (err) {
    dispatch({
      type: STAFF_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const assignStaffToClass = (staff) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(`/api/staff/assign/${staff.id}`, staff, config);

    dispatch({
      type: UPDATE_STAFF,
      payload: res.data.data,
    });

    dispatch(setAlert('Staff Assigned Successfully', 'success'));
  } catch (err) {
    dispatch({
      type: STAFF_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const getCurrentStaff = (staff) => async (dispatch) => {
  dispatch({ type: SET_CURRENT, payload: staff });
};

export const filterStaff = (text) => (dispatch) => {
  dispatch({ type: FILTER_STAFF, payload: text });
};

export const getStaffName = (text) => (dispatch) => {
  dispatch({ type: GET_STAFFNAME, payload: text });
};
