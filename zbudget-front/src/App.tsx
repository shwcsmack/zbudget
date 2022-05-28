import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <p>Budget</p>
        <p>Accounts</p>
        <ul>
          <li>Wells Fargo Checking</li>
          <li>Wells Fargo Savings</li>
          <li>Amex Credit Card</li>
          <li>Add new account</li>
        </ul> 
      </div>
      <div className='content'>
        <h1>Budget</h1>
        <h2>To be Budgeted: $500.00</h2>
        <h3>Must Pay</h3>
        <ul>
          <li>Electric</li>
          <li>Gas</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
