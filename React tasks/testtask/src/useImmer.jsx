import { useState } from 'react';
import { u } from 'immer';

import './App.css';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Haris',
    lastName: 'Jadoon',
    email: 'kharis76@gmail.com',
    cnic: '13101-3453453-5',
  });

  function handleFirstNameChange(e) {
    setPerson(produce(draft => {
      draft.firstName = e.target.value;
    }));
  }

  function handleLastNameChange(e) {
    setPerson(produce(draft => {
      draft.lastName = e.target.value;
    }));
  }

  function handleCnicChange(e) {
    setPerson(produce(draft => {
      draft.cnic = e.target.value;
    }));
  }

  function handleEmailChange(e) {
    setPerson(produce(draft => {
      draft.email = e.target.value;
    }));
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
        {person.firstName} {person.lastName} {person.cnic} ({person.email})
      </p>
    </>
  );
}
