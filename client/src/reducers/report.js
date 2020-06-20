import {
  GET_REPORT,
  CREATE_REPORT,
  SET_REPORT_CURRENT,
  FILTER_REPORT,
  DELETE_REPORT,
  REPORT_ERROR,
} from '../action/types';

const initialState = {
  reports: [],
  current: null,
  filtered: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_REPORT:
      return {
        ...state,
        reports: payload,
        loading: false,
      };
    case CREATE_REPORT:
      return {
        ...state,
        reports: [payload],
        loading: false,
      };
    case SET_REPORT_CURRENT:
      return {
        ...state,
        current: payload,
        loading: false,
      };
    case DELETE_REPORT:
      return {
        ...state,
        reports: state.reports.filter((report) => report._id !== payload),
        loading: false,
      };
    case FILTER_REPORT:
      return {
        ...state,
        filtered: state.reports.filter((report) => {
          const regex = new RegExp(`${payload}`, 'gi');
          return (
            report.surName.match(regex) ||
            report.middleName.match(regex) ||
            report.lastName.match(regex)
          );
        }),
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
