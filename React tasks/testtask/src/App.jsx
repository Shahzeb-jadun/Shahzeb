import { useState } from 'react'
import { useImmer } from 'use-immer';


import './App.css'

// function App() {
//   const [count, setCount] = useState(0)



  export default function Form () {
    const [person, setPerson] = useImmer({
      firstName: ' ',
      lastName: ' ',
      email: ' ',
      cnic: ' ',
    });
  
    function handleFirstNameChange(e) {
      setPerson(draft => {
        // ...person,
        // firstName: e.target.value
          draft.firstName = e.target.value;
      });
    }
  
    function handleLastNameChange(e)  {
      setPerson( draft =>{
        // ...person,
        // lastName: e.target.value
        draft.lastName = e.target.value;

      });
    }

    

    function handleCnicChange(e)  {
      setPerson( draft =>{
        // ...person,
        // cnic: e.target.value
        draft.cnic = e.target.value;

      });
    }
    function handleEmailChange(e) {
      setPerson(draft =>{
        // ...person,
        // email: e.target.value
        draft.email = e.target.value;


      });
    }

  return (
    <>
       <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>

      <label>
        CNIC:
        <input
          value={person.cnic}
          onChange={handleCnicChange}
        />
      </label>

      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      
      <p>
        First Name{person.firstName}{' '}<br/>
        Last Name: {person.lastName}{' '}<br/>
        CNIC No: {person.cnic}{' '}<br/>
        Email: 
        
         {person.email}
      </p>


    </>
  )
}


