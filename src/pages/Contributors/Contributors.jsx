import '../../styles/index.scss';
import './contributors.scss';
import { Button } from '../../components/Button/Button.jsx';
import { useTranslation } from 'react-i18next';

const Contributors = () => {
  const { t } = useTranslation();
  const patronHonorowy = Array.from({ length: 6 }, (_, i) => i + 1);
  const patronMedialny = Array.from({ length: 6 }, (_, i) => i + 1);
  const patron = Array.from({ length: 5 }, (_, i) => i + 1);
  const partnerzy = Array.from({ length: 83 }, (_, i) => i + 1);

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
              <p className="Contributors__topContainer-description">
                {t('CONTRIBUTORS.HEADER_BODY_1')}
                <p>&nbsp;</p>
                {t('CONTRIBUTORS.HEADER_BODY_2')}
              </p>
            </div>
          </div>
        </div>

        <section className="Contributors__partners">
          <div className="Contributors__partners-container">
            <div className="Contributors__partners-grid">
              {patronHonorowy.map((i) => (
                <div
                  className="Contributors__partners-grid--item"
                  key={`patronHonorowy ${i}`}>
                  <img
                    className="Contributors__partners-grid--item--img"
                    src={`./partners&contibutors/patroniHonorowi/patron-${i}.png`}
                    alt={`Obrazek ${i}`}
                    loading="lazy"
                  />
                </div>
              ))}

              {patronMedialny.map((i) => (
                <div
                  className="Contributors__partners-grid--item"
                  key={`patronMedialny ${i}`}>
                  <img
                    className="Contributors__partners-grid--item--img"
                    key={i}
                    src={`./partners&contibutors/patronMedialny/patron-${i}.jpg`}
                    alt={`Obrazek ${i}`}
                    loading="lazy"
                  />
                </div>
              ))}

              {patron.map((i) => (
                <div
                  className="Contributors__partners-grid--item"
                  key={`patron${i}`}>
                  <img
                    className="Contributors__partners-grid--item--img"
                    key={i}
                    src={`./partners&contibutors/patron/patron-${i}.jpg`}
                    alt={`Obrazek ${i}`}
                    loading="lazy"
                  />
                </div>
              ))}

              {partnerzy.map((i) => (
                <div
                  className="Contributors__partners-grid--item"
                  key={`partner${i}`}>
                  <img
                    className="Contributors__partners-grid--item--img"
                    key={i}
                    src={`./partners&contibutors/partnerzy/patron-${i}.jpg`}
                    alt={`Obrazek ${i}`}
                    loading="lazy"
                  />
                </div>
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
                navigateTo={'/about'}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contributors;
