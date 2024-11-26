import { useTranslation } from 'react-i18next';

const PlaceBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="Place__topContainer">
      <div className="Place__topContainer-greenScreen">
        <div className="Place__topContainer-content">
          <h1 className="Place__topContainer-title">
            {t('PLACE.HEADER_TITLE')}
          </h1>
          <p className="Place__topContainer-description">
            {t('PLACE.HEADER_BODY')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceBanner;
