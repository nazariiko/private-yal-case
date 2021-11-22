import {
  ActiveEmployeesAction,
  ActiveEmployeesState,
  EnumActiveEmployeesActions,
} from '../types/activeEmployees';

const initialState: ActiveEmployeesState = {
  activeEmployees: JSON.parse(localStorage.getItem('active-employees') as string)
    ? JSON.parse(localStorage.getItem('active-employees') as string)
    : [],
};

export const activeEmployeesReducer = (
  state = initialState,
  action: ActiveEmployeesAction,
): ActiveEmployeesState => {
  switch (action.type) {
    case EnumActiveEmployeesActions.TOGGLE_ACTIVE:
      const newActiveEmployees = [...state.activeEmployees];

      if (action.payload.isActive === 'true') {
        newActiveEmployees.push(action.payload.id);
      } else {
        let index = newActiveEmployees.indexOf(action.payload.id);
        if (index !== -1) {
          newActiveEmployees.splice(index, 1);
        }
      }

      return {
        activeEmployees: newActiveEmployees,
      };

    default:
      return state;
  }
};
