export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
}

export interface EmployeesState {
  employees: Employee[];
  loading: boolean;
  error: null | string;
}

export enum EnumEmployeesActions {
  EMPLOYEES_FETCH = 'EMPLOYEES_FETCH',
  EMPLOYEES_FETCH_SUCCESS = 'EMPLOYEES_FETCH_SUCCESS',
  EMPLOYEES_FETCH_ERROR = 'EMPLOYEES_FETCH_ERROR',
}

interface EmployeesFetchAction {
  type: EnumEmployeesActions.EMPLOYEES_FETCH;
}

interface EmployeesFetchSuccessAction {
  type: EnumEmployeesActions.EMPLOYEES_FETCH_SUCCESS;
  payload: Employee[];
}

interface EmployeesFetchErrorAction {
  type: EnumEmployeesActions.EMPLOYEES_FETCH_ERROR;
}

export type EmployeesAction =
  | EmployeesFetchAction
  | EmployeesFetchSuccessAction
  | EmployeesFetchErrorAction;
