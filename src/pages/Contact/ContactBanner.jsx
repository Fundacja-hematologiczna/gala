const ContactBanner = () => {
  return (
    <div className="Contact-container">
      <div className="Contact__topContainer">
        <div className="Contact__topContainer-img"></div>

        <div className="Contact__topContainer-content">
          <h1 className="Contact__topContainer-title">Kontakt</h1>
          <p className="Contact__topContainer-description">
            Jeśli chcesz przekazać przedmiot i stać się Darczyńcą, lub rozważasz
            współpracę jako Partner, skontaktuj się z nami, aby uzyskać więcej
            informacji. Z radością odpowiemy na pytania i pomożemy Ci w
            realizacji Twojej intencji.
          </p>
          <p className="Contact__topContainer-description--bold">
            Czekamy na Ciebie!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
