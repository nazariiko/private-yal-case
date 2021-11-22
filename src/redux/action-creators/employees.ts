import axios from 'axios';
import { Dispatch } from 'redux';
import { EmployeesAction, EnumEmployeesActions } from '../types/employees';

export const fetchEmployees = () => async (dispatch: Dispatch<EmployeesAction>) => {
  try {
    dispatch({ type: EnumEmployeesActions.EMPLOYEES_FETCH });
    const response = await axios.get(
      'https://yalantis-react-school-api.yalantis.com/api/task0/users',
    );
    setTimeout(() => {
      dispatch({ type: EnumEmployeesActions.EMPLOYEES_FETCH_SUCCESS, payload: response.data });
    }, 1000);
  } catch (error) {
    dispatch({ type: EnumEmployeesActions.EMPLOYEES_FETCH_ERROR });
  }
};
