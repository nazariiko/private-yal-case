import React from 'react';

interface EmployeeBirthdayInfoProps {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
}

const EmployeeBirthdayInfo: React.FC<EmployeeBirthdayInfoProps> = ({
  id,
  firstName,
  lastName,
  dob,
}) => {
  const formatDate = (dob: string): string => {
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let date = new Date(dob);
    // @ts-ignore
    let formattedDate = date.toLocaleString('en-US', options);
    return formattedDate + ' year';
  };

  return (
    <div className="employee-birthday-info">
      <p>
        {firstName} {lastName} - {formatDate(dob)}
      </p>
    </div>
  );
};

export default React.memo(EmployeeBirthdayInfo);
