import { GET_PARENT, FILTER_PARENT, PARENT_ERROR } from './types';
import axios from 'axios';

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

export const filterParent = (text) => (dispatch) => {
  dispatch({ type: FILTER_PARENT, payload: text });
};
