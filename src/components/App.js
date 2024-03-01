import './App.css';
import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const contacts = [

  {
    id: 2,
    name: 'Devang',
    email: 'devang@gmail.com'

  },

  {
    id: 2,
    name: 'John',
    email: 'john@gmail.com'
  }

  ]
  return (

    <div className='ui container'>
      <Header />
      <AddContact />

      {/* Passing props from parent to child */}
      <ContactList contacts = {contacts} />
  </div>
  );
}

export default App;
