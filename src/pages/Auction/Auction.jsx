import '../../styles/index.scss';
import './auction.scss';

const Program = () => {
  return (
    <>
      <main className="Auction">
        <div className="Auction-container">
          <div className="Auction__topContainer">
            <div className="Auction__topContainer-greenLayer">
              <div className="Auction__topContainer-content">
                <h1 className="Auction__topContainer-title">Aukcja</h1>
                <p className="Auction__topContainer-description">
                  Nasza charytatywna Aukcja to festiwal dobroczynności i
                  bezinteresowności. Wspaniali ludzie o wielkich sercach dzielą
                  się z nami tym, co najlepsze. Wśród artefaktów wystawianych na
                  Aukcję znaleźć można m.in. dzieła sztuki współczesnej,
                  wzornictwo użytkowe, rękodzieło, przedmioty codziennego
                  użytku, przedmioty kolekcjonerskie czy vouchery na
                  niezapomniane przeżycia i relaksujące chwile.
                </p>
                <div className="Auction__topContainer-bigText">
                  Znajdź coś dla siebie!
                </div>
              </div>
            </div>
          </div>

          <section className="Auction__agenda1">
            <div className="Auction__agenda-container">
              <h2 className="Auction__agenda1-title">Agenda</h2>

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
