import { useTranslation } from 'react-i18next';
import '../../styles/index.scss';
import './auction.scss';

const Program = () => {
  const { t } = useTranslation();

  return (
    <>
      <main className="Auction">
        <div className="Auction-container">
          <div className="Auction__topContainer">
            <div className="Auction__topContainer-greenLayer">
              <div className="Auction__topContainer-content">
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
            </div>
          </div>

          <section className="Auction__agenda1">
            <div className="Auction__agenda-container">
              <h2 className="Auction__agenda1-title">
                {' '}
                {t('AUCTION.ITEMS_TITLE')}
              </h2>

              <div className="Auction__agenda1-grid">
                <div className="Auction__agenda1-grid--item"></div>
                <div className="Auction__agenda1-grid--item"></div>
                <div className="Auction__agenda1-grid--item"></div>
                <div className="Auction__agenda1-grid--item"></div>
                <div className="Auction__agenda1-grid--item"></div>
                <div className="Auction__agenda1-grid--item"></div>
                <div className="Auction__agenda1-grid--item"></div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Program;
