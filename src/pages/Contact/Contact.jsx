import '../../styles/index.scss';
import './contact.scss';
import { useState } from 'react';
import ContactBanner from './ContactBanner';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ContactFormAccepted from './ContactFormAccepted/ContactFormAccepted';
import useScrollLock from '../../hooks/useScrollLock.hook';
import { sendContactForm } from '../../api/services.js';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isAcknowledgementOpen, setIsAcknowledgementOpen] = useState(false);

  useScrollLock(isAcknowledgementOpen);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('wysylanie');

    try {
      const result = await sendContactForm(formData);

      console.log(result);

      if (result.status === 'success') {
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setIsAcknowledgementOpen(true);
      } else {
        alert(result.error || 'Wystąpił problem podczas wysyłania wiadomości.');
      }
    } catch (error) {
      console.error('Błąd wysyłania formularza:', error);
      alert('Nie udało się wysłać wiadomości. Spróbuj ponownie później.');
    }
  };

  const handleClickCloseAccept = () => {
    setIsAcknowledgementOpen(false);
    window.location.reload();
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
        {isAcknowledgementOpen && (
          <ContactFormAccepted onClick={handleClickCloseAccept} />
        )}
      </main>
    </>
  );
};

export default Contact;
