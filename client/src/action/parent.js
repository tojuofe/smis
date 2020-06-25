import {
  GET_PARENT,
  FILTER_PARENT,
  PARENT_ERROR,
  GET_STUDENT_RESULT,
} from './types';
import axios from 'axios';
import { setAlert } from './alert';

export const getParent = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/student');

    dispatch({
      type: GET_PARENT,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: PARENT_ERROR,
      payload: err,
    });
  }
};

export const getStudentResult = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/student/result', formData, config);

    dispatch({
      type: GET_STUDENT_RESULT,
      payload: res.data.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PARENT_ERROR,
      payload: errors,
    });
  }
};

export const filterParent = (text) => (dispatch) => {
  dispatch({ type: FILTER_PARENT, payload: text });
};
