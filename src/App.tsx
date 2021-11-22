import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchEmployees } from './redux/action-creators/employees';

import ListOfEmployeesByLetter from './components/ListOfEmployeesByLetter';
import BirthdayMonth from './components/BirthdayMonth';
import { useTypedSelector } from './hooks/useTypedSelector';

const months = [
  'November',
  'December',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
];

const App = () => {
  const dispatch = useDispatch();
  const { activeEmployees } = useTypedSelector((state) => state.activeEmployees);

  React.useEffect(() => {
    dispatch(fetchEmployees());
    if (localStorage.getItem('active-employees') === null) {
      localStorage.setItem('active-employees', JSON.stringify([]));
    }
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.setItem('active-employees', JSON.stringify(activeEmployees));
  }, [activeEmployees]);

  return (
    <div className="wrapper">
      <div className="header">
        <h1>
          <span style={{ color: '#FF6300' }}>Y</span>alantis Case
        </h1>
      </div>
      <div className="content">
        <div className="employees-side">
          <h3>Employees</h3>
          <div className="employees-by-alphabet">
            {Array(26)
              .fill(0)
              .map((_, index) => 65 + index)
              .map((number, index) => (
                <ListOfEmployeesByLetter letter={String.fromCharCode(number)} key={index} />
              ))}
          </div>
        </div>
        <div className="employees-birthday-side">
          <h3>Employees birthday</h3>
          <div className="employees-by-birthday">
            {activeEmployees.length ? (
              months.map((month, index) => <BirthdayMonth month={month} key={index} />)
            ) : (
              <h4 style={{ color: '#ff4747', fontSize: '18px' }}>Employees List is empty</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
