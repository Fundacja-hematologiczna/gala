import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

export const HomeDonate = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <section className="Home__donateItem">
      <div className="Home__donateItem-container">
        <div className="Home__donateItem-image"></div>
        <div className="Home__donateItem__contentWrapper">
          <h2 className="Home__donateItem-title">
            {t('MAIN_PAGE.AUCTION_ITEM_TITLE')}
          </h2>
          <p className="Home__donateItem-description">
            {t('MAIN_PAGE.AUCTION_ITEM_BODY')}
          </p>
          <div className="Home__donateItem__buttons">
            <button
              className="Home__donateItem__buttons-button"
              onClick={() => onClick('/contributors')}>
              {t('MAIN_PAGE.AUCTION_ITEM_BUTTON_1')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

HomeDonate.propTypes = {
  onClick: PropTypes.func,
};
