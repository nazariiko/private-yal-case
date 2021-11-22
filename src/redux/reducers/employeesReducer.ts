import { EmployeesAction, EmployeesState, EnumEmployeesActions } from '../types/employees';

const initialState = {
  employees: [],
  loading: false,
  error: null,
};

export const employeesReducer = (
  state = initialState as EmployeesState,
  action: EmployeesAction,
): EmployeesState => {
  switch (action.type) {
    case EnumEmployeesActions.EMPLOYEES_FETCH:
      return {
        employees: [],
        loading: true,
        error: null,
      };
    case EnumEmployeesActions.EMPLOYEES_FETCH_SUCCESS:
      return {
        employees: action.payload,
        loading: false,
        error: null,
      };
    case EnumEmployeesActions.EMPLOYEES_FETCH_ERROR:
      return {
        employees: [],
        loading: false,
        error: 'Error',
      };
    default:
      return state;
  }
};
