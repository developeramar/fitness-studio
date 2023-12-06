// SchdulesPage.js
import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import NewAppointmentForm from "../Components/NewAppointmentForm";
import BookedSchedule from "../Components/BookSchedule";
import CalendarPage from "../Components/CalendarPage";
import Footer from "../Components/Footer";

const SchdulesPage = () => {
  const [showSchedul, setShowSchedule] = useState(true);
  const [showAddAppointment, setshowAddAppointment] = useState(false);
  const [showCalebdar, setshowCalebdar] = useState(false);

  const handleshowSchedule = () => {
    setshowAddAppointment(false);
    setshowCalebdar(false);
    setShowSchedule(true);
  };
  const handleshowAppointment = () => {
    setshowAddAppointment(true);
    setShowSchedule(false);
    setshowCalebdar(false);
  };
  const handleshowcalendar = () => {
    setShowSchedule(false);
    setshowAddAppointment(false);
    setshowCalebdar(true);
  };
  const [clients, setClients] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      address: "New York",
      appointmentTime: new Date("2023-11-15T10:00:00"),
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Abrahim",
      address: "123 Main St, City A",
      appointmentTime: new Date("2023-11-20T17:30:00"),
    },
    {
      id: 3,
      firstName: "Jane",
      lastName: "Smith",
      address: "456 Oak St, City B",
      appointmentTime: new Date("2023-11-21T14:00:00"),
    },
    {
      id: 4,
      firstName: "Arun kumar",
      lastName: "Nirala",
      address: "chennai",
      appointmentTime: new Date("2023-11-15T10:00:00"),
    },
    {
      id: 5,
      firstName: "Rahuveer",
      lastName: "Yadav",
      address: "Chnadigarh",
      appointmentTime: new Date("2023-11-20T17:30:00"),
    },
    {
      id: 6,
      firstName: "Amar",
      lastName: "Chaudhari",
      address: "Belhari-802326",
      appointmentTime: new Date("2023-11-21T14:00:00"),
    },
  ]);

  // Function to handle edit
  const handleEdit = (clientId, updatedData) => {
    setClients((prevClients) =>
      prevClients.map((client) =>
        client.id === clientId ? { ...client, ...updatedData } : client
      )
    );
  };

  // Function to handle delete
  const handleDelete = (clientId) => {
    setClients((prevClients) =>
      prevClients.filter((client) => client.id !== clientId)
    );
  };

  // Function to handle adding a new appointment
  const handleAddAppointment = (newAppointment) => {
    // Create a new client object with an increasing id and correct date format
    const newClient = {
      id: clients.length + 1,
      ...newAppointment,
      appointmentTime: new Date(newAppointment.dateTime),
    };

    // Update the state with the new client
    setClients((prevClients) => [...prevClients, newClient]);
  };

  return (
    <div className='bg-[url("https://www.gymate.co.in/wp-content/uploads/2020/12/background-website.jpg")] bg-no-repeat bg-cover md:h-[]'>
      <div>
        <NavBar />
      </div>

      <div className=" md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-3 py-7">
          <button
            className="rounded-md hover:bg-violet-400 text-white px-[5px] py-[10px] bg-violet-600"
            onClick={handleshowSchedule}
          >
            Booked Appointments
          </button>
          <button
            className="rounded-md hover:bg-violet-400 text-white px-[5px] py-[10px] bg-violet-600"
            onClick={handleshowAppointment}
          >
            Add New Appointments
          </button>
          <button
            className="rounded-md hover:bg-violet-400 text-white px-[5px] py-[10px] bg-violet-600"
            onClick={handleshowcalendar}
          >
            Appointments On Calendar
          </button>
        </div>
        {showSchedul && (
          <BookedSchedule
            clients={clients}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
        {showAddAppointment && (
          <NewAppointmentForm onAddAppointment={handleAddAppointment} />
        )}
        {showCalebdar && <CalendarPage appointment={clients} />}
      </div>
      <Footer />
    </div>
  );
};

export default SchdulesPage;
