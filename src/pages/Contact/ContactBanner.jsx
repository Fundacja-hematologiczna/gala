import { useTranslation } from 'react-i18next';

const ContactBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="Contact-container">
      <div className="Contact__topContainer">
        <div className="Contact__topContainer-img"></div>

        <div className="Contact__topContainer-content">
          <h1 className="Contact__topContainer-title">
            {t('CONTACT.HEADER_TITLE')}
          </h1>
          <p className="Contact__topContainer-description">
            {t('CONTACT.HEADER_BODY')}
          </p>
          <p className="Contact__topContainer-description--bold">
            {t('CONTACT.HEADER_AWAITING')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
