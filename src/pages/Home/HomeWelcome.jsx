import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/Button/Button';

const propTypes = {
  photoChanging: PropTypes.boolean,
  welcomeSectionPhotos: PropTypes.array,
  welcomeSectionImage1: PropTypes.number,
  welcomeSectionImage2: PropTypes.number,
};

export const HomeWelcome = ({
  photoChanging,
  welcomeSectionPhotos,
  welcomeSectionImage1,
  welcomeSectionImage2,
}) => {
  const { t } = useTranslation();

  return (
    <section className="home__sectionWelcome">
      <div className="sectionWelcome__container">
        <div className="greenLabel"></div>
        <img
          className={classNames(
            'sectionWelcome__container__image sectionWelcome__container__image--1',
            { seen: photoChanging },
          )}
          src={welcomeSectionPhotos[welcomeSectionImage1]}
        />
        <img
          className={classNames(
            'sectionWelcome__container__image sectionWelcome__container__image--2',
            { seen: !photoChanging },
          )}
          src={welcomeSectionPhotos[welcomeSectionImage2]}
        />
        <div className=" sectionWelcome__textComntainer">
          <h1
            className="sectionWelcome-title"
            style={{ whiteSpace: 'pre-line' }}>
            {t('MAIN_PAGE.HEADER_TITLE')}
          </h1>
          <p className="sectionWelcome-date">{t('MAIN_PAGE.HEADER_DATE')}</p>
          <p
            className="sectionWelcome-description"
            style={{ whiteSpace: 'pre-line' }}>
            {t('MAIN_PAGE.HEADER_BODY')}
          </p>
          <div className="Home__sectionWelcome-button">
            <Button
              buttonLabel={t('MAIN_PAGE.HEADER_BUTTON')}
              backgroundColor={'#B7C274'}
              navigateTo={'/rejestracja'}
              arrow={'true'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

HomeWelcome.propTypes = propTypes;
