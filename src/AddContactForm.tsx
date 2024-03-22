import React, { useState } from 'react';
import  AddressBook from './AddressBook'; // Adjust the import path as needed
import  Contact from './Contact';
import "./AddContactForm.css"

interface AddContactFormProps {
  addressBook: AddressBook;
  onContactAdded: () => void; // Callback to refresh the contact list
}

const AddContactForm: React.FC<AddContactFormProps> = ({ addressBook, onContactAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const newContact = new Contact(name, email, phone);
      addressBook.addContact(newContact);
      onContactAdded(); // Refresh the contact list
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required className="input-field" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="input-field" />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (optional)" className="input-field" />
      <button type="submit"  className="submit-btn">Add Contact</button>
    </form>
  );
};

export default AddContactForm;