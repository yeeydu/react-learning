import './index.css';
import { createContext, useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './pages/NotFound';
import Customers from './pages/Customers';
import Customer from './pages/Customer';
import Login from './pages/Login';
import { baseUrl } from './shared';

// react context for login
export const LoginContext = createContext();
function App() {

  // refresh function to call on loop
  function refreshTokens() {
    if (localStorage.refresh) {
      const url = baseUrl + 'api/token/refresh';
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          refresh: localStorage.refresh,
        })
      }).then((response) => {
        return response.json();
      }).then((data) => {
        localStorage.access = data.access;
        localStorage.refresh = data.refresh;
        setLoggedIn(true);
      });
    }
  }

  // refresh token loop
  useEffect(() => {
    const minute = 1000 * 60;
    refreshTokens();
    setInterval(refreshTokens, minute * 3)
  }, [])

  const [loggedIn, setLoggedIn] = useState(localStorage.access ? true : false);

  // clear localstorage
  function changeLoggedIn(value) {
    setLoggedIn(value);
    if (value === false) {
      localStorage.clear();
    }
  }

  return (
    <div className="App  bg-gray-300 min-h-screen " >
      <LoginContext.Provider value={[loggedIn, changeLoggedIn]}>
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
