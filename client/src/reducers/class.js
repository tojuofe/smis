import {
  CREATE_CLASS,
  CREATE_SUBJECT,
  GET_CLASSES,
  GET_SUBJECT,
  CLASS_ERROR,
} from '../action/types';

const initialState = {
  classes: [],
  subjects: [],
  loadings: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CLASSES:
      return {
        ...state,
        classes: payload,
        loadings: false,
      };
    case GET_SUBJECT:
      return {
        ...state,
        subjects: payload,
        loadings: false,
      };
    case CREATE_CLASS:
      return {
        ...state,
        classes: [payload, ...state.classes],
        loadings: false,
      };
    case CREATE_SUBJECT:
      return {
        ...state,
        subjects: [payload, ...state.subjects],
        loadings: false,
      };
    case CLASS_ERROR:
      return {
        ...state,
        error: payload,
        loadings: false,
      };
    default:
      return state;
  }
}
