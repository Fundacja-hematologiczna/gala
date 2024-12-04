import { useTranslation } from 'react-i18next';

const PlaceBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="Place-container-top">
      <div className="Place__topContainer">
        <div className="Place__topContainer-greenLayer"></div>

        <h1 className="Place__topContainer-title">{t('PLACE.HEADER_TITLE')}</h1>
        <p
          className="Place__topContainer-description"
          style={{ whiteSpace: 'pre-line' }}>
          {t('PLACE.HEADER_BODY')}
        </p>
      </div>
    </div>
  );
};

export default PlaceBanner;
