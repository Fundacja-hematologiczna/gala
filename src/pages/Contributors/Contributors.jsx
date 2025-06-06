import '../../styles/index.scss';
import './contributors.scss';
// import { useEffect, useState } from 'react';
import { Button } from '../../components/Button/Button.jsx';
import { useTranslation } from 'react-i18next';
// import { getLogos } from '../../api/services.js';
import { Slider } from '../../components/Slider/Slider.jsx';
import { usePartnerCategories } from '../../hooks/usePartnerCategories.js';

const Contributors = () => {
  const { t } = useTranslation();
  const { sponsor } = usePartnerCategories();

  const sponsors = [
    {
      id: 'sponsor',
      title: t('MAIN_PAGE.PARTNERS'),
      slides: sponsor,
    },
  ];

  return (
    <>
      <main className="Contributors">
        <div className="Contributors-container">
          <div className="Contributors__topContainer">
            <div className="Contributors__topContainer-img"></div>

            <div className="Contributors__topContainer-content">
              <h1 className="Contributors__topContainer-title">
                {t('CONTRIBUTORS.HEADER_TITLE')}
              </h1>
              <div className="Contributors__topContainer-description">
                {t('CONTRIBUTORS.HEADER_BODY_1')}
                <p>&nbsp;</p>
                {t('CONTRIBUTORS.HEADER_BODY_2')}
              </div>
            </div>
          </div>
        </div>

        <section className="Contributors__partners">
          <div className="Contributors__partners-container">
            <Slider patrons={sponsors} />
          </div>
        </section>

        <section className="Contributors__greenLabel">
          <div className="Contributors__greenLabel-container">
            <p className="Contributors__greenLabel-topText">
              {t('CONTRIBUTORS.JOIN_TITLE')}
            </p>
            <p className="Contributors__greenLabel-botText">
              {t('CONTRIBUTORS.JOIN_BODY')}
            </p>
            <div className="Contributors__greenLabel-button">
              <Button
                buttonLabel={t('CONTRIBUTORS.JOIN_BUTTON')}
                backgroundColor={'#FFFFFF'}
                navigateTo={'/rejestracja#platnosci'}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contributors;
