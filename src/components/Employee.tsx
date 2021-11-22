import React from 'react';
import { useDispatch } from 'react-redux';
import { EnumActiveEmployeesActions } from '../redux/types/activeEmployees';

interface EmployeeProps {
  id: string;
  firstName: string;
  lastName: string;
}

const getActiveStatusFromLocalStorage = (id: string) => {
  let activeEmployees = JSON.parse(localStorage.getItem('active-employees') as string);

  return activeEmployees.includes(id);
};

const Employee: React.FC<EmployeeProps> = ({ id, firstName, lastName }) => {
  const [isActive, setIsActive] = React.useState(getActiveStatusFromLocalStorage(id));
  const dispatch = useDispatch();

  const toggleIsActive = (event: any) => {
    event.target.value === 'true' ? setIsActive(true) : setIsActive(false);
    dispatch({
      type: EnumActiveEmployeesActions.TOGGLE_ACTIVE,
      payload: { isActive: event.target.value, id: id },
    });
  };

  return (
    <div className="employee">
      <h6 style={isActive ? { color: '#005CC8' } : { color: 'black' }}>
        {firstName} {lastName}
      </h6>
      <div className="radio-options">
        <form>
          <div className="option">
            <input
              type="radio"
              name="isActive"
              value="false"
              checked={!isActive}
              onChange={toggleIsActive}
            />
            <label>not active</label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="isActive"
              value="true"
              checked={isActive}
              onChange={toggleIsActive}
            />
            <label>active</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Employee;
