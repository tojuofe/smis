import { CREATE_CLASS, GET_CLASSES, CLASS_ERROR } from './types';
import { setAlert } from './alert';
import axios from 'axios';

export const getClasses = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/class');

    dispatch({
      type: GET_CLASSES,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: CLASS_ERROR,
    });
  }
};

export const createClass = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/class', formData, config);

    dispatch({
      type: CREATE_CLASS,
      payload: res.data.data,
    });

    dispatch(setAlert('Class Created Successfully', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: CLASS_ERROR,
      payload: errors,
    });
  }
};
