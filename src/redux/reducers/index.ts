import { combineReducers } from 'redux';
import { employeesReducer } from './employeesReducer';
import { activeEmployeesReducer } from './activeEmployeesReducer';

export const rootReducer = combineReducers({
  employees: employeesReducer,
  activeEmployees: activeEmployeesReducer,
});
