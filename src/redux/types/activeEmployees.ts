export interface ActiveEmployeesState {
  activeEmployees: string[];
}

export enum EnumActiveEmployeesActions {
  TOGGLE_ACTIVE = 'TOGGLE_ACTIVE',
}

interface ToggleActiveAction {
  type: EnumActiveEmployeesActions.TOGGLE_ACTIVE;
  payload: {
    isActive: 'true' | 'false';
    id: string;
  };
}

export type ActiveEmployeesAction = ToggleActiveAction;
