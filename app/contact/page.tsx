// pages/contact.tsx

import React from "react";

const Contact: React.FC = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
      <p className='text-lg mb-4'>
        Have questions or feedback? Reach out to us using the information below:
      </p>
      <p className='text-lg mb-2'>Email: contact@example.com</p>
      <p className='text-lg mb-2'>Phone: (123) 456-7890</p>
      <p className='text-lg mb-2'>Address: 123 Main Street, Cityville</p>
    </div>
  );
};

export default Contact;
