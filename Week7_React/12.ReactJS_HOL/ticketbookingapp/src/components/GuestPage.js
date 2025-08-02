import React from 'react';
import FlightList from './FlightList';
import "./GuestPage.css"
const GuestPage = () => (
  <div id='guest'>
    <h2>Welcome Guest!</h2>
    <FlightList />
    <p>Please SignUp to book your tickets.</p>
  </div>
);

export default GuestPage;
