import {
  CREATE_PAYMENT,
  GET_PAYMENT,
  SET_CURRENT,
  FILTER_PAYMENT,
  UPDATE_PAYMENT,
  PAYMENT_ERROR,
  CREATE_DESCRIPTION,
  GET_DESCRIPTION,
} from '../action/types';

const initialState = {
  payments: [],
  descriptions: [],
  current: null,
  filtered: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PAYMENT:
      return {
        ...state,
        payments: payload,
        loading: false,
      };
    case GET_DESCRIPTION:
      return {
        ...state,
        descriptions: payload,
        loading: false,
      };
    case CREATE_PAYMENT:
      return {
        ...state,
        payments: [...state.payments, payload],
        loading: false,
      };
    case CREATE_DESCRIPTION:
      return {
        ...state,
        descriptions: [...state.descriptions, payload],
        loading: false,
      };
    case UPDATE_PAYMENT:
      return {
        ...state,
        payments: state.payments.map((payment) =>
          payment._id === payload._id ? payload : payment
        ),
        loading: false,
      };
    case FILTER_PAYMENT:
      return {
        ...state,
        filtered: state.payments.filter((payment) => {
          const regex = new RegExp(`${payload}`, 'gi');
          return (
            payment.student_Name.match(regex) ||
            payment.installment.match(regex)
          );
        }),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
        loading: false,
      };
    case PAYMENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
