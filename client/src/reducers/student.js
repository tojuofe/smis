import {
  CREATE_STUDENT,
  GET_STUDENTS,
  SET_CURRENT,
  PROMOTE_STUDENT,
  UPDATE_STUDENT,
  FILTER_STUDENT,
  FILTER_CLASS,
  STUDENT_ERROR,
  CREATE_RE_STUDENT,
  RE_STUDENT_ERROR,
} from '../action/types';

const initialState = {
  students: [],
  current: null,
  return_students: [],
  filtered: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: payload,
        loading: false,
      };
    case CREATE_STUDENT:
      return {
        ...state,
        students: [...state.students, payload],
        loading: false,
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map((student) =>
          student._id === payload._id ? payload : student
        ),
        loading: false,
      };
    case CREATE_RE_STUDENT:
      return {
        ...state,
        return_students: [...state.return_students, payload],
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
        loading: false,
      };
    case FILTER_STUDENT:
      return {
        ...state,
        filtered: state.students.filter((student) => {
          const regex = new RegExp(`${payload}`, 'gi');
          return (
            student.surName.match(regex) || student.class_admitted.match(regex)
          );
        }),
        loading: false,
      };
    case FILTER_CLASS:
      return {
        ...state,
        filtered: state.students.filter((student) => {
          const regex = new RegExp(`${payload}`, 'gi');
          return student.class_admitted.match(regex);
        }),
        loading: false,
      };

    case PROMOTE_STUDENT:
      return {
        ...state,
        students: state.students.map((student) =>
          student._id === payload._id ? payload : student
        ),
        loading: false,
      };
    case RE_STUDENT_ERROR:
    case STUDENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
