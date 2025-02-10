import './modal.scss';

const Modal = ({ isOpen, message, onClose, event = 'registration-sucess' }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      {event === 'registration-sucess' && (
        <div className="modal">
          <h2 className="modal-title">
            Dziękujemy za chęć
            <br />
            udziału w Gali!
          </h2>
          <p className="modal-description">
            W celu sfinalizowania zgłoszenia prosimy o dokonanie wpłaty. Masz
            też możliwość zapłacić później. Następnie wszystkie niezbędne
            informację wyślemy na Twój e-mail.
          </p>
          <button
            className=" modal-button modal-button--white"
            onClick={onClose}>
            Zapłać później
          </button>
          <button
            className=" modal-button modal-button--green"
            onClick={onClose}>
            Zapłać teraz
          </button>
        </div>
      )}

{event === 'registration-duplicateEmail' && (
        <div className="modal">
          <h2 className="modal-title">
            Dziękujemy za chęć
            <br />
            udziału w Gali!
          </h2>
          <p className="modal-description">
            W celu sfinalizowania zgłoszenia prosimy o dokonanie wpłaty. Masz
            też możliwość zapłacić później. Następnie wszystkie niezbędne
            informację wyślemy na Twój e-mail.
          </p>
          <button
            className=" modal-button modal-button--white"
            onClick={onClose}>
            Zapłać później
          </button>
          <button
            className=" modal-button modal-button--green"
            onClick={onClose}>
            Zapłać teraz
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
