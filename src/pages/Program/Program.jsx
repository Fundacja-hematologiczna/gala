import '../../styles/index.scss';
import './program.scss';
import { Button } from '../../components/Button/Button.jsx';

const Program = () => {
  return (
    <>
      <main className="Program">
        <div className="Program-container">
          <div className="Program__topContainer">
            <div className="Program__topContainer-content">
              <h1 className="Program__topContainer-title">Program</h1>
              <p className="Program__topContainer-description">
                Trzecia gala charytatywna to bogaty program pełen różnorodnych
                atrakcji, od uroczystego poloneza po koncert zespołu Heima.
                Uczestnicy będą mogli wziąć udział w aukcjach, pokazach mody i
                jazdy konnej, a także zwiedzać Pałac. Zarezerwuj swój udział już
                teraz i dołącz do nas w tę niezapomnianą noc zakończoną grillem
                i after party!
              </p>
              <div className="Program__topContainer-button">
                <Button
                  buttonLabel={'Zgłoś swój udział'}
                  backgroundColor={'#B7C274'}
                  navigateTo={'/about'}
                />
              </div>
            </div>
          </div>

          <section className="Program__agenda">
            <div className="Program__agenda-container">
              <h2 className="Program__agenda-title">Agenda</h2>
              <div className="Program__agenda-list">
                <div className="Program__agenda-row">
                  <div className="Program__agenda-time ">10:30 - 12:30</div>
                  <p className="Program__agenda-description">
                    Rejestracja Gości
                  </p>
                </div>

                <div className="Program__agenda-row">
                  <div className="Program__agenda-time Program__agenda-time--gray">
                    10:30 - 12:30
                  </div>
                  <p className="Program__agenda-description">Otwarcie Gali</p>
                </div>

                <div className="Program__agenda-row">
                  <div className="Program__agenda-time ">10:30 - 12:30</div>
                  <p className="Program__agenda-description">
                    Recital Alicji Borkowskiej
                  </p>
                </div>

                <div className="Program__agenda-row">
                  <div className="Program__agenda-time Program__agenda-time--gray">
                    10:30 - 12:30
                  </div>
                  <p className="Program__agenda-description">
                    Koncert Michała Borkowskiego
                  </p>
                </div>

                <div className="Program__agenda-row">
                  <div className="Program__agenda-time ">10:30 - 12:30</div>
                  <p className="Program__agenda-description">Obiad</p>
                </div>

                <div className="Program__agenda-row">
                  <div className="Program__agenda-time Program__agenda-time--gray">
                    14:30 - 15:00
                  </div>
                  <p className="Program__agenda-description">
                    Wystawa przedmiotów aukcyjnych w Piwnicach Pałacu połączona
                    z degustacją wina{' '}
                  </p>
                </div>

                <div className="Program__agenda-row">
                  <div className="Program__agenda-time ">14:45 - 15:00</div>
                  <p className="Program__agenda-description">
                    Zwiedzanie apartamentu Napoleona
                  </p>
                </div>

                <div className="Program__agenda-row">
                  <div className="Program__agenda-time Program__agenda-time--gray">
                    15:00 - 15:30
                  </div>
                  <p className="Program__agenda-description">
                    Aukcja charytatywna część 1
                  </p>
                </div>

                <div className="Program__agenda-row">
                  <div className="Program__agenda-time ">15:30 - 15:45</div>
                  <p className="Program__agenda-description">Pokaz konny</p>
                </div>

                <div className="Program__agenda-row">
                  <div className="Program__agenda-time Program__agenda-time--gray">
                    15:45 - 16:15
                  </div>
                  <p className="Program__agenda-description">
                    Aukcja charytatywna część 2
                  </p>
                </div>

                <div className="Program__agenda-row">
                  <div className="Program__agenda-time ">16:15 - 16:30</div>
                  <p className="Program__agenda-description">Pokaz mody</p>
                </div>

                <div className="Program__agenda-row">
                  <div className="Program__agenda-time Program__agenda-time--gray">
                    16:30 - 17:00
                  </div>
                  <p className="Program__agenda-description">
                    Aukcja charytatywna część 3
                  </p>
                </div>

                <div className="Program__agenda-row">
                  <div className="Program__agenda-time ">17:00 - 17:15</div>
                  <p className="Program__agenda-description">
                    Nominowanie Ambasadorów Fundacji{' '}
                  </p>
                </div>

                <div className="Program__agenda-row">
                  <div className="Program__agenda-time Program__agenda-time--gray">
                    17:15 - 17:30
                  </div>
                  <p className="Program__agenda-description">
                    Podsumowanie Gali
                  </p>
                </div>

                <div className="Program__agenda-row">
                  <div className="Program__agenda-time ">17:30 - 18:00</div>
                  <p className="Program__agenda-description">Koncert Eni</p>
                </div>

                <div className="Program__agenda-row">
                  <div className="Program__agenda-time Program__agenda-time--gray">
                    18:00 - 18:30
                  </div>
                  <p className="Program__agenda-description">
                    Koncert Kapela Szymona
                  </p>
                </div>

                <div className="Program__agenda-row">
                  <div className="Program__agenda-time ">18:30 - 21:00</div>
                  <p className="Program__agenda-description">Grill</p>
                </div>

                <div className="Program__agenda-row">
                  <div className="Program__agenda-time Program__agenda-time--gray">
                    21:00 - 02:00
                  </div>
                  <p className="Program__agenda-description">
                    After Party w piwnicach Pałacu
                  </p>
                </div>
              </div>
            </div>
          </section>
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

export default Program;
