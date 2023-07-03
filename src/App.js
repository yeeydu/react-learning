import './index.css';
import React, { useState } from "react";
import Employee from './components/Employee';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    { id: 1, name: "Dammian", role: "CEO", image: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: "Lucas", role: "CTO", image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, name: "Jorge", role: "Accounting", image: 'https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 4, name: "Sarah", role: "HR", image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 5, name: "Caleb", role: "Developer", image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg' },
    { id: 6, name: "Maria", role: "Analytics", image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 7, name: "Joana", role: "Developer", image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 8, name: "James", role: "Designer", image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 9, name: "Rihana", role: "Developer", image: 'https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ]);

  function updateEmployee(id, newName, newRole) {

    const updateEmployees = employees.map((employee)=>{
      if(id == employee.id){
        {/*...employee = spread operator it helps to avoid passing all elements of that object*/}
        return{...employee, name: newName, role: newRole};
      }
      return employee;
    });

    setEmployees(updateEmployees)
    console.log('updateEmployee inside of app.js');
  }

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
              key={employee.id}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              img={employee.image}
              updateEmployee={updateEmployee}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
