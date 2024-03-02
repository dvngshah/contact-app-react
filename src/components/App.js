import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const LOCAL_STORAGE_KEY = 'contacts';

  const [contacts, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  });


  //Adding the contact
  const addContactHandler = (contact) => {
    setContact([...contacts, {id: uuidv4(), ...contact}]);
  }

  //Deleting the contact
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContact(newContactList);
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  
  useEffect(() => {
   const retrivedContacts =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if(retrivedContacts > 0){
    setContact(retrivedContacts);
   }
  }, []);

  return (

    <div className='ui container'>
      <Header />
      <AddContact addContactHandler = {addContactHandler} />

      <ContactList contacts = {contacts} getContactId={removeContactHandler}/>
  </div>
  );
}

export default App;
