import  Contact  from './Contact';

class AddressBook {
    contacts: Contact[] = [];
  
    addContact(contact: Contact): void {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contact.email)) {
        throw new Error("Invalid email format");
      }

      // Name validation (example - check for empty name)
      if (!contact.name || contact.name.trim() === "") {
        throw new Error("Name cannot be empty");
      }

      if (contact.phone && !/^\d{3}-\d{3}-\d{4}$/.test(contact.phone)) {
        throw new Error("Invalid phone number format");
      }
  
      // You can add further validations for phone number format, etc.
  
      this.contacts.push(contact);
    }
  
    findContactByName(name: string): Contact | undefined {
      return this.contacts.find((contact) => contact.name === name);
    }
  
    filterByGroup(group: string): Contact[] {
      return this.contacts.filter((contact) => contact.group === group);
    }
  
    sortByName(): void {
      this.contacts.sort((a, b) => a.name.localeCompare(b.name));
    }
  
    // New functionalities:
    // 1. Validate various contact properties on addition (already implemented)
    // 2. Search contacts by name (partial match)
  
    searchContacts(searchTerm: string): Contact[] {
      const normalizedSearchTerm = searchTerm.toLowerCase();
      return this.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedSearchTerm) ||
      contact.email.toLowerCase().includes(normalizedSearchTerm) ||
      (contact.phone && contact.phone.includes(searchTerm))
    );
  }
  
    printContacts(): void {
      for (const contact of this.contacts) {
        console.log(`Name: ${contact.name}`);
        console.log(`Email: ${contact.email}`);
        console.log(`Phone: ${contact.phone}`);
        console.log("-----");
      }
    }

updateContactGroup(name: string, newGroup: string): void {
  const contact = this.contacts.find((contact) => contact.name === name);
  if (contact) {
    contact.group = newGroup;
  } else {
    throw new Error("Contact not found");
  }
}
  }
  
  const addressBook = new AddressBook();
  
  const contact1 = new Contact("John Doe", "johndoe@example.com", "123-456-7890");
  const contact2 = new Contact("Alice Smith", "alice.smith@invalid", "456-789-0123"); // Invalid email
  const contact3 = new Contact("", "valid@email.com", "789-012-3456"); // Empty name
  
  addressBook.addContact(contact1);
  
  try {
    addressBook.addContact(contact2); // This will throw an error (invalid email)
    addressBook.addContact(contact3); // This will throw an error (empty name)
  } catch (error: unknown) {
    if (error instanceof Error) {
    console.error("Error adding contact:", error.message);
  } else {
    console.error("Unexpected error type:", error);
  }
  }
  
  console.log("Contacts:");
  addressBook.printContacts();
  
  // Example usage of new search functionality
  const searchResults = addressBook.searchContacts("john");
  console.log("Search results (name containing 'john'):");
  searchResults.forEach((contact) => console.log(`  - ${contact.name}`));

  export default AddressBook