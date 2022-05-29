import React from 'react';
import { Accounts, accountsSeedData } from "./Accounts/Accounts";
import Budget from './Budget/budget';
import { Link, Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <Link to="/budget">Budget</Link>
        <Link to="/accounts">Accounts</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
