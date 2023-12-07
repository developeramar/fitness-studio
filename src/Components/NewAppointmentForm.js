
import React, { useState } from 'react';

const NewAppointmentForm = ({ onAddAppointment }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [address, setAddress] = useState('');

  const handleAddAppointment = () => {
    if (firstName && lastName && dateTime && address) {
      const formattedDateTime = new Date(dateTime).toISOString(); // Convert to ISO format
      const newAppointment = {
        firstName,
        lastName,
        dateTime: formattedDateTime,
        address,
      };
      alert("Appointment Booked and save to Booked Appointment and Calendar Page")
      onAddAppointment(newAppointment);
      // Clear form fields after adding appointment
      setFirstName('');
      setLastName('');
      setDateTime('');
      setAddress('');
    }

  };

  return (
    <div className="text-left mt-4 p-4 bg-purple-900 shadow-md rounded-md max-w-screen-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-white">Add New Appointment</h2>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-200">First Name :</label>
        <input
          type="text"
          value={firstName}
          placeholder="Client's First Name"
          onChange={(e) => setFirstName(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-200">Last Name :</label>
        <input
          type="text"
          placeholder="Client's Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-200">Select Date and Time :</label>
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-200">Address :</label>
        <input
          type="text"
          placeholder="Client's Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>
      <button
        onClick={handleAddAppointment}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default NewAppointmentForm;
