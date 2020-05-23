import {
  CREATE_STUDENT,
  GET_STUDENTS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_STUDENT,
  FILTER_STUDENT,
  FILTER_CLASS,
  STUDENT_ERROR,
  CREATE_RE_STUDENT,
  RE_STUDENT_ERROR,
  PROMOTE_STUDENT,
} from './types';
import axios from 'axios';
import { setAlert } from './alert';

export const getStudents = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/student');

    dispatch({
      type: GET_STUDENTS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: STUDENT_ERROR,
    });
  }
};

export const createStudent = ({
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
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  try {
    let formData = new FormData();
    formData.append('image', image);
    formData.append('surName', surName);
    formData.append('middleName', middleName);
    formData.append('lastName', lastName);
    formData.append('gender', gender);
    formData.append('date_of_birth', date_of_birth);
    formData.append('house_address', house_address);
    formData.append('place_of_birth', place_of_birth);
    formData.append('religion', religion);
    formData.append('nationality', nationality);
    formData.append('state_of_origin', state_of_origin);
    formData.append('emergency_contact', emergency_contact);
    formData.append('class_admitted', class_admitted);
    formData.append('date_of_registration', date_of_registration);
    formData.append('pgi_surName', pgi_surName);
    formData.append('pgi_middleName', pgi_middleName);
    formData.append('pgi_lastName', pgi_lastName);
    formData.append('pgi_occupation', pgi_occupation);
    formData.append('pgi_email', pgi_email);
    formData.append('pgi_phoneNumber1', pgi_phoneNumber1);
    formData.append('pgi_phoneNumber2', pgi_phoneNumber2);
    formData.append('pgi_house_address', pgi_house_address);
    formData.append('pgi_work_address', pgi_work_address);

    const res = await axios.post('/api/student', formData, config);

    dispatch({
      type: CREATE_STUDENT,
      payload: res.data.data,
    });
    console.log(res.data.data);
    dispatch(setAlert('Student Created Successfully', 'success'));
  } catch (err) {
    const errors = err.response.data.msg;

    if (errors === 'File too large') {
      dispatch(setAlert(errors, 'danger'));
    } else {
      dispatch(setAlert(errors, 'danger'));
    }

    dispatch({
      type: STUDENT_ERROR,
      payload: err.response.data.msg,
    });
  }
};

export const createReStudent = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/student/rStudent', formData, config);

    dispatch({
      type: CREATE_RE_STUDENT,
      payload: res.data.data,
    });

    dispatch(setAlert('Student Created Successfully', 'success'));
  } catch (err) {
    const errors = err.response.data.error;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error, 'danger')));
    }
    dispatch({
      type: RE_STUDENT_ERROR,
      payload: errors,
    });
  }
};

export const promoteStudent = (student) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(
      `/api/student/user/${student.id}`,
      student,
      config
    );

    dispatch({
      type: PROMOTE_STUDENT,
      payload: res.data.data,
    });

    dispatch(setAlert('Student Promoted Successfully', 'success'));
  } catch (err) {
    dispatch({
      type: STUDENT_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const editStudent = (student) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(`/api/student/${student.id}`, student, config);

    dispatch({
      type: UPDATE_STUDENT,
      payload: res.data.data,
    });

    dispatch(setAlert('Record Updated Successfully', 'success'));
  } catch (err) {
    dispatch({
      type: STUDENT_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const getCurrentStudent = (student) => async (dispatch) => {
  dispatch({ type: SET_CURRENT, payload: student });
};

// CLEAR CURRENT STUDENT
export const clearCurrentStudent = () => async (dispatch) => {
  dispatch({ type: CLEAR_CURRENT });
};

export const filterStudent = (text) => (dispatch) => {
  dispatch({ type: FILTER_STUDENT, payload: text });
};

export const filterClass = (text) => (dispatch) => {
  dispatch({ type: FILTER_CLASS, payload: text });
};
