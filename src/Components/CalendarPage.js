// CalendarPage.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CalendarPage = ({ appointment }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onChange = (date) => {
    setSelectedDate(date);
  };


  

  const getappointmentsForDate = (date) => {
    const filteredAppointments = appointment ? appointment.filter((appointment) => {
      const appointmentDate = new Date(appointment.dateTime);
      return (
        appointmentDate.getDate() === date.getDate() &&
        appointmentDate.getMonth() === date.getMonth() &&
        appointmentDate.getFullYear() === date.getFullYear()
      );
    }) : [];
  
    return filteredAppointments;
  };
  
  const renderAppointments = () => {
    const dateKey = selectedDate.toISOString().split('T')[0];
    const dateAppointments = getappointmentsForDate(selectedDate);

    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Appointments for {dateKey}</h2>
        <ul className="list-disc pl-4">
          {dateAppointments.map((appointment, index) => (
            <li key={index} className="mb-2">{`${appointment.firstName} ${appointment.lastName}`}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className=''>
         <div className="mt-8 md:w-[67%] mx-auto bg-gray-600 rounded-md py-5 ">
      <h2 className="text-2xl font-bold mb-4 text-white">Trainer Calendar</h2>
      <div className="flex flex-col lg:flex-row text-white">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <Calendar onChange={onChange} value={selectedDate} />
        </div>
        <div className="w-full lg:w-1/2 ml-0 lg:ml-4">
          {renderAppointments()}
        </div>
      </div>
    </div>

    </div>
   
  );
};

export default CalendarPage;
