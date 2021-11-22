import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Employee from './Employee';
import { Employee as EmployeeModel } from '../redux/types/employees';

interface ListOfEmployeesByLetterProps {
  letter: string;
}

const ListOfEmployeesByLetter: React.FC<ListOfEmployeesByLetterProps> = ({ letter }) => {
  const { employees, loading, error } = useTypedSelector((state) => state.employees);

  const sortByFirstName = (a: EmployeeModel, b: EmployeeModel) => {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0;
  };

  if (loading) {
    return (
      <div className="list-of-employees-by-letter">
        <h3>{letter}</h3>
        <h5>Loading...</h5>
      </div>
    );
  }

  if (error) {
    return (
      <div className="list-of-employees-by-letter">
        <h3>{letter}</h3>
        <h5>Error :(</h5>
      </div>
    );
  }

  if (employees.length) {
    return (
      <div className="list-of-employees-by-letter">
        <h3>{letter}</h3>
        {employees.filter((employee) => employee.firstName[0] === letter).length ? (
          employees
            .filter((employee) => employee.firstName[0] === letter)
            .sort(sortByFirstName)
            .map((employee) => (
              <Employee
                id={employee.id}
                firstName={employee.firstName}
                lastName={employee.lastName}
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

export default React.memo(ListOfEmployeesByLetter);
