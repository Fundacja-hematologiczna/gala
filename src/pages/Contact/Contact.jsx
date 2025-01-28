import '../../styles/index.scss';
import './contact.scss';
import { useState } from 'react';
import ContactBanner from './ContactBanner';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ContactFormAccepted from './ContactFormAccepted/ContactFormAccepted';
import useScrollLock from '../../hooks/useScrollLock.hook';

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

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setIsAcknowledgementOpen(true);
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
