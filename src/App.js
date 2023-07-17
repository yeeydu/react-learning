import './index.css';
import React, { useState } from "react";
import Navbar from './components/Navbar';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './pages/NotFound';

function App() {



  return (
    <div className="App  bg-gray-300 min-h-screen " >
      <BrowserRouter>
        <Navbar >
          <Routes>
            <Route path='/Employees' element={<Employees />} />
            <Route path='/dictionary' element={<Dictionary />} />
            <Route path='/dictionary/:search' element={<Definition />} /> 
            <Route path='/404' element={<NotFound/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
