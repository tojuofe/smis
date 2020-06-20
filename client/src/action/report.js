import {
  GET_REPORT,
  CREATE_REPORT,
  SET_REPORT_CURRENT,
  DELETE_REPORT,
  FILTER_REPORT,
  REPORT_ERROR,
} from './types';
import axios from 'axios';
import { setAlert } from './alert';
import { saveAs } from 'file-saver';

// GET AlL REPORT
export const getReport = () => async (dispatch) => {
  try {
    const res = await axios.get('api/report');

    dispatch({
      type: GET_REPORT,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: REPORT_ERROR,
      payload: err,
    });
  }
};

// CREATE REPORT
export const createReport = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(
      `/api/report/${formData.id}`,
      formData,
      config
    );

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

// DELETE TERM RESULT
export const deleteResult = (term) => async (dispatch) => {
  try {
    await axios.delete(`/api/report/${term.id}`, { data: term });

    dispatch({
      type: DELETE_REPORT,
      payload: term,
    });
    dispatch(setAlert('Result Deleted', 'success'));
  } catch (err) {
    console.log(err);
    dispatch({
      type: REPORT_ERROR,
    });
  }
};

// GET CURRENT RESULT
export const getCurrentResult = (result) => async (dispatch) => {
  dispatch({ type: SET_REPORT_CURRENT, payload: result });
};

// FILTER STAFF
export const filterResult = (text) => (dispatch) => {
  dispatch({ type: FILTER_REPORT, payload: text });
};

export const downloadResult = (formData) => () => {
  axios
    .post('/api/report/result', formData)
    .then(() => axios.get('/api/report/result', { responseType: 'blob' }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
      saveAs(pdfBlob, 'result.pdf');
    });
};
