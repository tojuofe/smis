import {
  CREATE_PAYMENT,
  GET_PAYMENT,
  SET_CURRENT,
  FILTER_PAYMENT,
  UPDATE_PAYMENT,
  PAYMENT_ERROR,
} from './types';
import axios from 'axios';
import { setAlert } from './alert';
import { saveAs } from 'file-saver';

export const getPayment = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/payment');

    dispatch({
      type: GET_PAYMENT,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: PAYMENT_ERROR,
    });
  }
};

export const createPayment = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/payment', formData, config);

    dispatch({
      type: CREATE_PAYMENT,
      payload: res.data.data,
    });

    dispatch(setAlert('Payment Created Successfully', 'success'));
  } catch (err) {
    const errors = err.response.data.error;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error, 'danger')));
    }
    dispatch({
      type: PAYMENT_ERROR,
      payload: errors,
    });
  }
};

export const getCurrentPayment = (payment) => async (dispatch) => {
  dispatch({ type: SET_CURRENT, payload: payment });
};

export const filterPayment = (text) => (dispatch) => {
  dispatch({ type: FILTER_PAYMENT, payload: text });
};

export const downloadReceipt = (formData) => () => {
  axios
    .post('/api/payment/receipt', formData)
    .then(() => axios.get('/api/payment/receipt', { responseType: 'blob' }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
      saveAs(pdfBlob, 'receipt.pdf');
    });
};

export const updatePayment = (payment) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(`/api/payment/${payment.id}`, payment, config);

    dispatch({
      type: UPDATE_PAYMENT,
      payload: res.data.data,
    });

    dispatch(setAlert('Payment Updated Successfully', 'success'));
  } catch (err) {
    const errors = err.response.data.error;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error, 'danger')));
    }
    dispatch({
      type: PAYMENT_ERROR,
      payload: errors,
    });
  }
};
