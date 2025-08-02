import React from 'react';

const FlightList = () => {
  const flights = [
    { id: 1, name: 'Air India', from: 'Delhi', to: 'Mumbai' },
    { id: 2, name: 'Indigo', from: 'Bangalore', to: 'Chennai' },
  ];

  return (
    <div>
      <h3>Available Flights</h3>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            {flight.name} - {flight.from} to {flight.to}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
