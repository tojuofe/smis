import {
  CREATE_STAFF,
  GET_STAFF,
  GET_STAFFNAME,
  UPDATE_STAFF,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_STAFF,
  STAFF_ERROR,
} from '../action/types';

const initialState = {
  staffs: [],
  filtered: null,
  current: null,
  name: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_STAFF:
      return {
        ...state,
        staffs: payload,
        loading: false,
      };
    case CREATE_STAFF:
      return {
        ...state,
        staffs: [...state.staffs, payload],
        loading: false,
      };
    case UPDATE_STAFF:
      return {
        ...state,
        staffs: state.staffs.map((staff) =>
          staff._id === payload._id ? payload : staff
        ),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
        loading: false,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false,
      };
    case FILTER_STAFF:
      return {
        ...state,
        filtered: state.staffs.filter((staff) => {
          const regex = new RegExp(`${payload}`, 'gi');
          return staff.surName.match(regex) || staff.email.match(regex);
        }),
        loading: false,
      };
    case GET_STAFFNAME:
      return {
        ...state,
        name: state.staffs.filter((staff) => {
          return (
            staff.class_assigned === payload &&
            `${staff.surName} ${staff.lastName}`
          );
        }),
        loading: false,
      };
    case STAFF_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
