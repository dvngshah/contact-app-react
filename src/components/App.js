import './App.css';
import React, {useState} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const [contacts, setContact] = useState([]);

  const addContactHandler = (contact) => {
    setContact([...contacts, contact])
  }


  return (

    <div className='ui container'>
      <Header />
      <AddContact addContactHandler = {addContactHandler} />

      {/* Passing props from parent to child */}
      <ContactList contacts = {contacts} />
  </div>
  );
}

export default App;
