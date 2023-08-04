import './index.css';
import { createContext, useState } from "react";
import Navbar from './components/Navbar';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './pages/NotFound';
import Customers from './pages/Customers';
import Customer from './pages/Customer';
import Login from './pages/Login';

// react context for login
export const LoginContext = createContext();
function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App  bg-gray-300 min-h-screen " >
      <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
        <BrowserRouter>
          <Navbar >
            <Routes>
              <Route path='/employees' element={<Employees />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/customers/:id' element={<Customer />} />
              <Route path='/dictionary' element={<Dictionary />} />
              <Route path='/dictionary/:search' element={<Definition />} />
              <Route path='/404' element={<NotFound />} />
              <Route path='/login' element={<Login />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Navbar>
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
