import React from 'react';
import './App.css';

function App() {
  const element = "Office Space";
  const sr = "https://media.gettyimages.com/id/1305954290/photo/empty-office.jpg?s=612x612&w=0&k=20&c=ipyvL96DSDpTUf7UKSTgmYLsGta6UlTu-1nEODCpvZo=";

  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;

  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "WeWork", Rent: 70000, Address: "Bangalore" },
    { Name: "Regus", Rent: 60000, Address: "Mumbai" }
  ];

  return (
    <div className="App">
      <div>
      <h1>{element}, at Affordable Range</h1>
      {officeList.map((ItemName, index) => {
        let colors = [];
        if (ItemName.Rent <= 60000) {
          colors.push('textRed');
        } else {
          colors.push('textGreen');
        }

        return (
          <div key={index}>
            {jsxatt}
            <h1>Name: {ItemName.Name}</h1>
            <h3 className={colors.join(' ')}>Rent: Rs. {ItemName.Rent}</h3>
            <h3>Address: {ItemName.Address}</h3>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default App;
