import '../../styles/index.scss';
import './contact.scss';
import { useState } from 'react';
import ContactBanner from './ContactBanner';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ContactFormAccepted from './ContactFormAccepted/ContactFormAccepted';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Przyjęte');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <main className="Contact">
        <ContactBanner />
        <ContactForm
          onSubmit={handleSubmit}
          onChange={handleChange}
          formData={formData}
        />
        <ContactInfo />
        <ContactFormAccepted />
      </main>
    </>
  );
};

export default Contact;
