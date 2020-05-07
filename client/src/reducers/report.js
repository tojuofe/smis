import { CREATE_REPORT, REPORT_ERROR } from '../action/types';

const initialState = {
  reports: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_REPORT:
      return {
        ...state,
        reports: [...state.reports, payload],
        loading: false,
      };
    case REPORT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
