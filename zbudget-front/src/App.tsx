import React from 'react';
import { Outlet } from "react-router-dom";

import Sidebar from "./sidebar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
