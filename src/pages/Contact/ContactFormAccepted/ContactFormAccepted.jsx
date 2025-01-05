/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import { Button } from '../../../components/Button/Button';
import './ContactForm.scss';

const ContactFormAccepted = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <section className="acknowledgement">
      <div className="acknowledgement__container">
        <h2 className="acknowledgement__title">{t('CONTACT.ACCEPT_TITLE')}</h2>
        <img
          src="./envelope.svg"
          alt="Wysłane poprrawnie"
          className="acknowledgement__image"
        />
        <p className="acknowledgement__description">
          {t('CONTACT.ACCEPT_BODY')}
        </p>
        <div className="acknowledgement__button" onClick={onClick}>
          <Button
            navigateTo="/contact"
            buttonLabel={t('CONTACT.ACCEPT_BUTTON')}
            backgroundColor="#FFFFFF"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactFormAccepted;
