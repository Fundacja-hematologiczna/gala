/* eslint-disable react/prop-types */

import { useTranslation } from 'react-i18next';

const ContactForm = ({ onChange, onSubmit, formData }) => {
  const { t } = useTranslation();

  return (
    <section className="Contact__form">
      <div className="container">
        <h2 className="Contact__form-title">{t('CONTACT.FORM_TITLE')}</h2>

        <form onSubmit={onSubmit}>
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
                required
              />
            </div>
          </div>
          <p className="Contact__form-description">
            {t('CONTACT.FORM_WARNING')}
          </p>

          <button className="Contact__form-button" type="submit">
            {t('CONTACT.FORM_BUTTON')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
