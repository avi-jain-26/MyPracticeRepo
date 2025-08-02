import React, { useState } from 'react';
import Header from './components/Header';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
