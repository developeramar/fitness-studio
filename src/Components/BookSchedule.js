import React, { useState } from 'react';

const BookedSchedule = ({ clients, onEdit, onDelete }) => {
  const [editableRowIndex, setEditableRowIndex] = useState(null);

  const handleEdit = (index) => {
    setEditableRowIndex(index);
  };

  const handleContentEditable = (index) => {
    setEditableRowIndex(index);
  };

  return (
    <div className="text-left mt-8 overflow-x-auto max-w-screen-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">Booked Schedule</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 rounded">
          <thead>
            <tr>
              <th className="p-2 border bg-gray-800 text-white">First Name</th>
              <th className="p-2 border bg-gray-800 text-white">Last Name</th>
              <th className="p-2 border bg-gray-800 text-white">Address</th>
              <th className="p-2 border bg-gray-800 text-white">Appointment Time</th>
              <th className="p-2 border bg-gray-800 text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr
                key={client.id}
                className={`${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'} ${
                  editableRowIndex === index ? 'bg-yellow-200' : ''
                }`}
              >
                <td className="p-2 border">
                  <div contentEditable={editableRowIndex === index} onClick={() => handleContentEditable(index)}>
                    {client.firstName}
                  </div>
                </td>
                <td className="p-2 border">
                  <div contentEditable={editableRowIndex === index} onClick={() => handleContentEditable(index)}>
                    {client.lastName}
                  </div>
                </td>
                <td className="p-2 border">
                  <div contentEditable={editableRowIndex === index} onClick={() => handleContentEditable(index)}>
                    {client.address}
                  </div>
                </td>
                <td className="p-2 border">
                  <div contentEditable={editableRowIndex === index} onClick={() => handleContentEditable(index)}>
                    {new Intl.DateTimeFormat('en-US', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                    }).format(new Date(client.appointmentTime))}
                  </div>
                </td>
                <td className="p-2 border">
                  <button
                    onClick={() => (editableRowIndex === index ? setEditableRowIndex(null) : handleEdit(index))}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mx-2"
                  >
                    {editableRowIndex === index ? 'Save' : 'Edit'}
                  </button>
                  <button
                    onClick={() => onDelete(client.id)}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedSchedule;
