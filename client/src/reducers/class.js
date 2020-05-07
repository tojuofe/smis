import { CREATE_CLASS, GET_CLASSES, CLASS_ERROR } from '../action/types';

const initialState = {
  classes: [],
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
    case CREATE_CLASS:
      return {
        ...state,
        classes: [payload, ...state.classes],
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
