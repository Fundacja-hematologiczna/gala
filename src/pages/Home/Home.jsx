import { Card } from '../../components/Card/Card.jsx';
import { Button } from '../../components/Button/Button';
import './home.scss';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import { Slider } from '../../components/Slider/Slider.jsx';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = (navigateTo) => {
    navigate(navigateTo);
  };

  return (
    <>
      <main className="Home">
        <section className="home__sectionWelcome">
          <div className="sectionWelcome__container">
            <div className="greenLabel"></div>
            <div className=" sectionWelcome__textComntainer">
              <h1
                className="sectionWelcome-title"
                style={{ whiteSpace: 'pre-line' }}>
                {t('MAIN_PAGE.HEADER_TITLE')}
              </h1>
              <p className="sectionWelcome-date">
                {t('MAIN_PAGE.HEADER_DATE')}
              </p>

              <p
                className="sectionWelcome-description"
                style={{ whiteSpace: 'pre-line' }}>
                {t('MAIN_PAGE.HEADER_BODY')}
              </p>

              <div className="Home__sectionWelcome-button">
                <Button
                  buttonLabel={t('MAIN_PAGE.HEADER_BUTTON')}
                  backgroundColor={'#B7C274'}
                  navigateTo={'/about'}
                  arrow={'true'}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="home__sectionWelcomeMobile">
          <div className="home__sectionWelcomeMobile__buttons">
            <Button
              buttonLabel={t('MAIN_PAGE.MOBILE_BUTTON_1')}
              backgroundColor={'#B7C274'}
              navigateTo={'/about'}
            />
            <Button
              buttonLabel={t('MAIN_PAGE.MOBILE_BUTTON_2')}
              backgroundColor={'#FFFFFF'}
              navigateTo={'/about'}
              border={'1px solid #000000'}
            />
          </div>
          <div className="home__sectionWelcomeMobile__titleContainer">
            <h1 className="home__sectionWelcomeMobile__titleContainer-title">
              {t('MAIN_PAGE.HEADER_TITLE')}
            </h1>
            <p className="home__sectionWelcomeMobile__titleContainer-description">
              {t('MAIN_PAGE.HEADER_DATE')}
            </p>
          </div>
          <div className="home__sectionWelcomeMobile-video"></div>
        </section>

        <section className="Home__section2">
          <div className="container Home__section2-container">
            <div className="Home__section2__personCard">
              <div className="Home__section2__personCard-image"></div>
              <p className="Home__section2__personCard-name">
                {' '}
                dr Michał Witkowski{' '}
              </p>
              <p className="Home__section2__personCard-description">
                {t('MAIN_PAGE.CEO_POSITION')}
              </p>
            </div>

            <div className="Home__section2__grayCard">
              <img
                className="Home__section2__grayCard-item Home__section2__grayCard-item--1"
                src="/home-GrayCard-item.svg"
                alt=""
              />
              <img
                className="Home__section2__grayCard-item Home__section2__grayCard-item--2"
                src="/home-GrayCard-item.svg"
                alt=""
              />
              <h2 className="Home__section2__grayCard-title">
                {t('MAIN_PAGE.CEO_TITLE')}
                <p className="Home__section2__grayCard-smallDesctription">
                  <p>&nbsp;</p>
                  {t('MAIN_PAGE.CEO_BODY.1')}
                  <p>&nbsp;</p>
                  {t('MAIN_PAGE.CEO_BODY.2')}
                  <p>&nbsp;</p>
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

          <div className="Home__section2__cards">
            <Card
              iconLink={'card1-icon.svg'}
              title={t('MAIN_PAGE.CHARITY_AUCTION_BODY')}
              description={t('MAIN_PAGE.CHARITY_AUCTION_TITLE')}
              buttonLabel={t('MAIN_PAGE.CHARITY_AUCTION_BUTTON')}
              navigateTo={'/about'}
              backgroundColor={'#B7C274'}
            />
            <Card
              iconLink={'Card2-icon.png'}
              title={t('MAIN_PAGE.DONORS_BODY')}
              description={t('MAIN_PAGE.DONORS_TITLE')}
              buttonLabel={t('MAIN_PAGE.DONORS_BUTTON')}
              navigateTo={'/about'}
              backgroundColor={'#E5E9CD'}
              scale={'160%'}
            />
            <Card
              iconLink={'card3-icon.svg'}
              title={t('MAIN_PAGE.VOLUNTEERS_BODY')}
              description={t('MAIN_PAGE.VOLUNTEERS_TITLE')}
              buttonLabel={t('MAIN_PAGE.VOLUNTEERS_BUTTON')}
              navigateTo={'/about'}
              backgroundColor={'#99ADAA'}
            />
          </div>
        </section>

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
                  onClick={handleClick}>
                  {t('MAIN_PAGE.AUCTION_ITEM_BUTTON_1')}
                </button>
                <button
                  className="Home__donateItem__buttons-button"
                  onClick={() => {
                    handleClick('/about');
                  }}>
                  {t('MAIN_PAGE.AUCTION_ITEM_BUTTON_2')}
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="Home__cards">
          <div className="Home__cards-container">
            <Card
              iconLink={'card4-icon.svg'}
              title={t('MAIN_PAGE.ATTRACTIONS_BODY')}
              description={t('MAIN_PAGE.ATTRACTIONS_TITLE')}
              buttonLabel={t('MAIN_PAGE.ATTRACTIONS_BUTTON')}
              navigateTo={'/about'}
              backgroundColor={'#E5E9CD'}
            />
            <Card
              iconLink={'card5-icon.svg'}
              title={t('MAIN_PAGE.PALACE_BODY')}
              description={t('MAIN_PAGE.PALACE_TITLE')}
              buttonLabel={t('MAIN_PAGE.PALACE_BUTTON')}
              navigateTo={'/about'}
              backgroundColor={'#99ADAA'}
            />
            <Card
              iconLink={'card6-icon.svg'}
              title={t('MAIN_PAGE.PLACE_BODY')}
              description={t('MAIN_PAGE.PLACE_TITLE')}
              buttonLabel={t('MAIN_PAGE.PLACE_BUTTON')}
              navigateTo={'/about'}
              backgroundColor={'#F3F2F2'}
            />
          </div>
        </section>
        <section className="Home-atrakcje">
          <div className="Home-atrakcje-img"></div>
        </section>

        <section className="Home__partners">
          <div className="Home__partners-Backgroundimg">
            <div className="Home__partners-container">
              <p className="Home__partners-description">
                {t('MAIN_PAGE.WAITING_TITLE_1')}
                <br /> {t('MAIN_PAGE.WAITING_TITLE_2')}
              </p>
              <div className="Home__partners-buttonWrapper">
                <Button
                  buttonLabel={t('MAIN_PAGE.WAITING_BUTTON')}
                  backgroundColor={'#B7C274'}
                  navigateTo={'/about'}
                  arrow={true}
                />
              </div>
            </div>
          </div>

          <h2 className="Home__partners-title">
            {t('MAIN_PAGE.DONORS_PARTNERS')}
          </h2>
          <div className="Home__partners-slider">
            <Slider />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
