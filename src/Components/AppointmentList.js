// AppointmentList.js
import React from 'react';

const AppointmentList = ({ appointments }) => {
  return (
    <ul className="list-disc list-inside">
      {appointments.map((appointment, index) => (
        <li key={index} className="mb-2">{appointment}</li>
      ))}
    </ul>
  );
};

export default AppointmentList;
