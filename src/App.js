import './index.css';
import React, { useState } from "react";
import Navbar from './components/Navbar';
import Employees from './pages/Employees';

function App() {



  return (
    <div className="App bg-gray-300 min-h-screen " >
      <Navbar />
      <Employees />
    </div>
  );
}

export default App;
