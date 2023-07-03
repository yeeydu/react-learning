import './index.css';
import React, { useState } from "react";
import Employee from './components/Employee';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([

    { name: "Dammian", role: "CEO", image: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: "Lucas", role: "CTO", image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: "Jorge", role: "Accounting", image: 'https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: "Sarah", role: "HR", image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: "Caleb", role: "Developer", image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg' },
    { name: "Maria", role: "Analytics", image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: "Joana", role: "Developer", image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: "James", role: "Designer", image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: "Rihana", role: "Developer", image: 'https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },

  ]);
  const showEmployess = false;
  // let role = "dev";

  return (
    <div className="App" >
      <input type='text'
        onChange={(e) => {
          setRole(e.target.value)
          console.log(e.target.value);
        }} />
      <div className='flex flex-wrap justify-center'> {/* flex-wrap = wraps content for small view*/}
        {employees.map((employee) => {
          return (
            < Employee
              key={uuidv4()}
              name={employee.name}
              role={employee.role}
              img={employee.image} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
