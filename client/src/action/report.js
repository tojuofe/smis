import { CREATE_REPORT, REPORT_ERROR } from './types';
import axios from 'axios';
import { setAlert } from './alert';

export const createReport = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/report', formData, config);

    dispatch({
      type: CREATE_REPORT,
      payload: res.data.data,
    });

    dispatch(setAlert('Report Created Successfully', 'success'));
  } catch (err) {
    const errors = err.response.data.error;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error, 'danger')));
    }
    dispatch({
      type: REPORT_ERROR,
      payload: errors,
    });
  }
};
