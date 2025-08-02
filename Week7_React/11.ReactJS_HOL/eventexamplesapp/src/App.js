import React, { useState } from 'react';
import "./App.css"
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(0);

  // Multiple method invocation
  const handleIncrement = () => {
    incrementCounter();
    sayHello();
  };

  const incrementCounter = () => {
    setCounter(prev => prev + 1);
  };

  const sayHello = () => {
    console.log("Hello! This is a static message from Increment button.");
  };

  const handleDecrement = () => {
    setCounter(prev => prev - 1);
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handlePress = () => {
    alert("I was clicked");
  };

  return (
    <div className="App">
    
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <hr />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <hr />

      <button onClick={handlePress}>
        click on me
      </button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
