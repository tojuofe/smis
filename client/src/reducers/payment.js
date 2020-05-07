import {
  CREATE_PAYMENT,
  GET_PAYMENT,
  SET_CURRENT,
  PAYMENT_ERROR,
  FILTER_PAYMENT,
} from '../action/types';

const initialState = {
  payments: [],
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
    case CREATE_PAYMENT:
      return {
        ...state,
        payments: [...state.payments, payload],
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
