import './index.css';
import React, { useState } from "react";
import Navbar from './components/Navbar';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from './components/Dictionary';

function App() {



  return (
    <div className="App  bg-gray-300 min-h-screen " >
      <BrowserRouter>
        <Navbar >
          <Routes>
            <Route path='/Employees' element={<Employees />} />
            <Route path='/dictionary' element={<Dictionary />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
