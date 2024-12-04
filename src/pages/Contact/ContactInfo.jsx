import { useTranslation } from 'react-i18next';
import { contactData } from './Contact.data';

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="Contact__details">
      <div className="container">
        <h2 className="Contact__details-title">{t('CONTACT.INFO_TITLE')}</h2>
        <div className="Contact__details-cardsWrapper">
          {contactData.map((info) => (
            <a
              key={info.name}
              className={`Contact__details__card Contact__details__card--${info.name}`}
              href={info.href}
              target="_blank">
              <img
                className="Contact__details__card--icon"
                src={info.imgSrc}
                alt={info.imgAlt}
              />

              <p className="Contact__details__card--label">{info.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
