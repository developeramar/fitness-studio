// AppointmentEditor.js
import React, { useState } from 'react';

const AppointmentEditor = ({ appointments, onAddAppointment, onDeleteAppointment }) => {
  // State to manage new appointment input
  const [newAppointment, setNewAppointment] = useState('');

  const handleAddAppointment = () => {
    if (newAppointment) {
      onAddAppointment(newAppointment);
      setNewAppointment('');
    }
  };

  const handleDeleteAppointment = (index) => {
    onDeleteAppointment(index);
  };

  return (
    <div className="mt-4">
      <ul className="list-disc list-inside">
        {appointments.map((appointment, index) => (
          <li key={index} className="mb-2">
            {appointment}{' '}
            <button
              onClick={() => handleDeleteAppointment(index)}
              className="ml-2 bg-red-500 text-white p-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="datetime-local"
          value={newAppointment}
          onChange={(e) => setNewAppointment(e.target.value)}
          className="p-1 border rounded"
        />
        <button
          onClick={handleAddAppointment}
          className="ml-2 bg-green-500 text-white p-1 rounded hover:bg-green-600"
        >
          Add Appointment
        </button>
      </div>
    </div>
  );
};

export default AppointmentEditor;
