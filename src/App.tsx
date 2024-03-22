import React, { useState } from 'react';
import './App.css';
import  AddressBook  from './AddressBook'; // Adjust the import path as needed
import ContactsList from './ContactsList';
import AddContactForm from './AddContactForm';

const App: React.FC = () => {
  const [addressBook] = useState(new AddressBook());

  const refreshContacts = () => {
    // This function forces the ContactsList to re-render
    // by changing the key prop, effectively creating a new instance
    setKey(Math.random());
  };

  const [key, setKey] = useState<number>(Math.random());

  return (
    <div className="App">
      <h1>My Address Book</h1>
      <AddContactForm addressBook={addressBook} onContactAdded={refreshContacts} />
      <ContactsList key={key} addressBook={addressBook} />
    </div>
  );
};

export default App;