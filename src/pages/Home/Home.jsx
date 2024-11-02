import { Card } from '../../components/Card/Card.jsx';
import { Button } from '../../components/Button/Button';
import './home.scss';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import { Slider } from '../../components/Slider/Slider.jsx';

const Home = () => {
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
              <h1 className="sectionWelcome-title">
                III Gala <br />
                Charytatywna <br /> w Walewicach
              </h1>
              <p className="sectionWelcome-date">Sobota, 14 września 2024</p>

              <p className="sectionWelcome-description">
                Serdecznie zapraszamy na trzecią <br /> edycję Gali
                Charytatywnej <br />
                organizowanej w malowniczych <br /> Walewicach.
              </p>

              <div className="Home__sectionWelcome-button">
                <Button
                  buttonLabel={'Zgłoś swój udział'}
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
              buttonLabel={'Zgłoś swój udział'}
              backgroundColor={'#B7C274'}
              navigateTo={'/about'}
            />
            <Button
              buttonLabel={'Przekaż darowiznę'}
              backgroundColor={'#FFFFFF'}
              navigateTo={'/about'}
              border={'1px solid #000000'}
            />
          </div>
          <div className="home__sectionWelcomeMobile__titleContainer">
            <h1 className="home__sectionWelcomeMobile__titleContainer-title">
              III Gala
              <br /> Charytatywna <br /> w Walewicach
            </h1>
            <p className="home__sectionWelcomeMobile__titleContainer-description">
              Sobota, 14 września 2024
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
                Prezes Fundacji
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
                Dołącz do nas i podaruj innym moc!
                <p className="Home__section2__grayCard-smallDesctription">
                  <p>&nbsp;</p>
                  Serdecznie zapraszamy na trzecią już w historii naszej
                  Fundacji Galę Charytatywną organizowaną w malowniczych
                  Walewicach.
                  <p>&nbsp;</p>
                  Ten wyjątkowy dzień pełen atrakcji będzie niepowtarzalną
                  okazją do wsparcia naszych działań na rzecz pacjentów
                  hematologicznych i ich rodzin. Wierzymy, że każdy zasługuje na
                  szansę na zdrowie i życie bez cierpienia. To dzięki Państwa
                  obecności i wsparciu możemy kontynuować naszą misję niesienia
                  pomocy potrzebującym.
                  <p>&nbsp;</p>
                </p>
                <p className="Home__section2__grayCard-smallDesctription--bold">
                  Dołączcie do nas, aby wspólnie celebrować życie, wspólnotę i
                  siłę ludzkiej dobroci!
                </p>
              </h2>

              <div className="Home__section2__grayCard__personCard">
                <div className="Home__section2__grayCard__personCard-image"></div>
                <div className="Home__section2__grayCard__personCard-text">
                  <p className=" Home__section2__grayCard__personCard-text--bold">
                    dr Michał Witkowski
                  </p>
                  <p>Prezes Fundacji</p>
                </div>
              </div>
            </div>
          </div>

          <div className="Home__section2__cards">
            <Card
              iconLink={'card1-icon.svg'}
              title={'Aukcja Charytatywna'}
              description={`To główny punkt programu Gali. Środki pozyskane z licytacji
                przedmiotów ofiarowanych przez Darczyńców zostaną przeznaczone na
                pomoc pacjentom z chorobami hematologicznymi, podopiecznym Fundacji.`}
              buttonLabel={'Katalog Aukcji'}
              navigateTo={'/about'}
              backgroundColor={'#B7C274'}
            />
            <Card
              iconLink={'Card2-icon.png'}
              title={'Dla Darczyńców'}
              description={`To wspaniałe wydarzenie nie odbyłoby się bez wsparcia i zaangażowania 
                Darczyńców oraz naszych Partnerów. Jeżeli widzisz tu dla siebie przestrzeń, 
                masz pomysł na udział w Gali lub po prostu chcesz podzielić się tym, 
                co najlepsze - zapraszamy do kontaktu.`}
              buttonLabel={'Zostań darczyńcą'}
              navigateTo={'/about'}
              backgroundColor={'#E5E9CD'}
              scale={'160%'}
            />
            <Card
              iconLink={'card3-icon.svg'}
              title={'Dla Wolontariuszy'}
              description={`Gala Charytatywna to przedsięwzięcie na dużą skalę. To wydarzenie, które wymaga ciągłego wsparcia przez cały rok. Jednak największy wysiłek organizacyjny przypada na czas jej trwania. Może zechcesz wesprzeć nas w tych działaniach?`}
              buttonLabel={'Zostań Wolontariuszem'}
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
                Przekaż przedmiot na Aukcję!
              </h2>
              <p className="Home__donateItem-description">
                Zebrane fundusze zostaną przeznaczone na pomoc pacjentom z
                chorobami hematologicznymi, podopiecznym Fundacji Na Rzecz
                Pomocy Chorym Na Białaczki. Nasza pomoc obejmuje m.in. wsparcie
                finansowe w kosztownej terapii, poprawę warunków hospitalizacji
                czy wdrażanie nowoczesnych metod leczenia. Pomóż nam w
                realizacji tej misji.
              </p>

              <div className="Home__donateItem__buttons">
                <button
                  className="Home__donateItem__buttons-button"
                  onClick={handleClick}>
                  Zostań darczyńcą
                </button>
                <button
                  className="Home__donateItem__buttons-button"
                  onClick={() => {
                    handleClick('/about');
                  }}>
                  Wpłać darowiznę
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="Home__cards">
          <div className="Home__cards-container">
            <Card
              iconLink={'card4-icon.svg'}
              title={'Atrakcje Gali'}
              description={`Pokaz jazdy konnej, degustacja regionalnych produktów, 
              pokaz mody, wspólne rozkoszowanie się muzyką - a to wciąż nie wszystko. 
              Na uczestników Gali czekają liczne atrakcje.`}
              buttonLabel={'Poznaj program'}
              navigateTo={'/about'}
              backgroundColor={'#E5E9CD'}
            />
            <Card
              iconLink={'card5-icon.svg'}
              title={'Pałac i stadnina'}
              description={`Pałac Walewice wraz z otaczającym go parkiem, 
              to jedna z najcenniejszych siedzib magnackich w środkowej Polsce. 
              To niezwykle czarujące miejsce nadaje Gali niepowtarzalnego uroku. 
              Jeśli chcesz nieco dłużej cieszyć się pięknem okolic, możesz zarezerwować nocleg w Pałacu.`}
              buttonLabel={'Zarezerwuj nocleg'}
              navigateTo={'/about'}
              backgroundColor={'#99ADAA'}
            />
            <Card
              iconLink={'card6-icon.svg'}
              title={'Miejsce'}
              description={`Pałac został zbudowany w stylu klasycystycznym pod koniec XVIII wieku. 
              Był świadkiem romansu Marii Walewskiej z Napoleonem Bonaparte, 
              którego owoc - syn - przyszedł tu na świat w 1810 roku.`}
              buttonLabel={'Sprawdź dojazd'}
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
                Czekamy na Ciebie!
                <br /> Dołącz do nas!
              </p>
              <div className="Home__partners-buttonWrapper">
                <Button
                  buttonLabel={'Zgłoś swój udział'}
                  backgroundColor={'#B7C274'}
                  navigateTo={'/about'}
                  arrow={true}
                />
              </div>
            </div>
          </div>

          <h2 className="Home__partners-title">Darczyńcy & Partnerzy</h2>
          <div className="Home__partners-slider">
            <Slider />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
