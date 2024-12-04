import { useTranslation } from 'react-i18next';
import '../../styles/index.scss';
import './auction.scss';
import { Button } from '../../components/Button/Button';

const Program = () => {
  const { t } = useTranslation();

  return (
    <>
      <main className="Auction">
        <section className="Auction__sectionWelcome">
          <div className="Auction__topContainer">
            <div className="Auction__topContainer-greenLayer"></div>
            <h1 className="Auction__topContainer-title">
              {t('AUCTION.HEADER_TITLE')}
            </h1>
            <p className="Auction__topContainer-description">
              {t('AUCTION.HEADER_BODY')}
            </p>
            <div className="Auction__topContainer-bigText">
              {t('AUCTION.HEADER_AWAITING')}
            </div>
          </div>
        </section>

        <section className="Auction__agenda1">
          <div className="container">
            <div className="Auction__agenda-container">
              <h2 className="Auction__agenda1-title">
                {t('AUCTION.ITEMS_TITLE')}
              </h2>
              <div className="Auction__agenda1__greenCard">
                <h3 className="Auction__agenda1__greenCard-title">
                  Zobacz listę przedmiotow
                </h3>
                <div className="Auction__agenda1__greenCard-buttonWrapper">
                  <Button
                    buttonLabel={'Katalog aukcji'}
                    backgroundColor={'#B7C274'}
                    navigateTo={'/about'}
                    arrow={'true'}
                  />
                </div>
              </div>

              {/* <div className="Auction__agenda1-grid">
                <div className="Auction__agenda1-grid--item"></div>
                <div className="Auction__agenda1-grid--item"></div>
                <div className="Auction__agenda1-grid--item"></div>
                <div className="Auction__agenda1-grid--item"></div>
                <div className="Auction__agenda1-grid--item"></div>
                <div className="Auction__agenda1-grid--item"></div>
                <div className="Auction__agenda1-grid--item"></div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Program;
