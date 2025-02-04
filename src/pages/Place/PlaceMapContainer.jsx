import { useTranslation } from 'react-i18next';

const PlaceMapContainer = () => {
  const { t } = useTranslation();

  return (
    <div className="Place-map-container">
      <div className="Place__map">
        <div className="Place__map-card">
          <h2 className="Place__map-card-title">{t('PLACE.MAP_TITLE')}</h2>

          <div className="Place__map-card-description">
            <p className="Place__map-card-descriptionBold">
              {t('PLACE.MAP_PLACE')}
            </p>
            <p>{t('PLACE.MAP_PLACE_NAME')}</p>
            <p data-empty>&nbsp;</p>
            <p className="Place__map-card-descriptionBold">
              {t('PLACE.MAP_ADDRESS')}
            </p>
            <p data-empty>&nbsp;</p>
            <p>
              <span className="Place__map-card-descriptionBold">
                {t('PLACE.MAP_TELEPHONE')}
              </span>
              730-118-500{' '}
            </p>
            <p data-empty>&nbsp;</p>
            <p className="Place__map-card-descriptionBold">E-mail:</p>
            <p>gala@fundacja.hematologiczna.org</p>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.8922222480323!2d20.070412997686358!3d52.067129185931705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471be10fdcefffff%3A0x51df7d606291ae13!2sMuseum%20in%20Niebor%C3%B3w%20and%20Arkadia!5e1!3m2!1sen!2spl!4v1738224097082!5m2!1sen!2spl"
          className="Place__map-img"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default PlaceMapContainer;
