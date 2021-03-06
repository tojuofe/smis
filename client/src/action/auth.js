import {
  USER_LOADED,
  LOGIN_SUCCESS,
  STAFF_LOADED,
  STAFF_SUCCESS,
  PARENT_LOADED,
  PARENT_SUCCESS,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT,
} from './types';
import { setAlert } from './alert';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

// Load Admin
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Login Admin
export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL,
      payload: errors,
    });
  }
};

// LOAD STAFF
export const loadStaff = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth/staff');

    dispatch({
      type: STAFF_LOADED,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Login Staff
export const loginStaff = ({ email, phoneNumber1 }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, phoneNumber1 });

  try {
    const res = await axios.post('/api/auth/staff', body, config);

    dispatch({
      type: STAFF_SUCCESS,
      payload: res.data.data,
    });

    dispatch(loadStaff());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL,
      payload: errors,
    });
  }
};

// LOAD PARENT
export const loadParent = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth/parent');

    dispatch({
      type: PARENT_LOADED,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Login Parent
export const loginParent = ({ pgi_email, pgi_phoneNumber1 }) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ pgi_email, pgi_phoneNumber1 });

  try {
    const res = await axios.post('/api/auth/parent', body, config);

    dispatch({
      type: PARENT_SUCCESS,
      payload: res.data.data,
    });

    dispatch(loadParent());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL,
      payload: errors,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
