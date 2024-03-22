class Contact {
    name: string;
    email: string;
    phone?: string; // Assuming phone is optional
    group?: string; 
  
    constructor(name: string, email: string, phone?: string) {
      this.name = name;
      this.email = email;
      this.phone = phone;
    }
  }
export default Contact;