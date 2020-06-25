import {
  GET_PARENT,
  FILTER_PARENT,
  PARENT_ERROR,
  GET_STUDENT_RESULT,
} from '../action/types';

const initialState = {
  parents: [],
  results: [],
  filtered: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PARENT:
      return {
        ...state,
        parents: payload,
        loading: false,
      };
    case GET_STUDENT_RESULT:
      return {
        ...state,
        results: payload,
        loading: false,
      };
    case FILTER_PARENT:
      return {
        ...state,
        filtered: state.parents.filter((parent) => {
          const regex = new RegExp(`${payload}`, 'gi');
          return (
            parent.parent_guardian_info.pgi_surName.match(regex) ||
            parent.parent_guardian_info.pgi_email.match(regex)
          );
        }),
        loading: false,
      };
    case PARENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
