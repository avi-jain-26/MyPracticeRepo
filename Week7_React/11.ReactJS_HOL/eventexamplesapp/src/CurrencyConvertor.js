import React, { useState } from 'react';
import "./currcon.css";
function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [curr,setCurr] = useState('');
  const [euros, setEuros] = useState(null);
  const conversionRate = 0.011; 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(curr==='Euro' || curr==="euro" ){
    const euroValue = (parseFloat(rupees) * conversionRate).toFixed(2);
    setEuros(euroValue);
    }
    else{
      alert("INVALID CURRENCY")
    }
  };

  return (
    <div>
      <h2 className="head">Currency Converter</h2>
      <form className="form" onSubmit={handleSubmit}>
       Amount: <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in ₹"
        />
        <br/>
        <br/>

        Currency: <input
          type="text"
          value={curr}
          onChange={(e) => setCurr(e.target.value)}
          placeholder="Enter Currency"
        />
        
        <br/>

        <button type="submit">Convert</button>
      </form>

       {euros !== null && (
        <h3 id="currdis">€ {euros}</h3>
      )}
    </div>
  );
}

export default CurrencyConvertor;
