import '../../styles/index.scss';
import './place.scss';
import { Button } from '../../components/Button/Button.jsx';

const Place = () => {
  const handleNavigate = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=Walewice+39,+99-423+Walewice`;

    window.open(googleMapsUrl, '_blank');
  };
  return (
    <>
      <main className="Place">
        <div className="Place-container">
          <div className="Place__topContainer">
            <div className="Place__topContainer-greenScreen">
              <div className="Place__topContainer-content">
                <h1 className="Place__topContainer-title">
                  Miejsce wydarzenia{' '}
                </h1>
                <p className="Place__topContainer-description">
                  Pałac i stadnina znajdują się w malowniczej miejscowości
                  Walewice, położonej w centralnej Polsce,
                  <br /> w województwie łódzkim. To historyczne miejsce jest
                  oddalone około 50 km na północny wschód od Łodzi - to około
                  godzinna podróż autem. <br /> Z centrum Łodzi można także
                  dotrzeć do Walewic podróżując początkowo pociągiem do Łowicza,
                  a stamtąd taksówką do Pałacu.{' '}
                </p>
              </div>
            </div>
          </div>

          <div className="Place-map-container">
            <div className="Place__map">
              <div className="Place__map-card">
                <h2 className="Place__map-card-title">
                  III Gala Charytatywna odbędzie się w Pałacu Walewskich w
                  Walewicach
                </h2>

                <div className="Place__map-card-description">
                  <p className="Place__map-card-descriptionBold">Miejsce:</p>
                  <p>Pałac i Stadnina Koni w Walewicach</p>
                  <p>&nbsp;</p>
                  <p className="Place__map-card-descriptionBold">Adres:</p>
                  <p>Walewice 39</p>
                  <p>99-423 Walewice</p>
                  <p>&nbsp;</p>
                  <p>
                    <span className="Place__map-card-descriptionBold">
                      Telefon:{' '}
                    </span>
                    730-118-500{' '}
                  </p>
                  <p>&nbsp;</p>
                  <p className="Place__map-card-descriptionBold">Email:</p>
                  <p>kontakt@fundacja.hematologiczna.org</p>
                </div>
              </div>

              <div className="Place__map-img" onClick={handleNavigate} />
            </div>
          </div>
        </div>

        <section className="Place__greenLabel">
          <div className="Place__greenLabel-container">
            <p className="Place__greenLabel-topText">
              Chcesz do nas dołączyć,
              <br /> ale nie wiesz jak?
            </p>
            <p className="Place__greenLabel-botText">
              Formularz przeprowadzi Cię przez proces rejestracji.
            </p>
            <div className="Place__greenLabel-button">
              <Button
                buttonLabel={'Zgłoś swój udział'}
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

export default Place;
