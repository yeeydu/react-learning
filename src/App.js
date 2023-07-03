import './index.css';
import React, { useState } from "react";
import Employee from './components/Employee';

function App() {

  const [role, setRole] = useState("dev");

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
      <Employee name="Woman" role={role} img="https://assets.website-files.com/611648b6262a801811180f6c/622a840a298a8bda4133dba2_Untitled%20design%20(7)%20(2).png" />
      <Employee name="Woman" role={role} img="https://assets.website-files.com/611648b6262a801811180f6c/622a840a298a8bda4133dba2_Untitled%20design%20(7)%20(2).png"/>
      <Employee name="Woman" role={role} img="https://assets.website-files.com/611648b6262a801811180f6c/622a840a298a8bda4133dba2_Untitled%20design%20(7)%20(2).png"/>
      <Employee name="Woman" role={role} img="https://assets.website-files.com/611648b6262a801811180f6c/622a840a298a8bda4133dba2_Untitled%20design%20(7)%20(2).png"/>
      <Employee name="Woman" role={role} img="https://assets.website-files.com/611648b6262a801811180f6c/622a840a298a8bda4133dba2_Untitled%20design%20(7)%20(2).png"/>
      <Employee name="Woman" role={role} img="https://assets.website-files.com/611648b6262a801811180f6c/622a840a298a8bda4133dba2_Untitled%20design%20(7)%20(2).png"/>
      <Employee name="Woman" role={role} img="https://assets.website-files.com/611648b6262a801811180f6c/622a840a298a8bda4133dba2_Untitled%20design%20(7)%20(2).png"/>
      <Employee name="Woman" role={role} img="https://assets.website-files.com/611648b6262a801811180f6c/622a840a298a8bda4133dba2_Untitled%20design%20(7)%20(2).png"/>
      <Employee name="Woman" role={role} img="https://assets.website-files.com/611648b6262a801811180f6c/622a840a298a8bda4133dba2_Untitled%20design%20(7)%20(2).png"/>
      </div>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
