import React from 'react';
import './Appointments.css';

function Appointments({ appointments }) {
  return (
    <div className="appointments">
      <h2>Your Appointments</h2>
      {appointments.length === 0 ? (
        <p>You have no appointments scheduled.</p>
      ) : (
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              <p>Date: {appointment.date}</p>
              <p>Service: {appointment.service}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Appointments;