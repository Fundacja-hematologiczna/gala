import { Button } from '../../../components/Button/Button';
import './ContactForm.scss';

const ContactFormAccepted = () => {
  return (
    <section className="Gratulation">
      <div className="Gratulation__container">
        <h2 className="Gratulation__title">Dziękujemy!</h2>
        <img
          src="/envelope.svg"
          alt="Wysłane poprrawnie"
          className="Gratulation__image"
        />
        <p className="Gratulation__description">
          Twoja wiadomość została wysłana. Spodziewaj się od nas e-maila
          potwierdzającego.
        </p>
        <div className="Gratulation__button">
          <Button
            navigateTo={'/contact'}
            buttonLabel={'Powrót do formularza'}
            backgroundColor={'#FFFFFF'}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactFormAccepted;
