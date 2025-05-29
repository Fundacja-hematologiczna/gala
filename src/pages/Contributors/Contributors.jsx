import '../../styles/index.scss';
import './contributors.scss';
import { useEffect, useState } from 'react';
import { Button } from '../../components/Button/Button.jsx';
import { useTranslation } from 'react-i18next';
import { getLogos } from '../../api/services.js';

const Contributors = () => {
  const [logos, setLogos] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    getLogos()
      .then((response) => {
        if (response.data.data && Array.isArray(response.data.data)) {
          const logosForGala = response.data.data.filter(
            (logo) => logo.on_gala === true && logo.gala_category,
          );
          setLogos(logosForGala);
        }
      })
      .catch((e) => {
        console.error('Błąd podczas pobierania danych:', e);
      });
  }, []);

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
            <div className="Contributors__partners-grid">
              {logos.map((logo) => (
                <a
                  href={logo.link}
                  key={`patron ${logo.id}`}
                  target="blank"
                  rel="noopener noreferrer">
                  <div className="Contributors__partners-grid--item">
                    <img
                      className="Contributors__partners-grid--item--img"
                      src={logo.logo}
                      alt={`logo - ${logo.title}`}
                      loading="lazy"
                    />
                  </div>
                </a>
              ))}
            </div>
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
