/* eslint-disable react/prop-types */

import { useTranslation } from 'react-i18next';

const PlaceMapContainer = ({ onClick }) => {
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
            <p>Walewice 39</p>
            <p>99-423 Walewice</p>
            <p data-empty>&nbsp;</p>
            <p>
              <span className="Place__map-card-descriptionBold">
                {t('PLACE.MAP_TELEPHONE')}
              </span>
              730-118-500{' '}
            </p>
            <p data-empty>&nbsp;</p>
            <p className="Place__map-card-descriptionBold">Email:</p>
            <p>kontakt@fundacja.hematologiczna.org</p>
          </div>
        </div>

        <div className="Place__map-img" onClick={onClick} />
      </div>
    </div>
  );
};

export default PlaceMapContainer;
