import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import EmployeeBirthdayInfo from './EmployeeBirthdayInfo';
import { Employee as EmployeeModel } from '../redux/types/employees';

interface BirthdayMonthProps {
  month: string;
}

const BirthdayMonth: React.FC<BirthdayMonthProps> = ({ month }) => {
  const { employees, loading, error } = useTypedSelector((state) => state.employees);
  const { activeEmployees } = useTypedSelector((state) => state.activeEmployees);

  const getFormattedMonth = (dob: string): string => {
    let options = { month: 'long' };
    let date = new Date(dob);
    // @ts-ignore
    let formattedDate = date.toLocaleString('en-US', options);
    return formattedDate;
  };

  const sortByLastName = (a: EmployeeModel, b: EmployeeModel) => {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  };

  if (loading) {
    return (
      <div className="list-employees-by-birthmonth">
        <h3>{month}</h3>
        <h5>Loading...</h5>
      </div>
    );
  }

  if (error) {
    return (
      <div className="list-employees-by-birthmonth">
        <h3>{month}</h3>
        <h5>Error :(</h5>
      </div>
    );
  }

  if (employees.length) {
    return (
      <div className="list-employees-by-birthmonth">
        <h3>{month}</h3>
        {employees
          .filter((employee) => activeEmployees.includes(employee.id))
          .filter((employee) => getFormattedMonth(employee.dob) === month).length ? (
          employees
            .filter((employee) => activeEmployees.includes(employee.id))
            .filter((employee) => getFormattedMonth(employee.dob) === month)
            .sort(sortByLastName)
            .map((employee) => (
              <EmployeeBirthdayInfo
                id={employee.id}
                firstName={employee.firstName}
                lastName={employee.lastName}
                dob={employee.dob}
                key={employee.id}
              />
            ))
        ) : (
          <h4 style={{ color: '#ff4747', fontSize: '14px' }}>No Employees</h4>
        )}
      </div>
    );
  }

  return <div></div>;
};

export default React.memo(BirthdayMonth);
