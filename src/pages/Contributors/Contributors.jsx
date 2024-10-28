import '../../styles/index.scss';
import './contributors.scss';
import { Button } from '../../components/Button/Button.jsx';

const Contributors = () => {
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
                Dla Darczyńców
              </h1>
              <p className="Contributors__topContainer-description">
                Organizacja Gali jest ambitnym i niezwykle doniosłym
                przedsięwzięciem. Wydarzenie nie mogłoby się odbyć bez
                nieocenionego wsparcia, zaangażowania i pomocy Darczyńców oraz
                naszych Partnerów.
                <p>&nbsp;</p>
                Jako Fundacja doceniamy Darczyńców i Partnerów poprzez
                prezentowanie ich wsparcia w mediach społecznościowych oraz na
                stronie internetowej. Istnieje również możliwość rozstawienia
                materiałów promocyjnych podczas Gali oraz umieszczenia ich w
                pakietach powitalnych dla uczestników.
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
                    src={`/partners&contibutors/patroniHonorowi/patron-${i}.png`}
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
                    src={`/partners&contibutors/patronMedialny/patron-${i}.jpg`}
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
                    src={`/partners&contibutors/patron/patron-${i}.jpg`}
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
                    src={`/partners&contibutors/partnerzy/patron-${i}.jpg`}
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
              Dołącz do grona naszych Darczyńców i Partnerów!
            </p>
            <p className="Contributors__greenLabel-botText">
              Jeśli widzisz ze swojej strony możliwość udzielenia wsparcia
              rzeczowego, finansowego lub organizacyjnego, zapraszamy -
              Skontaktuj się z nami!
            </p>
            <div className="Contributors__greenLabel-button">
              <Button
                buttonLabel={'Zostań Darczyńcą'}
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
