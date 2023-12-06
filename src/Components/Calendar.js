// CalendarPage.js
import React from 'react';

const CalendarPage = ({ appointment }) => (
  <div>
    <h2 className='text-white'>Calendar Page</h2>
    <div>
      {appointment.map((appointment) => (
        <div key={appointment.id}>
          {appointment.firstName} {appointment.lastName} - {appointment.appointmentTime}
        </div>
      ))}
    </div>
  </div>
);

export default CalendarPage;
