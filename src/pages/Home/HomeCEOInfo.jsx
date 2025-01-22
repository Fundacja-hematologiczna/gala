import { useTranslation } from 'react-i18next';
import HomeCEOCards from './HomeCEOCards';

const HomeCEOInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="Home__section2">
      <div className="container Home__section2-container">
        <div className="Home__section2__personCard">
          <div className="Home__section2__personCard-image"></div>
          <p className="Home__section2__personCard-name">dr Michał Witkowski</p>
          <p className="Home__section2__personCard-description">
            {t('MAIN_PAGE.CEO_POSITION')}
          </p>
        </div>
        <div className="Home__section2__grayCard">
          <img
            className="Home__section2__grayCard-item Home__section2__grayCard-item--1"
            src="/gala/home-GrayCard-item.svg"
            alt=""
          />
          <img
            className="Home__section2__grayCard-item Home__section2__grayCard-item--2"
            src="/gala/home-GrayCard-item.svg"
            alt=""
          />
          <h2 className="Home__section2__grayCard-title">
            {t('MAIN_PAGE.CEO_TITLE')}
            <p className="Home__section2__grayCard-smallDesctription">
              <p>&nbsp;</p> {t('MAIN_PAGE.CEO_BODY.1')} <p>&nbsp;</p>
              {t('MAIN_PAGE.CEO_BODY.2')} <p>&nbsp;</p>
            </p>
            <p className="Home__section2__grayCard-smallDesctription--bold">
              {t('MAIN_PAGE.CEO_BODY.3')}
            </p>
          </h2>
          <div className="Home__section2__grayCard__personCard">
            <div className="Home__section2__grayCard__personCard-image"></div>
            <div className="Home__section2__grayCard__personCard-text">
              <p className=" Home__section2__grayCard__personCard-text--bold">
                dr Michał Witkowski
              </p>
              <p>{t('MAIN_PAGE.CEO_POSITION')}</p>
            </div>
          </div>
        </div>
      </div>
      <HomeCEOCards />
    </section>
  );
};

export default HomeCEOInfo;
