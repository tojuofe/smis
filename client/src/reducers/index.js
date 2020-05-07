import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import class_ from './class';
import student from './student';
import staff from './staff';
import payment from './payment';
import parent from './parent';
import report from './report';

export default combineReducers({
  alert,
  auth,
  class_,
  student,
  staff,
  payment,
  parent,
  report,
});
