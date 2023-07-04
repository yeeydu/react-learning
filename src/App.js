import './index.css';
import React, { useState } from "react";
import Navbar from './components/Navbar';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {



  return (
    <div className="App  bg-gray-300 min-h-screen " >
      <BrowserRouter>
        <Navbar >
          <Routes>
            <Route path='/Employees' element={<Employees />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
