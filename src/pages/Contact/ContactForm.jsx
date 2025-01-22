/* eslint-disable react/prop-types */

import { useTranslation } from 'react-i18next';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useRef, useState, useEffect } from 'react';

const ContactForm = ({ onChange, onSubmit, formData }) => {
  const { t } = useTranslation();
  const hCaptchaSiteKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY;
  const hcaptchaRef = useRef(null);
  const [isVerified, setIsVerified] = useState(false);
  const [captchaSize, setCaptchaSize] = useState('normal');

  const handlerCheckVerified = (e) => {
    e.preventDefault();

    if (!isVerified) {
      return alert('Proszę potwierdzić, że jesteś człowiekiem.');
    } else {
      onSubmit(e);
    }
  };

  const handleHCaptcha = () => {
    const res = hcaptchaRef.current.getResponse();

    if (res) {
      setIsVerified(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setCaptchaSize(window.innerWidth < 1200 ? 'compact' : 'normal');
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="Contact__form">
      <div className="container">
        <h2 className="Contact__form-title">{t('CONTACT.FORM_TITLE')}</h2>
        <form onSubmit={(e) => handlerCheckVerified(e)}>
          <div className="Contact__form__fieldsGrid">
            <div className="Contact__form-field Contact__form-field--1">
              <label className="Contact__form-label">
                {t('CONTACT.FORM_NAME')}
              </label>
              <input
                className="Contact__form-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={onChange}
                title="Fill is required"
                required
              />
            </div>

            <div className="Contact__form-field Contact__form-field--2">
              <label className="Contact__form-label">
                {t('CONTACT.FORM_EMAIL')}
              </label>
              <input
                className="Contact__form-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                title="Fill is required"
                required
              />
            </div>

            <div className="Contact__form-field Contact__form-field--3">
              <label className="Contact__form-label">
                {t('CONTACT.FORM_MESSAGE')}
              </label>
              <textarea
                className=" Contact__form-input Contact__form-input--big"
                name="message"
                value={formData.message}
                onChange={onChange}
                title="Fill is required"
                required
              />
            </div>
          </div>
          <p className="Contact__form-description">
            {t('CONTACT.FORM_WARNING')}
          </p>

          <HCaptcha
            className="h-captcha"
            sitekey={hCaptchaSiteKey} // trzeba założyc konto fundacyjne na hcaptcha.com i pobrac sitekey
            ref={hcaptchaRef}
            onVerify={handleHCaptcha}
            size={captchaSize}
          />

          <button className="Contact__form-button" type="submit">
            {t('CONTACT.FORM_BUTTON')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
