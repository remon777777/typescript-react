import React from 'react';
import './ContactsList.css';
import AddressBook from './AddressBook'; // Adjust the import path as needed

interface ContactsListProps {
  addressBook: AddressBook;
}

const ContactsList: React.FC<ContactsListProps> = ({ addressBook }) => {
  return (
    <div className="contacts-container">
      <h2  className="contacts-header">Contacts:</h2>
      {addressBook.contacts.map((contact, index) => (
        <div key={index}  className="contact-item">
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ContactsList;