import { useTranslation } from 'react-i18next';
import '../../styles/index.scss';
import './auction.scss';

const Program = () => {
  const { t } = useTranslation();

  const handleClickDownload = async () => {
    try {
      const response = await fetch('/api/itemCatalog.json');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const link = document.createElement('a');

      link.href = data.link;
      link.setAttribute('download', '');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error('Something goes wrong: ', e);
    }
  };

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
                  {t('AUCTION.ITEMS_LABEL_TITLE')}
                </h3>
                <div className="Auction__agenda1__greenCard-buttonWrapper">
                  {/* <Button
                    buttonLabel={t('AUCTION.ITEMS_LABEL_BUTTON')}
                    backgroundColor={'#B7C274'}
                    navigateTo={'/about'}
                    arrow={'true'}
                  /> */}
                  <button
                    className="Auction__button"
                    onClick={handleClickDownload}>
                    {t('AUCTION.ITEMS_LABEL_BUTTON')}
                  </button>
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
